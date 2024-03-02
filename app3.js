// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJmixFHYIINnXatkyoGTvVIl2yoCmPo98",
    authDomain: "stackoverflow-project-8bb0f.firebaseapp.com",
    projectId: "stackoverflow-project-8bb0f",
    storageBucket: "stackoverflow-project-8bb0f.appspot.com",
    messagingSenderId: "1080715830432",
    appId: "1:1080715830432:web:2348d96e7926398739d5c5",
    measurementId: "G-QFNTX4NB8G"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  


const login = () => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Sign in the user with email and password
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully, you can redirect the user or perform other actions
            console.log("User signed in successfully:", userCredential.user);
        })
        .catch((error) => {
            // Handle login errors, display error messages, etc.
            console.error("Error signing in:", error);

            // Check if the error is related to user not found (email not registered)
            if (error.code === 'auth/user-not-found') {
                // Display error message indicating that the email does not exist
                const errorDisplay = document.getElementById("errorDisplay");
                errorDisplay.textContent = "This email is not registered. Please sign up.";
                errorDisplay.style.display = "block";
            }
        });
};

// Add event listener for login form submission
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    login(); // Call login function
});

const handleLogin = () => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Sign in the user with email and password
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login successful, redirect to a new page
            window.location.replace("landing page2.html");
        })
        .catch((error) => {
            // Handle login errors
            console.error("Error signing in:", error);

            // Check if the error is related to user not found (email not registered)
            if (error.code === 'auth/user-not-found') {
                // Display error message indicating that the email does not exist
                const errorDisplay = document.getElementById("errorDisplay");
                errorDisplay.textContent = "This email is not registered. Please sign up.";
                errorDisplay.style.display = "block";
            }
        });
};

// Event listener for login form submission
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    handleLogin(); // Call login function
});
