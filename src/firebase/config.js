import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8q3UTai1E7b9hWvhWd3aQE0EKto4ZxBc",
    authDomain: "tienda-i-love-pizza.firebaseapp.com",
    projectId: "tienda-i-love-pizza",
    storageBucket: "tienda-i-love-pizza.appspot.com",
    messagingSenderId: "154020240846",
    appId: "1:154020240846:web:60630041b1c7b0c08c9f9f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);