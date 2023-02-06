// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoCN-XP9pmHQBRDMqIsElak2oJH552d1A",
  authDomain: "raintree-book-shop.firebaseapp.com",
  projectId: "raintree-book-shop",
  storageBucket: "raintree-book-shop.appspot.com",
  messagingSenderId: "472897491061",
  appId: "1:472897491061:web:d4189cd4c41937c4de683c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
