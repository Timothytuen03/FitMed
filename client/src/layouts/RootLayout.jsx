import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import profileIcon from "./profile-icon.png"
import "./navbar.css"

export default function RootLayout() {
  return (
    <div className="root-layout">
        {/* NavBar */}
        <header>
            <nav className='navbar'>
                <h1 className='nav-title'>FitMed</h1>
                <div className="nav-right">
                  <NavLink to="/activity">Activity</NavLink>
                  <NavLink>Recipes</NavLink>
                  <NavLink>Discussion</NavLink>
                  <NavLink>Home</NavLink>
                  <img src={profileIcon} alt="" className='profile-icon'/>
                </div>
            </nav>
        </header>

        {/* Content */}
        <main>
            <Outlet />
        </main>
    </div>
  )
}
