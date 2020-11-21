// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWZx5H2Cgc6xRTtRZ5Ku5k5T4q8lJiSzI",
    authDomain: "testform-b2dd8.firebaseapp.com",
    databaseURL: "https://testform-b2dd8.firebaseio.com",
    projectId: "testform-b2dd8",
    storageBucket: "testform-b2dd8.appspot.com",
    messagingSenderId: "763665379605",
    appId: "1:763665379605:web:f430952f04897ada8d791c"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");



//Listen for a submit
document.querySelector(".contact-form").addEventListener("submit,submitForm");

function submitForm(e){

    e.preventDefault();
    // Get input Values
    let name=document.querySelector(".name").value;
    let name=document.querySelector(".email").value;
    let name=document.querySelector(".subject").value;
    let name=document.querySelector(".message").value;
    console.log(name,email,subject,message);


    saveContactInfo(name,email,subject,message);
    
    document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      submit : subject,
      message: message,
    });
  }
  