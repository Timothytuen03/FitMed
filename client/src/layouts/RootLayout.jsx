import React, {useContext} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import profileIcon from "./profile-icon.png"
import "./navbar.css"
import { myContext } from '../useAuth'

export default function RootLayout() {
  const userObject = useContext(myContext);

  return (
    <div className="root-layout">
        {/* NavBar */}
        <header>
            <nav className='navbar'>
                <h1 className='nav-title'>FitMed</h1>
                <div className="nav-right">
                  <NavLink to="/activity">Activity</NavLink>
                  <NavLink to="/recipe">Recipes</NavLink>
                  <NavLink to="/discussion">Discussion</NavLink>
                  <NavLink to="/dashboard">Home</NavLink>
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
