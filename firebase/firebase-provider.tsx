import {FirestoreProvider, FunctionsProvider, useFirebaseApp} from 'reactfire';
import {getFirestore} from 'firebase/firestore';
import {getFunctions} from "@firebase/functions";

// @ts-ignore
export function FirebaseSDKProviders({children}) {
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const functions = getFunctions(app);

    return (
        <FirestoreProvider sdk={firestore}>
            <FunctionsProvider sdk={functions}>
                {children}
            </FunctionsProvider>
        </FirestoreProvider>
    )
}
