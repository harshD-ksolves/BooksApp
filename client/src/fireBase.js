// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZrfu2i8OsG5TC4jGNgej4c1kLb2jkmY0",
  authDomain: "booksapp-c18bb.firebaseapp.com",
  projectId: "booksapp-c18bb",
  storageBucket: "booksapp-c18bb.appspot.com",
  messagingSenderId: "220162780331",
  appId: "1:220162780331:web:25032c6ec07407ef095bee",
  measurementId: "G-M8TWS9F60H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;