import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className='return'>
        <Link to="/" className='link-btn'>Back to Home</Link>
      </div>
      <h1 className='title'>Sign Into Your Account</h1>

      <form action="" className='login-form'>
        <label htmlFor="email" className='input-label'>Email:</label>
        <input type="email" name="email" onChange={(text) => setEmail(text.target.value)} value={email} className='text-input'/>

        <label htmlFor="password" className='input-label'>Password:</label>
        <input type="password" name="password" onChange={(text) => setPassword(text.target.value)} value={password} className='text-input'/>
        <div className='btn-container'>
          <div className='remember-container'>
            <input type="checkbox" name="remember" className='remember-btn'/>
            <label htmlFor="remember" className='remember-label'>Remember Me</label>
          </div>
          <button className='login-btn'>Sign In</button>
        </div>

        <div className="login-bottom">
          <Link to="" className='link-btn'>Forgot Password</Link>
          <Link to="/create-account" className='link-btn'>Create Account</Link>
        </div>
      </form>
    </div>
  )
}
