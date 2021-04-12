import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDwRi_ow3sgNywpXdw0t3XikccOaGA4we4",
    authDomain: "linkedin-clone-using-react.firebaseapp.com",
    projectId: "linkedin-clone-using-react",
    storageBucket: "linkedin-clone-using-react.appspot.com",
    messagingSenderId: "243965080293",
    appId: "1:243965080293:web:89924b02e68777c8d69a0c"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };