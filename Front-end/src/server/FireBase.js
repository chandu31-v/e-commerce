// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1QO3NPusPu4MCaZLiLxiZZeyU0-2pLpA",
  authDomain: "clone-169be.firebaseapp.com",
  projectId: "clone-169be",
  storageBucket: "clone-169be.appspot.com",
  messagingSenderId: "1046119387408",
  appId: "1:1046119387408:web:40bb11a3027e23f8879595",
  measurementId: "G-9QDJBWY4LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authenticate
const auth = getAuth(app);

export {auth}