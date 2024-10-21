// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Navbar from './Navbar';
// import TextForm from './TextForm';
// import { auth, db } from './Firebase'; // Import Firestore instance
// import { doc, getDoc, setDoc } from 'firebase/firestore'; // Firestore functions
// import Login from './Login';
// import Register from './Register';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   const [mode, setMode] = useState('light');
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
//       if (currentUser) {
//         const userRef = doc(db, 'users', currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         // Check if user data exists in Firestore
//         if (userSnap.exists()) {
//           const userData = userSnap.data();
//           setUser({
//             fullName: userData.fullName,
//             photoURL: userData.photoURL,
//             email: userData.email,
//           });
//         } else {
//           // If no user data in Firestore, create a document for Google sign-in users
//           const newUserData = {
//             fullName: currentUser.displayName || "User", // Default to "User" if displayName not available
//             photoURL: currentUser.photoURL,
//             email: currentUser.email,
//           };

//           // Save the user data in Firestore
//           await setDoc(userRef, newUserData);

//           setUser(newUserData); // Set user state with new data
//         }
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     await auth.signOut();
//     setUser(null);
//   };

//   const toggleMode = () => {
//     setMode((prevMode) => {
//       const newMode = prevMode === 'light' ? 'dark' : 'light';
//       document.body.style.backgroundColor = newMode === 'light' ? 'white' : 'black';
//       return newMode;
//     });
//   };

//   return (
//     <Router>
//       <Navbar 
//         title="TextUtils" 
//         mode={mode} 
//         togglemode={toggleMode} 
//         onLogout={handleLogout} 
//         user={user} 
//       />
//       <div className="container my-4">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route 
//             path="/" 
//             element={user ? <TextForm heading="Enter The Text to Analyze" mode={mode} /> : <Login />} 
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import { auth, db } from './Firebase'; // Import Firestore instance
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Firestore functions
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setUser(userData);
        } else {
          const newUserData = {
            fullName: currentUser.displayName || "User",
            photoURL: currentUser.photoURL,
            email: currentUser.email,
          };
          await setDoc(userRef, newUserData);
          setUser(newUserData);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
  };

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      document.body.style.backgroundColor = newMode === 'light' ? 'white' : 'black';
      return newMode;
    });
  };

  return (
    <Router>
      <Navbar 
        title="TextUtils" 
        mode={mode} 
        togglemode={toggleMode} 
        onLogout={handleLogout} 
        user={user} 
      />
      <div className="container my-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/" 
            element={user ? <TextForm heading="Enter The Text to Analyze" mode={mode} /> : <Login />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
