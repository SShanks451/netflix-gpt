// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz_JB9bkCQ3Ej5vHvriBs0XwrF8Uuugpk",
  authDomain: "netflixgpt-a3ebd.firebaseapp.com",
  projectId: "netflixgpt-a3ebd",
  storageBucket: "netflixgpt-a3ebd.appspot.com",
  messagingSenderId: "113795995686",
  appId: "1:113795995686:web:0932c403fd57a80355aee7",
  measurementId: "G-M3G659K1WC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
