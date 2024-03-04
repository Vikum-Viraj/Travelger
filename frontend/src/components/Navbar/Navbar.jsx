import React, { useState } from 'react'
import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { CartContext } from '../context/productContext';

const Navbar = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext)
  const navigate = useNavigate()

  const {cartItems} = useContext(CartContext)

  const logOut = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    alert('Log out successfully');
    navigate('/');
  };

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
          {!currentUser ?<li><a href='/register'>Register</a></li>:""}
          {currentUser ? <li><a href='/addplace'>Add place</a></li> : ""}
          {currentUser ? <li><a href='/dashboard'>Dashboard</a></li> : ""}
          <li>{currentUser ? <button className='login_btn' onClick={logOut}>Log Out</button> : null}</li>
          <a href='/login'>{!currentUser ? <button className='login_btn'>Login</button> : null}</a>
          <a href='/cart'><IconButton sx={{ color: '#808080' }}>
          <Badge badgeContent={cartItems.length} color="success"><ShoppingCartIcon /></Badge>
            </IconButton></a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar