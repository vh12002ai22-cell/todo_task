// src/App.js
import React, { useState } from 'react';
import './App.css';
import SignIn from './SignIn';
import TodoPage from './TodoPage'; // ✅ Correct relative path

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {user ? (
        <TodoPage user={user} setUser={setUser} />
      ) : (
        <SignIn setUser={setUser} />
      )}
    </div>
  );
}

export default App;