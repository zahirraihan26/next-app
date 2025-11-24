
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
   apiKey: "AIzaSyBk9Y2zzruhFDWxegSvqEj743J1oUvQOw4",
  authDomain: "next-js-auth-78578.firebaseapp.com",
  projectId: "next-js-auth-78578",
  storageBucket: "next-js-auth-78578.firebasestorage.app",
  messagingSenderId: "236546534124",
  appId: "1:236546534124:web:321ba338009ebe4f4c53c9",
  measurementId: "G-227RQJ85M9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

export {app, auth}

