import React from 'react'
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li>
          <a href='/' className='nav-link'>
            home
          </a>
        </li>
        <li>
          <a href='/' className='nav-link'>
            settings
          </a>
        </li>
      </ul>
    </nav>
  )
}