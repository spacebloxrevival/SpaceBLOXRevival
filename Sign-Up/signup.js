// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase config (replace with your own details)
const firebaseConfig = {
    apiKey: "AIzaSyBUgpz_1wkT02HravpvyVcB3GGll8V26JE",
    authDomain: "spaceblox-287fb.firebaseapp.com",
    projectId: "824474198979",
    storageBucket: "spaceblox-287fb.appspot.com",
    messagingSenderId: "824474198979",
    appId: "spaceblox-287fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Signup
document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup successful!");
            console.log("User:", userCredential.user);
        })
        .catch((error) => {
            alert(error.message);
            console.error(error);
        });
});
