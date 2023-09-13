// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyByEw4ig_wa-3yBiqnwqCwGat4B6hi9wc0",
  authDomain: "platinhas-4a453.firebaseapp.com",
  projectId: "platinhas-4a453",
  storageBucket: "platinhas-4a453.appspot.com",
  messagingSenderId: "405249257482",
  appId: "1:405249257482:web:ef205e531073731b3f2ff3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
