import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Assuming this code is executed after the form submission
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission

    // Get email and password from the form
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        alert('User created: ' + user.email);
        
        // Make a POST request to store user data in session
        await fetch('/set_session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        
        // Redirect to Flask route
        window.location.href = '/signedin';
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error creating user:', errorMessage+' '+errorCode);
    }
});