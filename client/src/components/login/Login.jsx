import React, { useState, useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import useAuth from '../../useAuth';
import "./login.css"

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const {loginUser} = useAuth();

  const sendLogin = async () => {
    const result = await loginUser(username, password)
    console.log("result of login: " + result);
    if(result) navigate('/dashboard');
    else alert("Please try logging in again");
    // if(result == true) {console.log("yay worked")}
    // else console.log("didn't work");
  }

  return (
    <div>
      <div className='return'>
        <Link to="/" className='link-btn'>Back to Home</Link>
      </div>
      <h1 className='title'>Sign Into Your Account</h1>

      <div className='login-form'>
        <label htmlFor="username" className='input-label'>Username:</label>
        <input type="text" name="username" onChange={(text) => setUsername(text.target.value)} value={username} className='text-input'/>

        <label htmlFor="password" className='input-label'>Password:</label>
        <input type="password" name="password" onChange={(text) => setPassword(text.target.value)} value={password} className='text-input'/>
        <div className='btn-container'>
          <div className='remember-container'>
            <input type="checkbox" name="remember" className='remember-btn'/>
            <label htmlFor="remember" className='remember-label'>Remember Me</label>
          </div>
          <button className='login-btn' onClick={() => sendLogin()}>Sign In</button>
        </div>

        <div className="login-bottom">
          <Link to="" className='link-btn'>Forgot Password</Link>
          <Link to="/create-account" className='link-btn'>Create Account</Link>
        </div>
      </div>
    </div>
  )
}
