import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {FirebaseAppProvider} from "reactfire";
import {FirebaseSDKProviders} from "../firebase/firebase-provider";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

export default function App({Component, pageProps}: AppProps) {

    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <FirebaseSDKProviders>
                <Component {...pageProps} />
            </FirebaseSDKProviders>
        </FirebaseAppProvider>
)
}

