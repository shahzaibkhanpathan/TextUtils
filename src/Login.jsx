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
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleEmailLogin} className='w-25 m-auto'>
        <h2 className='text-center'>Login</h2>
        <input 
          type="email" 
          className='form-control mt-2 mb-2'
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          className='form-control mt-2 mb-2'
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit" className='btn btn-primary mt-2 form-control'>Login with Email</button>
        <button className='btn btn-danger form-control' onClick={handleGoogleLogin} style={{ marginTop: '10px' }}>
          Login with Google
        </button>
      </form>
      
      <div className='text-center mt-3'>
        <Link to="/register">Don't have an account? Register here</Link>
      </div>
    </div>
  );
};

export default Login;
