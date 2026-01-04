
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtXArUqUOdQq1LRAjyl1_cwEpFbwF2nWs",
  authDomain: "pawmart-21ebe.firebaseapp.com",
  projectId: "pawmart-21ebe",
  storageBucket: "pawmart-21ebe.firebasestorage.app",
  messagingSenderId: "986935304775",
  appId: "1:986935304775:web:15d6dfafd015d1a093c762",
  measurementId: "G-DQSM1FK546"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)