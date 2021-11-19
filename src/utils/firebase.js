// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw_TmNz4Ro10XOHSAM6yaF8MRkjG8GhlM",
  authDomain: "blog-firebase-1e370.firebaseapp.com",
  projectId: "blog-firebase-1e370",
  storageBucket: "blog-firebase-1e370.appspot.com",
  messagingSenderId: "238030141492",
  appId: "1:238030141492:web:7b12d3863f82e16cf1b261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app