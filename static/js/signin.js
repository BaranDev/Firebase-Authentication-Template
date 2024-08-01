import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { hashPassword } from "./script.js";

// Assuming this code is executed after the form submission
document.getElementById("signin-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form submission

  // Get email and password from the form
  const email = document.getElementById("signin-email").value;
  let password = await hashPassword(
    document.getElementById("signin-password").value
  );
  console.log("hashed password: ", password);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    alert("Successfully signed in to " + user.email);

    // Make a POST request to store user data in session
    await fetch("/set_session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    // Redirect to Flask route
    window.location.href = "/signedin";
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === "auth/invalid-credential") {
      alert("Invalid Credentials");
    } else {
      alert("Error logging in: " + errorMessage + " " + errorCode);
    }
  }
});
