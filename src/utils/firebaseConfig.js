
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN6f9CU1sJjw1z4G50SVtFrV7UjA-dln0",
  authDomain: "entertainmentnow-588ee.firebaseapp.com",
  projectId: "entertainmentnow-588ee",
  storageBucket: "entertainmentnow-588ee.appspot.com",
  messagingSenderId: "755571349798",
  appId: "1:755571349798:web:5d0ede1e3ac520719f09e7",
  measurementId: "G-0KSJ77QK3K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
