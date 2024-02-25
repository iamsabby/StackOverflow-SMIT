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
            // Handle errors, display error messages, etc.
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