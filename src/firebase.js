import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsQucDIgJqYivXUDhshU4RUVDbpLRuaeU",
    authDomain: "todo-app-e9215.firebaseapp.com",
    projectId: "todo-app-e9215",
    storageBucket: "todo-app-e9215.appspot.com",
    messagingSenderId: "746560619773",
    appId: "1:746560619773:web:90f17dcc2efc4bb7c9ea94",
    measurementId: "G-B1MLQGCGWG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
