<script type="module">
  // Import Firebase modules (for modern browsers)
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

  // Your Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyBUgpz_1wkT02HravpvyVcB3GGll8V26JE",
      authDomain: "spaceblox-287fb.firebaseapp.com",
      projectId: "spaceblox-287fb",
      storageBucket: "spaceblox-287fb.appspot.com",
      messagingSenderId: "824474198979",
      appId: "824474198979"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Sign Up Function
  window.signUp = function () {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
              alert("Signup successful!");
          })
          .catch(error => {
              alert(error.message);
          });
  };

  // Login Function
  window.login = function () {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      signInWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
              alert("Login successful!");
          })
          .catch(error => {
              alert(error.message);
          });
  };

  // Logout Function
  window.logout = function () {
      signOut(auth).then(() => {
          alert("Logged out successfully!");
      });
  };

  // Check User Status
  onAuthStateChanged(auth, user => {
      if (user) {
          document.getElementById("status").innerText = "Logged in as: " + user.email;
      } else {
          document.getElementById("status").innerText = "Not logged in";
      }
  });
</script>
