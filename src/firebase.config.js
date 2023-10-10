// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApiWJefW4pTU94Y9jW_13oMnolsy8mRzY",
  authDomain: "bloodcare-bangladesh.firebaseapp.com",
  projectId: "bloodcare-bangladesh",
  storageBucket: "bloodcare-bangladesh.appspot.com",
  messagingSenderId: "963876943893",
  appId: "1:963876943893:web:431b4054f19341ad2d361c",
  measurementId: "G-3N8NJ7PQWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;