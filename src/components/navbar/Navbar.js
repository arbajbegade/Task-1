import React from 'react'
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {
  return (
<nav className='flex items-center justify-between px-4 py-2 bg-gray-800 text-white '>
  <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'> <PersonIcon /> </h1>
  <div className='md:flex items-center space-x-4 font-semibold text-lg'>
    <Link to='dashboard' className='nav-link'>Dashboard</Link>
    <Link to='createad' className='nav-link'>Create Ads</Link>
    {/* Add more navigation links as needed */}
  </div>
</nav>

  )
}

export default Navbar