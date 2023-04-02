// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDZVP6eKkFc8tGGbDDcCstac1SiU3yJkA",
  authDomain: "richard-chiu-capstone-bs2023.firebaseapp.com",
  projectId: "richard-chiu-capstone-bs2023",
  storageBucket: "richard-chiu-capstone-bs2023.appspot.com",
  messagingSenderId: "219425822161",
  appId: "1:219425822161:web:45b9e5a793cf0e79c7bcf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
