// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";




const firebaseConfig = {
    apiKey: "AIzaSyCc05Ufp0GmE81MS1L49kfT-rKkxeM0zAg",
    authDomain: "linkedin-clone-yt-aea8f.firebaseapp.com",
    projectId: "linkedin-clone-yt-aea8f",
    storageBucket: "linkedin-clone-yt-aea8f.appspot.com",
    messagingSenderId: "727057250524",
    appId: "1:727057250524:web:b0dbb544d9c72e57ffdc19",
    measurementId: "G-9B763LGKLS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };