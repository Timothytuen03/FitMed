import React from 'react'
import "./dashboard.css"
import useAuth from '../../useAuth'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const {logoutUser} = useAuth();
  const nav = useNavigate();
  const logout = async () => {
    const result = await logoutUser();
    console.log(result);
    if(result) {
      nav("/login");
    } else {
      alert("logout failed");
    }
  }

  return (
    <div>
        <h1 className='dash-welcome-text'>Welcome Back, Timothy!</h1>
        <button onClick={() => logout()}>Logout</button>
    </div>
  )
}
