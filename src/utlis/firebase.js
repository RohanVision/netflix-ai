// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqry66_64hoeLxpv7OtJq5Wr822UZUJbE",
    authDomain: "netflix-ai-b7cc9.firebaseapp.com",
    projectId: "netflix-ai-b7cc9",
    storageBucket: "netflix-ai-b7cc9.firebasestorage.app",
    messagingSenderId: "532434535257",
    appId: "1:532434535257:web:4b779a84dd3ce23f7b8248",
    measurementId: "G-9XMSXY4VF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();