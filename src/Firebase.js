// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB5f1kpxko8j5PC_M0WpwzTjhetKfgldTI",
//   authDomain: "textutils-9d1ab.firebaseapp.com",
//   projectId: "textutils-9d1ab",
//   storageBucket: "textutils-9d1ab.appspot.com",
//   messagingSenderId: "220463927838",
//   appId: "1:220463927838:web:535deba163b8827970540f"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Initialize auth
// const provider = new GoogleAuthProvider(); // Google Auth Provider

// // Export auth and provider for use in other files
// export { auth, provider };




import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5f1kpxko8j5PC_M0WpwzTjhetKfgldTI",
  authDomain: "textutils-9d1ab.firebaseapp.com",
  projectId: "textutils-9d1ab",
  storageBucket: "textutils-9d1ab.appspot.com",
  messagingSenderId: "220463927838",
  appId: "1:220463927838:web:535deba163b8827970540f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage };
