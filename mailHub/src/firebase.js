// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getauth, GoogleAuthProvider} from "firebase/auth";
import {getFireStore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTq0Td_rZN38mlO4h-an793_yU3osdCTA",
  authDomain: "clone-yt-5dc5f.firebaseapp.com",
  projectId: "clone-yt-5dc5f",
  storageBucket: "clone-yt-5dc5f.firebasestorage.app",
  messagingSenderId: "305315865535",
  appId: "1:305315865535:web:b86489463a595d8ded770a",
  measurementId: "G-FGFQ8ZB5HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getauth();
export const db = getFireStore(app);

export const provider = new GoogleAuthProvider();