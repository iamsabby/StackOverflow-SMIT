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
  
  

// // Save comment to Firestore and display it
// document.getElementById('saveButton').addEventListener('click', function() {
//     console.log("Submit button clicked"); // Check if the event listener is triggered

//     const comment = document.getElementById('descriptionTextarea').value;

//     console.log("Comment:", comment); // Check if the comment value is retrieved correctly

//     db.collection('comments').add({
//         comment: comment
//     })
//     .then(function(docRef) {
//         console.log('Comment written with ID: ', docRef.id);
//         document.getElementById('descriptionTextarea').value = ''; // Clear textarea after saving

//         // Display the comment below the buttons
//         const commentContainer = document.createElement('div');
//         commentContainer.classList.add('mt-3');
//         const commentText = document.createElement('p');
//         commentText.textContent = comment;
//         commentContainer.appendChild(commentText);
//         document.getElementById('commentSection').appendChild(commentContainer);
//     })
//     .catch(function(error) {
//         console.error('Error adding comment: ', error);
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton'); // Assuming 'submitButton' is the ID of the button

    // Check if the user is authenticated
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            submitButton.addEventListener('click', function () {
                const descriptionTextarea = document.getElementById('descriptionTextarea');
                const description = descriptionTextarea.value.trim();

                if (description === '') {
                    alert('Please enter a comment.');
                    return;
                }

                // Save the comment to Firestore
                db.collection('comments').add({
                    userId: user.uid,
                    comment: description,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(function(docRef) {
                    console.log('Comment written with ID: ', docRef.id);
                    // Clear textarea after saving
                    descriptionTextarea.value = '';
                })
                .catch(function(error) {
                    console.error('Error adding comment: ', error);
                });
            });

            // Fetch comments from Firestore and display them
            db.collection('comments').orderBy('timestamp', 'desc').onSnapshot(function(snapshot) {
                const commentSection = document.getElementById('commentSection');
                commentSection.innerHTML = ''; // Clear previous comments

                snapshot.forEach(function(doc) {
                    const commentData = doc.data();
                    const commentElement = document.createElement('div');
                    commentElement.classList.add('comment');
                    commentElement.innerHTML = `
                        <p>${commentData.comment}</p>
                        <hr>
                    `;
                    commentSection.appendChild(commentElement);
                });
            });
        } else {
            // User is not signed in.
            console.log('User is not logged in.');
        }
    });
});


