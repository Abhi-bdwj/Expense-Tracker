// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCItMRBL-pWokVLS0QTUM3VsD1eWc0ZVwU",
  authDomain: "expense-tracker-5bf16.firebaseapp.com",
  projectId: "expense-tracker-5bf16",
  storageBucket: "expense-tracker-5bf16.appspot.com",
  messagingSenderId: "198906823693",
  appId: "1:198906823693:web:7ed48746a9ca659b020144",
  measurementId: "G-D3PCVHT06W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);