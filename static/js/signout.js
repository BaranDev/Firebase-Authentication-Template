/*
 * signout.js | Sign-Out Logic
 * ============================
 * Handles signing the user out by:
 *   1. Calling the Flask /signout route to clear the server session
 *   2. Clearing any client-side session storage
 *   3. Redirecting to the home page
 *
 * If you add Firebase client-side auth state listeners in the future,
 * you should also call firebase `signOut(auth)` here:
 *
 *   import { auth } from "./firebase-config.js";
 *   import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 *   await signOut(auth);
 */

document
  .getElementById("signout-button")
  .addEventListener("click", async () => {
    // Clear the Flask server-side session
    await fetch("/signout");

    // Clear any client-side storage
    sessionStorage.clear();

    alert("Successfully signed out.");
    window.location.href = "/";
  });
