import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/information'>Information</Link>
        <Link to='/about'>About</Link>
    </nav>
  )
}
