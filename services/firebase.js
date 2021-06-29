import firebase from 'firebase/app';
import 'firebase/firestore';   // for cloud firestore

var config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
};

let app = null;

if (!firebase.apps.length) {
    app = firebase.initializeApp(config)
} else {
    app = firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();


export default app;