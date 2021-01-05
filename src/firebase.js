import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBWYgfEFlFPasXy0A2EEAM5Vq5Bi9lsEtM",
    authDomain: "clone-c2453.firebaseapp.com",
    projectId: "clone-c2453",
    storageBucket: "clone-c2453.appspot.com",
    messagingSenderId: "86098565215",
    appId: "1:86098565215:web:0be8e986f8b604a80923ea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

