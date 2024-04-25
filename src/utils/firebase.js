// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeoix09q7iMtK4DAVo9AxbzjoSLEuNn_0",
  authDomain: "netflixgpt-76686.firebaseapp.com",
  projectId: "netflixgpt-76686",
  storageBucket: "netflixgpt-76686.appspot.com",
  messagingSenderId: "752065758509",
  appId: "1:752065758509:web:1b060c38581c2df6787fa4",
  measurementId: "G-BMBJESQVPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();