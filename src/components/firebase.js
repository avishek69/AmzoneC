import firebase from "firebase";

const firebaseApp = firebase.initiliazeApp({
  apiKey: "AIzaSyAGJDPOmNWwkmroYV94uVA_6bRWFN4ZrAM",
  authDomain: "c-605e2.firebaseapp.com",
  projectId: "c-605e2",
  storageBucket: "c-605e2.appspot.com",
  messagingSenderId: "1057796499698",
  appId: "1:1057796499698:web:9b633b3fbce01d3e1a086b",
  measurementId: "G-PZW5VZV006",
});
// const db = firebaseApp.firestore();
const auth = firebaseApp.auth;

export { auth };
