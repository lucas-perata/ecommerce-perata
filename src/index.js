import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCipYAiPp5rK3UFGHY-mkQWE0sLLTZ0ad4",
  authDomain: "ecommerce-books-5307c.firebaseapp.com",
  projectId: "ecommerce-books-5307c",
  storageBucket: "ecommerce-books-5307c.appspot.com",
  messagingSenderId: "205260474230",
  appId: "1:205260474230:web:51eaf6a3915940bc8edc57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
