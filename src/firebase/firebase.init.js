// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkchfihRXjreAP8bvYRna7vc9TvUYIRDo",
  authDomain: "news-portal-with-firebase.firebaseapp.com",
  projectId: "news-portal-with-firebase",
  storageBucket: "news-portal-with-firebase.appspot.com",
  messagingSenderId: "465092959415",
  appId: "1:465092959415:web:2da388f67157b1784d8132",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
