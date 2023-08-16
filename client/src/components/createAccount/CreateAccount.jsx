import React, { useEffect, useState } from 'react'
import "./createAccount.css";
import {  Link } from "react-router-dom";

export default function CreateAccount() {
  const sendSignUp = async () => {
    console.log("sign up attempt")
    if(password != confirmPassword) {
      alert("Passwords do not match")
    } else {
      console.log(username)
      console.log(password)
      const response = await fetch("http://localhost:4000/api/user/create-account", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email
        })
      });
      const data = response.json;
      console.log(data);
    }
  }

  const [email, setEmail] = useState('');
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <div className='return'>
        <Link to="/" className='returnBtn'>Back to Home</Link>
      </div>
      <h1 className='title'>Create Account</h1>

      <div>
        <label htmlFor="email" className='create-label'>Email:</label>
        <input type="email" name='email' onChange={(text) => setEmail(text.target.value)} value={email}/>
        <label htmlFor="username" className='create-label'>Username:</label>
        <input type="text" name='username' onChange={(text) => setUser(text.target.value)} value={username}/>
        <label htmlFor="password" className='create-label'>Password:</label>
        <input type="password" name='password' onChange={(text) => setPassword(text.target.value)} value={password}/>
        <label htmlFor="confirmPassword" className='create-label'>Confirm Password:</label>
        <input type="password" name='confirmPassword' onChange={(text) => setConfirmPassword(text.target.value)} value={confirmPassword}/>
        <button className='create-btn' onClick={() => sendSignUp()}>Create New Account</button>
      </div>
    </div>
  )
}
