import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAQ8S_iJwGzwQ37dEO8gLOVsmjdj0YGdYU",
    authDomain: "ecommerce-db-34ad8.firebaseapp.com",
    databaseURL: "https://ecommerce-db-34ad8.firebaseio.com",
    projectId: "ecommerce-db-34ad8",
    storageBucket: "ecommerce-db-34ad8.appspot.com",
    messagingSenderId: "184984290953",
    appId: "1:184984290953:web:7892437f824d7c2b4e2858",
    measurementId: "G-CMTXMDK7J1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;