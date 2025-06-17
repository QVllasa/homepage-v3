import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {FirebaseAppProvider} from "reactfire";
import {FirebaseSDKProviders} from "../firebase/firebase-provider";
import {DarkModeContextProvider} from "../stores/darkmode-context";
import {Layout} from "../components/layout/Layout";
import {appWithTranslation} from 'next-i18next';

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

function MyApp({Component, pageProps}: AppProps) {
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

export default appWithTranslation(MyApp);
