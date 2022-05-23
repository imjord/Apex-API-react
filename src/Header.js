import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <nav className='header'>
      <ul>
        <li className='current'><a id='a' href='#'>Apex Tracker</a></li>
        <li className='current'><a id='a' href='#'>About</a></li>
      </ul>
     
    </nav>
  )
}

export default Header