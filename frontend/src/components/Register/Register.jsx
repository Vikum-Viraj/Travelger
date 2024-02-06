import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css'

const Register = () => {

    const navigate = useNavigate()

    const registerUser = () => {
       alert('registered successfully')
    }

    return (
        <> 
        <div className='container'>
            <h2>User Registration</h2>
            <div className='form-container'>
                <form>
                    <label for="name">Name</label>
                    <input type='text' name="place" placeholder='Enter Name' />
                    <label for="mail">Email</label>
                    <input type='text' name='country' placeholder='Enter Email' />
                    <label for="password">Password</label>
                    <input type='text' name='description' placeholder='Enter password' />
                    <button type='submit' onClick={registerUser}>Register</button>
                    <Link to="/login"><p className='login'>Already have an account?&nbsp;Login</p></Link>
                </form>
            </div>
        </div>
        </>
    )
}

export default Register
