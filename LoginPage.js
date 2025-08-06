// src/LoginPage.js
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig';

function LoginPage({ setUser }) {
  const handleSignIn = async () => {
    console.log("Sign-in button clicked"); // Debug log
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Sign in result:", result.user); // Debug log
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Task Manager</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default LoginPage;
