import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='neuMorph'>
        <div className='mainNav text-light'>
            <Link to='/'>Main Utils</Link>      
            <Link to='/findlost'>Find-Lost</Link>
            <Link to='/hallbooking'>Hall-Booking</Link>
        </div>
    </nav>
  ) 
}
