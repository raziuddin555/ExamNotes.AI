import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "examnotes-147b4.firebaseapp.com",
    projectId: "examnotes-147b4",
    storageBucket: "examnotes-147b4.firebasestorage.app",
    messagingSenderId: "553995871946",
    appId: "1:553995871946:web:12842f9b97092713ab3633"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }