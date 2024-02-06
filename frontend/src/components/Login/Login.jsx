import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const loginUser = () => {
    navigate('/')
    alert('Login successfully')
 }

  return (
    <> 
    <div className='container'>
        <h2>User Login</h2>
        <div className='form-container'>
            <form>
                <label for="mail">Email</label>
                <input type='text' name='country' placeholder='Enter Email' />
                <label for="password">Password</label>
                <input type='text' name='description' placeholder='Enter password' />
                <button type='submit' onClick={loginUser}>Login</button>
                <Link to="/register"><p className='login'>Don't have an account?&nbsp;Register</p></Link>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login
