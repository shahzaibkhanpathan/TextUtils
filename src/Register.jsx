import React, { useState } from 'react';
import { auth, db } from './Firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import './Signup.css'; 

const SignUp = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
//   const [designation, setDesignation] = useState('');
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null); // State to hold the image file

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      let imageURL = "https://example.com/default-photo.png"; // Default image URL

      // Upload image to Firebase Storage if an image is selected
      if (image) {
        const storage = getStorage();
        const imageRef = storageRef(storage, `users/${user.uid}/profile.jpg`);
        
        await uploadBytes(imageRef, image);
        imageURL = await getDownloadURL(imageRef); // Get the URL after upload
      }

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: fullName || "Anonymous",
        email: email,
        photoURL: imageURL, // Store the uploaded image URL
        // designation: designation || "Unknown Designation",
        createdAt: new Date(),
      });

      alert("Account created successfully!");
      onSignupSuccess({ displayName: fullName, photoURL: imageURL });

      // Clear form fields
      setEmail("");
      setPassword("");
      setFullName("");
    //   setDesignation("");
      setImage(null); // Clear the image state
    } catch (error) {
      setError("Error adding user to Firestore: " + error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Set the image file
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Sign Up</button>
        {error && <p className="error-message">{error}</p>} 
      </form>
    </div>
  );
};

export default SignUp; // Ensure the export matches the component name
