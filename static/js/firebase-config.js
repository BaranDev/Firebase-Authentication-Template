/*
 * firebase-config.js | Firebase Initialization
 * =============================================
 * This module fetches the Firebase config from the Flask backend
 * and initializes the Firebase app + Auth service.
 *
 * Other modules (signin.js, signup.js) import `auth` from here.
 *
 * We use top-level `await` so that `auth` is fully initialized
 * before any importing module tries to use it.
 *
 * To add more Firebase services (Firestore, Storage, etc.),
 * initialize them here and export them alongside `auth`.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Fetch Firebase configuration from the Flask backend
const response = await fetch("/firebase_config");
const firebaseConfig = await response.json();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ──────────────────────────────────────────────
// Add more Firebase services here as needed:
//
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// const db = getFirestore(app);
// export { db };
//
// import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
// const storage = getStorage(app);
// export { storage };
// ──────────────────────────────────────────────

export { app, auth };
