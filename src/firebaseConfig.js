import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCipYAiPp5rK3UFGHY-mkQWE0sLLTZ0ad4",
  authDomain: "ecommerce-books-5307c.firebaseapp.com",
  projectId: "ecommerce-books-5307c",
  storageBucket: "ecommerce-books-5307c.appspot.com",
  messagingSenderId: "205260474230",
  appId: "1:205260474230:web:51eaf6a3915940bc8edc57",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
