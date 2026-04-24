import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSYtIxkwI2PMePKwIQ_JkEXU9kFxlh9Bs",
    authDomain: "portfolio-defa9.firebaseapp.com",
    projectId: "portfolio-defa9",
    storageBucket: "portfolio-defa9.firebasestorage.app",
    messagingSenderId: "898746740036",
    appId: "1:898746740036:web:f3f635cc331c3ab3d1bb11",
    measurementId: "G-3277LB9N5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
