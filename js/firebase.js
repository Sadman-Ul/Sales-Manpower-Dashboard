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
// Firestore document used by the dashboard
const dashboardDoc = db.collection("dashboard").doc("latest");

// Save dashboard data
async function saveDashboardData(payload) {
  await dashboardDoc.set(payload);
}

// Load dashboard data
async function loadDashboardData() {
  const doc = await dashboardDoc.get();
  if (!doc.exists) return null;
  return doc.data();
}

// Listen for real-time updates
function listenDashboardData(callback) {
  return dashboardDoc.onSnapshot((doc) => {
    if (doc.exists) {
      callback(doc.data());
    }
  });
}
console.log("✅ Firebase connected successfully");
