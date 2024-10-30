import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import TextForm from './TextForm';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      document.body.style.backgroundColor = newMode === 'light' ? 'white' : '#1e1e1e';
      return newMode;
    });
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
      <div className="container my-4">
        <TextForm heading="Enter The Text to Analyze" mode={mode} />
      </div>
    </Router>
  );
}

export default App;
