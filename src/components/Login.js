//import React from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { onLogin}


function Login( {onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform authentication logic here to validate the user credientials
        // For now, let's just navigate to the project list page if the login is successful
        onLogin(email);
        navigate('/projects');
    };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          required
           />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password"  
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}


export default Login;