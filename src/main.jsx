import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRC_2CUDVJdJczC_C5gYlcuyUmQGJssh0",
  authDomain: "react-project-coder-268a0.firebaseapp.com",
  projectId: "react-project-coder-268a0",
  storageBucket: "react-project-coder-268a0.appspot.com",
  messagingSenderId: "108732540446",
  appId: "1:108732540446:web:d3ee1aa6db7a0e2213300f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
