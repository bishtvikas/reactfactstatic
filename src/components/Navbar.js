import React from 'react'
import img from './images/airbnb 4.jpg'

function Navbar() {
  return (
    <nav className='nav--bar'>
        <img className='nav--logo' src={img} alt="logo" />
    </nav>
  )
}

export default Navbar