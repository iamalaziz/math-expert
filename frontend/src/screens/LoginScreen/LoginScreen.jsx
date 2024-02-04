import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

  }
  return (
    <div className="login">
      <h1>Log in</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password..."
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p>No account yet? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default LoginScreen;
