/*
 * signin.js | Sign-In Logic
 * ==========================
 * Handles email/password sign-in using Firebase Auth.
 * On success, stores minimal user data in the Flask session
 * and redirects to the signed-in page.
 *
 * This script is loaded by both template.html (modal) and signin.html (standalone).
 * Both pages use the same element IDs: #signin-email, #signin-password, #signin-form.
 */

import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// ──────────────────────────────────────────────
// Sign-In Form Handler
// ──────────────────────────────────────────────
document.getElementById("signin-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  // NOTE: Firebase Auth handles password hashing server-side.
  // Never hash passwords on the client because it breaks password reset
  // and adds no security since the hash just becomes the password.

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Store minimal user data in the Flask server-side session
    await fetch("/set_session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: user.uid,
        email: user.email,
      }),
    });

    // Redirect to the signed-in dashboard
    window.location.href = "/signedin";
  } catch (error) {
    // ──────────────────────────────────────────
    // Customize error messages here.
    // Full list of Firebase Auth error codes:
    // https://firebase.google.com/docs/auth/admin/errors
    // ──────────────────────────────────────────
    switch (error.code) {
      case "auth/invalid-credential":
        alert("Invalid email or password. Please try again.");
        break;
      case "auth/user-not-found":
        alert("No account found with this email.");
        break;
      case "auth/wrong-password":
        alert("Incorrect password.");
        break;
      case "auth/too-many-requests":
        alert("Too many failed attempts. Please try again later.");
        break;
      default:
        alert("Sign-in failed: " + error.message);
        console.error("Sign-in error:", error.code);
    }
  }
});
