import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from './Firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import './Signup.css'; 

const SignUp = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null); 
    setLoading(true); // Start loading

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      let imageURL = "https://example.com/default-photo.png"; 

      if (image) {
        const storage = getStorage();
        const imageRef = storageRef(storage, `users/${user.uid}/profile.jpg`);
        
        await uploadBytes(imageRef, image);
        imageURL = await getDownloadURL(imageRef); 
      }

      await setDoc(doc(db, "users", user.uid), {
        fullName: fullName || "Anonymous",
        email: email,
        photoURL: imageURL, 
        createdAt: new Date(),
      });

      alert("Account created successfully!");
      onSignupSuccess({ displayName: fullName, photoURL: imageURL });

      setEmail("");
      setPassword("");
      setFullName("");
      setImage(null); 
    } catch (error) {
      setError("Error: " + error.message); // More generic error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); 
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        {error && <p className="text-danger">{error}</p>} 
        <div className='text-center mt-3'>
          <span>Already have an account? </span> 
          <Link to="/login" className="btn btn-link">Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
