// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVZI476lhHBCTKSBkG3xoVgwpu6Qdrg8A",
  authDomain: "sofa-mart.firebaseapp.com",
  projectId: "sofa-mart",
  storageBucket: "sofa-mart.appspot.com",
  messagingSenderId: "167192001936",
  appId: "1:167192001936:web:27b34eddbd66bc9da28715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;