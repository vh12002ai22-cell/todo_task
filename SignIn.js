// src/SignIn.js
import React from 'react';
import { signInWithPopup, auth, provider } from './firebase';

function SignIn({ setUser }) {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };

  return (
    <div className="signin-page">
      <h2>Welcome to To-Do App</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;