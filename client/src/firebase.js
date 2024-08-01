// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-54ff6.firebaseapp.com",
  projectId: "mern-blog-54ff6",
  storageBucket: "mern-blog-54ff6.appspot.com",
  messagingSenderId: "511449700311",
  appId: "1:511449700311:web:87ac06d1675dfdc2f41d92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);