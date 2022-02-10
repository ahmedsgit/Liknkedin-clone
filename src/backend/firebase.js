import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBy2TM5CXFX-sSAFr1alQieBEXzh57cq24',
    authDomain: 'linkedin-clone-5217a.firebaseapp.com',
    projectId: 'linkedin-clone-5217a',
    storageBucket: 'linkedin-clone-5217a.appspot.com',
    messagingSenderId: '190211677592',
    appId: '1:190211677592:web:bae91c6c04ee019f4ddfed',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };