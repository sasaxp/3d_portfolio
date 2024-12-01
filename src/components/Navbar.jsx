import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header bg-green-950'>
      <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' >
      <p className='blue-gradient_text'>ST</p>
      </NavLink>
      <nav className='flex gap-7 text-lg font-medium'>
        
        <NavLink to='/about' className={({ isActive }) =>`$ {isActive ? 'text-blue-500' : 'text-black'} hover:text-blue-500` }>About</NavLink>
        <NavLink to='/projects' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black') + ' hover:text-blue-500'}>Projects</NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black') + ' hover:text-blue-500'}>Contact</NavLink>
      </nav>

    </header>
  )
}

export default Navbar