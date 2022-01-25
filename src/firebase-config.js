// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG47qwxto3UHAHTgWxjgiNSHEg2jiIumU",
  authDomain: "noscasamos-36f06.firebaseapp.com",
  projectId: "noscasamos-36f06",
  storageBucket: "noscasamos-36f06.appspot.com",
  messagingSenderId: "531155959890",
  appId: "1:531155959890:web:10ab0226914bd913591f8b",
  measurementId: "G-CCGPPY68GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
