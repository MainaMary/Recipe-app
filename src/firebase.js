// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuzFR1gZCt4SeVqprsCDcrNphLoqjj8BQ",
  authDomain: "fir-react-authentication-6bb82.firebaseapp.com",
  projectId: "fir-react-authentication-6bb82",
  storageBucket: "fir-react-authentication-6bb82.appspot.com",
  messagingSenderId: "660448906967",
  appId: "1:660448906967:web:f7306261c85c4445caaa92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
