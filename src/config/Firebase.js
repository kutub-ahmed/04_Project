// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyANnqkGI8jk2oDYchC0hjTGmPoCKdH1o",
  authDomain: "vite-contact1-2311f.firebaseapp.com",
  projectId: "vite-contact1-2311f",
  storageBucket: "vite-contact1-2311f.appspot.com",
  messagingSenderId: "672862338184",
  appId: "1:672862338184:web:e952e3575593b00db5333d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);






