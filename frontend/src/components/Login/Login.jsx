import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

const Login = () => {

  const navigate = useNavigate()

  const {setCurrentUser}  = useContext(UserContext)
  
  const [error,setError] = useState('')
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const handleInputChange = (e) => {
    setUser((prev) => {
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

 const handleSubmit = async(e) => {
  e.preventDefault()
  try{
    const response = await axios.post(`http://localhost:5001/user/login`,user)
    const loggedUser = await response.data
    setCurrentUser(loggedUser)
    if(!loggedUser){
      setError("Can't logged in User")
    }
    alert('Successfully logged In')
    navigate('/')
  }catch(err){
    setError("error logging user")
  }

 }

  return (
    <> 
    <div className='container'>
        <h2>User Login</h2>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label for="mail">Email</label>
                <input type='text' name='email' placeholder='Enter Email' value={user.email} onChange={handleInputChange}/>
                <label for="password">Password</label>
                <input type='password' name='password' placeholder='Enter password' value={user.password} onChange={handleInputChange}/>
                <button type='submit' >Login</button>
                <Link to="/register"><p className='login'>Don't have an account?&nbsp;Register</p></Link>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login
