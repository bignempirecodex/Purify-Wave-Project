import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEWy295lIajElyKBLxuO4XxovyyW1k6i4",
  authDomain: "purify-wave.firebaseapp.com",
  projectId: "purify-wave",
  storageBucket: "purify-wave.appspot.com",
  messagingSenderId: "280867800141",
  appId: "1:280867800141:web:38bc5488de62d9ab4d8804",
  measurementId: "G-SJRT8VGWYL",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);
const messageRef = ref(db, "messages");

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
// save message to firebase
function saveMessage(name, email, message, country) {
  push(messageRef, {
    name: name,
    email: email,
    message: message,
    country: country,
  });
}
// to ckeck if the form is submitting
function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");
  var country = getInputVal("country");

  saveMessage(name, email, message, country);
}

document.getElementById("contactForm").addEventListener("submit", submitForm);
