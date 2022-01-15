import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyADZZhq_k6_WerTImoqviiAnPzzL9_TBP8",
  authDomain: "ozprod-blog.firebaseapp.com",
  projectId: "ozprod-blog",
  storageBucket: "ozprod-blog.appspot.com",
  messagingSenderId: "959613466843",
  appId: "1:959613466843:web:ebb943a17c1b145083f4fe",
  measurementId: "G-81BZ3QNDTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);