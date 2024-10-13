import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Text_form from './Text_form';
import { auth } from './Firebase';
import Login from './Login';
import Register from './Register'; // Import Register component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
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
      {user && (
        <Navbar 
          title="TextUtils" 
          mode={mode} 
          togglemode={toggleMode} 
          onLogout={handleLogout} 
          user={user} 
        />
      )}
      <div className="container my-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Add Register route */}
          <Route 
            path="/" 
            element={
              user ? <Text_form heading="Enter The Text to Analyze" mode={mode} /> : <Login />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



