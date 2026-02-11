/*firebaseconfig.js*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

let app=null;
let auth=null;

  // Fetch the Firebase configuration from the backend
fetch('/firebase_config')
.then(response => response.json())
.then(firebaseConfig => {
  // Initialize Firebase with the retrieved configuration
   // Initialize Firebase
   app = initializeApp(firebaseConfig);
   auth = getAuth(app);
})
.catch(error => {
  console.error('Error fetching Firebase configuration:', error);
});

export { app, auth };