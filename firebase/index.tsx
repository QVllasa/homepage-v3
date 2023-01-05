import {getFirestore} from 'firebase/firestore';
import {getFunctions} from "@firebase/functions";
import {initializeApp} from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDWC5ytsEtaXpZ_EOb44TNEWYFDjy3Afqg",
    authDomain: "my-homepage-f50b5.firebaseapp.com",
    projectId: "my-homepage-f50b5",
    storageBucket: "my-homepage-f50b5.appspot.com",
    messagingSenderId: "158515644731",
    appId: "1:158515644731:web:10220545f0b8eee05e0f1e",
    measurementId: "G-MTMKNTFJS8"
};

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
// }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app)

export {functions, db};