import React from 'react'
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <i className="fas fa-sms"></i>
      <ul className='nav-links'>
        <li>
          <a href='/' className='nav-link'>
            messages
          </a>
        </li>
        <li>
          <a href='/' className='nav-link'>
            providers
          </a>
        </li>
      </ul>
    </nav>
  )
}