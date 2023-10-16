// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKt5zOX0SuYgSa7FlLwOXHsh1FP9rRjek",
  authDomain: "coffee-store-cdb59.firebaseapp.com",
  projectId: "coffee-store-cdb59",
  storageBucket: "coffee-store-cdb59.appspot.com",
  messagingSenderId: "534959466137",
  appId: "1:534959466137:web:7e7a1be8b5ba2c5c29ba08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;