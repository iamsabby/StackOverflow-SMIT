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
  
//   const signup = () => {
//       const email = document.getElementById("email").value;
//       const password = document.getElementById("password").value;
  
//       console.log(email);
//       console.log(password);
  
//       auth.createUserWithEmailAndPassword(email, password)
//           .then((userCredential) => {
//               // Signed in
//               console.log("User signed up successfully:", userCredential.user);
//               // Redirect or display a success message
//           })
//           .catch((error) => {
//               console.error("Error signing up:", error);
//               // Handle errors, display error messages, etc.
//           });
//   }

const signup = () => {
    event.preventDefault(); // Prevent default form submission behavior

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email);
    console.log(password);

    // Check if the email is already registered
    firebase.auth().fetchSignInMethodsForEmail(email)
        .then((methods) => {
            if (methods && methods.length > 0) {
                // Email is already registered
                const errorMessage = "This email is already in use.";
                console.error("Error signing up:", errorMessage);
                
                // Display error message to the user
                const errorMessageContainer = document.getElementById("error-message-container");
                const errorMessageElement = document.getElementById("error-message");
                errorMessageElement.textContent = errorMessage;
                errorMessageContainer.classList.remove("d-none");
            } else {
                // Email is not registered, proceed with sign-up
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        // Signed in
                        var user = userCredential.user;
                        console.log("User signed up successfully:", user);
                        // You can redirect the user or show a success message here
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.error("Error signing up:", errorMessage);
                        
                        // Display error message to the user
                        const errorMessageContainer = document.getElementById("error-message-container");
                        const errorMessageElement = document.getElementById("error-message");
                        errorMessageElement.textContent = errorMessage;
                        errorMessageContainer.classList.remove("d-none");
                    });
            }
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.error("Error fetching sign-in methods:", errorMessage);
        });
}


const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

document.getElementById("login-button").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if user exists before login attempt
    auth.fetchSignInMethodsForEmail(email)
      .then((signInMethods) => {
        if (signInMethods.length === 0) {
          // Account doesn't exist, display error message
          document.getElementById("error-message").innerText = "No such account exists. Please sign up first.";
        } else {
          // User exists, proceed with login attempt using Firebase Auth
          auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // User successfully logged in
              // Redirect to a different page or display a success message
              console.log("Logged in successfully!");
            })
            .catch((error) => {
              // Handle other login errors (e.g., wrong password)
              console.error("Login error:", errorMessage);
            });
        }
      })
      .catch((error) => {
        // Handle fetching sign-in methods error
        console.error("Error fetching sign-in methods:", error);
      });
  });

