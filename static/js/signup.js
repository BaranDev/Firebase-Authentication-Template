/*
 * signup.js | Sign-Up Logic
 * ==========================
 * Handles email/password account creation using Firebase Auth.
 * On success, stores minimal user data in the Flask session
 * and redirects to the signed-in page.
 *
 * This script is loaded by both template.html (modal) and signup.html (standalone).
 * Both pages use the same element IDs: #signup-email, #signup-password, #signup-form.
 */

import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// ──────────────────────────────────────────────
// Sign-Up Form Handler
// ──────────────────────────────────────────────
document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // NOTE: Firebase Auth handles password hashing server-side.
  // Never hash passwords on the client because it breaks password reset
  // and adds no security since the hash just becomes the password.

  try {
    const userCredential = await createUserWithEmailAndPassword(
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
      case "auth/email-already-in-use":
        alert("An account with this email already exists.");
        break;
      case "auth/weak-password":
        alert("Password is too weak. Use at least 6 characters.");
        break;
      case "auth/invalid-email":
        alert("Please enter a valid email address.");
        break;
      default:
        alert("Sign-up failed: " + error.message);
        console.error("Sign-up error:", error.code);
    }
  }
});
