import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import './style.css'


const Navbar = () => {
  const navigate=useNavigate()
  const auth=useAuth()
  const handleLogout=()=>{
    auth.logout()
    navigate('/login')
  }
  return (
    <div>
      <nav className="navbar">
        <NavLink to='/'>Home</NavLink>
        {auth.user=='admin' && <NavLink to='/admin'>Admin</NavLink>}
        <NavLink to='/user'>User</NavLink>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        <NavLink to='/login' onClick={handleLogout}>Logout</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
