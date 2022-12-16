import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOXi95SsM1xXVXpdM0C1G_n1C_yVUXG0Q",
  authDomain: "book-shelf-975ae.firebaseapp.com",
  projectId: "book-shelf-975ae",
  storageBucket: "book-shelf-975ae.appspot.com",
  messagingSenderId: "496024871523",
  appId: "1:496024871523:web:16e0a6fbed380e8653ce56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
