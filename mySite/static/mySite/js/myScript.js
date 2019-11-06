// Initialize Firebase (ADD YOUR OWN DATA)

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBy34sCmqIrq9-sGaou-MFyX0HON5ZSnY",
    authDomain: "contactform-ce0fa.firebaseapp.com",
    databaseURL: "https://contactform-ce0fa.firebaseio.com",
    projectId: "contactform-ce0fa",
    storageBucket: "contactform-ce0fa.appspot.com",
    messagingSenderId: "731872447282",
    appId: "1:731872447282:web:83c4addd587c7b1615e52b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}
