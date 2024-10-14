import React, { useState } from 'react';
import { auth, provider } from './Firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirect to the main app after successful login
    } catch (error) {
      console.error('Error logging in with Google:', error);
      setError('Failed to log in with Google. Please try again.');
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to the main app after successful login
    } catch (error) {
      console.error('Error logging in with email:', error);
      setError('Failed to log in with email. Please check your credentials and try again.');
    }
  };

  return (
    <div className="container mt-5">
      {error && <p className="text-danger text-center">{error}</p>}
      
      <form onSubmit={handleEmailLogin} className='w-50 m-auto p-4 border rounded shadow'>
        <h2 className='text-center mb-4'>Login</h2>
        
        <div className="form-group">
          <input 
            type="email" 
            className='form-control mb-3'
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        
        <div className="form-group">
          <input 
            type="password" 
            className='form-control mb-3'
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        
        <button type="submit" className='btn btn-primary w-100 mb-2'>Login with Email</button>
        
        <button 
          type="button" 
          className='btn btn-danger w-100'
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
      
      <div className='text-center mt-3'>
        <span>Don't have an account? </span>
        <Link to="/register" className="btn btn-link">Register here</Link>
      </div>
      </form>
    </div>
  );
};

export default Login;
