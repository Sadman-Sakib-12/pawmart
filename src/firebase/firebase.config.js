// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtXArUqUOdQq1LRAjyl1_cwEpFbwF2nWs",
  authDomain: "pawmart-21ebe.firebaseapp.com",
  projectId: "pawmart-21ebe",
  storageBucket: "pawmart-21ebe.firebasestorage.app",
  messagingSenderId: "986935304775",
  appId: "1:986935304775:web:15d6dfafd015d1a093c762",
  measurementId: "G-DQSM1FK546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)