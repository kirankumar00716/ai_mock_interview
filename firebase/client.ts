// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFT8Tm5XB_5MhqY5Gmu2UMrqazXaT28p0",
    authDomain: "prepwise-d0703.firebaseapp.com",
    projectId: "prepwise-d0703",
    storageBucket: "prepwise-d0703.firebasestorage.app",
    messagingSenderId: "33099473172",
    appId: "1:33099473172:web:9be4b9fa4c117785fa2201",
    measurementId: "G-64VBNTJ54G"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig):getApp();

export const auth=getAuth(app);

export const db=getFirestore(app)