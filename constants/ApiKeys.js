
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";


// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const FirebaseConfig = {
    apiKey: "AIzaSyDMpvcU9ici6a_uIHYk6HHWOT4y27dLUaU",
    authDomain: "foodpantry-b9b68.firebaseapp.com",
    databaseURL: "https://foodpantry-b9b68.firebaseio.com",
    projectId: "foodpantry-b9b68",
    storageBucket: "foodpantry-b9b68.appspot.com",
    messagingSenderId: "569435884894",
    appId: "1:569435884894:web:3910b3068b302d94c713cf",
    measurementId: "G-VX3Y3SYC0T"
  }

var Firebase = firebase.initializeApp(FirebaseConfig);

export default Firebase;
