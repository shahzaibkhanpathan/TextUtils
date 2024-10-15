import React, { useState } from 'react';
import { auth, provider } from './Firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ mode }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Error logging in with Google:', error);
      setError('Failed to log in with Google. Please try again.');
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error logging in with email:', error);
      setError('Failed to log in with email. Please check your credentials and try again.');
    }
  };

  const formBackground = mode === 'dark' ? '#fff' : '#f8f9fa';
  const textColor = mode === 'dark' ? '#000' : '#333';

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form 
        onSubmit={handleEmailLogin} 
        className='p-4 border rounded shadow-sm' 
        style={{
          backgroundColor: formBackground,
          color: textColor,
          width: '100%',
          maxWidth: '400px'
        }}
      >
        <h2 className='text-center mb-4'>Login</h2>

        {error && <p className="text-danger text-center">{error}</p>}
        
        <div className="mb-3">
          <input 
            type="email" 
            className='form-control' 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        
        <div className="mb-3">
          <input 
            type="password" 
            className='form-control' 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        
        <button type="submit" className='btn btn-primary w-100 mb-3'>Login with Email</button>
        
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
