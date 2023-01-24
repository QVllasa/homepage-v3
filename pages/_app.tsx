import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {FirebaseAppProvider} from "reactfire";
import {FirebaseSDKProviders} from "../firebase/firebase-provider";
import {DarkModeContextProvider} from "../stores/darkmode-context";
import {Layout} from "../components/layout/Layout";

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
        <DarkModeContextProvider>
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <FirebaseSDKProviders>
                    <Layout>
                        <Component  {...pageProps} />
                    </Layout>
                </FirebaseSDKProviders>
            </FirebaseAppProvider>
        </DarkModeContextProvider>

    )
}

