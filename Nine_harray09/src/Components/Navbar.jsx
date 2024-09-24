import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    
  return (
    <>
    <nav>
        <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/About"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/Contact"><li>Contact</li></NavLink>
    </nav>
    
    </>
  )
}

export default Navbar