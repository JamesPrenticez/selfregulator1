// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdVxa0cmvG2061BCtK4YWgIBkcKW6pN_c",
  authDomain: "selfregulator-ec5ea.firebaseapp.com",
  databaseURL: "https://selfregulator-ec5ea-default-rtdb.firebaseio.com",
  projectId: "selfregulator-ec5ea",
  storageBucket: "selfregulator-ec5ea.appspot.com",
  messagingSenderId: "205327288008",
  appId: "1:205327288008:web:68bc03c9759527079bc7fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Prepare Database
const db = getFirestore();

export { app, db};