import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkDZ9ShZNsd5eK1GNjjNIye48bp8tQIrI",
  authDomain: "enterprise-analytics-dashboard.firebaseapp.com",
  projectId: "enterprise-analytics-dashboard",
  storageBucket: "enterprise-analytics-dashboard.firebasestorage.app",
  messagingSenderId: "248097921908",
  appId: "1:248097921908:web:8293c6c857d07ba1462a21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);