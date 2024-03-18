// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT7oRUKVMap7jlS5I0-0_ASvu0jwNMTlM",
  authDomain: "login-star-wars.firebaseapp.com",
  projectId: "login-star-wars",
  storageBucket: "login-star-wars.appspot.com",
  messagingSenderId: "375561868143",
  appId: "1:375561868143:web:65d22b5018b44524368e9a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase