import React, { useState } from 'react'
import "./createAccount.css";
import {  Link } from "react-router-dom";

export default function CreateAccount() {

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

      <form action="" method='post' className='sign-up-form'>
        <label htmlFor="email" className='create-label'>Email:</label>
        <input type="email" name='email' onChange={(text) => setEmail(text.target.value)} value={email}/>
        <label htmlFor="username" className='create-label'>Username:</label>
        <input type="text" name='username' onChange={(text) => setUser(text.target.value)} value={username}/>
        <label htmlFor="password" className='create-label'>Password:</label>
        <input type="password" name='password' onChange={(text) => setPassword(text.target.value)} value={password}/>
        <label htmlFor="confirmPassword" className='create-label'>Confirm Password:</label>
        <input type="password" name='confirmPassword' onChange={(text) => setConfirmPassword(text.target.value)} value={confirmPassword}/>
        <button className='create-btn'>Create New Account</button>
      </form>
    </div>
  )
}
