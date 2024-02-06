import React, { useState } from 'react'
import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

const Navbar = () => {

  return (
    <nav>
      <div className='nav_container'>
        <div className='logo_container'>
          <div className='logo'><MdTravelExplore /></div>
          <Link to="/"><h2>Travelger</h2></Link>
        </div>
        <ul className='menu'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/register'>Register</a></li>
          <li><a href='/addplace'>Add place</a></li>
          <li><a href='/dashboard'>Dashboard</a></li>
          <a href='/explore'><button className='login_btn'>Login</button></a>
          <a href='/cart'><IconButton sx={{color:'#808080'}}><ShoppingCartIcon/></IconButton></a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
