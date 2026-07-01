// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrGDq0Lh4HRpXmLk5cdWuzXE-O38plIz8",
  authDomain: "pharma-sales-dashboard.firebaseapp.com",
  projectId: "pharma-sales-dashboard",
  storageBucket: "pharma-sales-dashboard.firebasestorage.app",
  messagingSenderId: "492225128910",
  appId: "1:492225128910:web:d08f670ceacbd5e398e39f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore Database
const db = firebase.firestore();

console.log("✅ Firebase connected successfully");
