// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAM_-sSUAZ9_VYlKkKCKmi-I94MA_jObM",
  authDomain: "the-news-dragon-75e2a.firebaseapp.com",
  projectId: "the-news-dragon-75e2a",
  storageBucket: "the-news-dragon-75e2a.appspot.com",
  messagingSenderId: "567706461117",
  appId: "1:567706461117:web:56f1b4cbf06f229dce68d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app