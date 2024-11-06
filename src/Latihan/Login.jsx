// src/pages/Login.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    console.log("Logged in with:", { username, password });
    navigate("/todo");

  }

  return (
    <div>
      <form onSubmit={handleLogin} style={{padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Login Page</h2>
        <img src='https://64.media.tumblr.com/17cdeb5fe2f16c64e8ecf70fd08030ea/tumblr_p84nqdyXJQ1tbb76yo1_r1_500.pnj' width={200}></img>
        <div style={{ marginBottom: '10px' }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px', boxSizing: 'border-box' }} 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px', boxSizing: 'border-box' }} 
          />
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
