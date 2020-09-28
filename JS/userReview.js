//TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8jQziNqJSONQFIb6wfwH7TDrp4K-ID2Q",
    authDomain: "matchupreview.firebaseapp.com",
    databaseURL: "https://matchupreview.firebaseio.com",
    projectId: "matchupreview",
    storageBucket: "matchupreview.appspot.com",
    messagingSenderId: "524785683677",
    appId: "1:524785683677:web:487eeb9d154263dce2df34"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Using the data from the Database
const databaseReference = firebase.database().ref(); // this is a reference to the root of the database
///////////////////
$('.review').fadeIn();
$('#flashMessage').slideDown(1000).delay(2000).slideUp(1000);
setSubmitButton();
function setSubmitButton() {
    $('#submitBtn').click( () => {
        const userName = $('#userNameInput').val();
        const gameReview = $('#gameReviewInput').val();
        const h3Heading = $("<h3></h3>").text(userName);
        const paragraphReview = $("<p></p>").text(gameReview);
        $('#newReviews').append(h3Heading);
        $('#newReviews').append(paragraphReview);
        $('#userNameInput').val("");
        $('#gameReviewInput').val("");
        $('#userNameInput').focus();
    });
}

databaseReference.push("gaming");
console.log(databaseReference);


