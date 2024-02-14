import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'
import axios from 'axios'


const Register = () => {

    const navigate = useNavigate()

    const [error, setError] = useState('')
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    //get user input dynamically
    const changeInputController = (e) => {
        setUserData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const registerUser = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:5001/user/register`, userData)
            const newUser = response.data
            if (!newUser) {
                setError("Error registering user")
            }
            console.log(newUser)
            alert("Registered successfully")
            navigate('/login')
        } catch (err) {
            setError(err.message)
        }
    }


    return (
        <>
            <div className='container'>
                <h2>User Registration</h2>
                {error && error}
                <div className='form-container'>
                    <form onSubmit={registerUser}>
                        <label for="name">Name</label>
                        <input type='text' name="name" placeholder='Enter Name' value={userData.name} onChange={changeInputController} />
                        <label for="mail">Email</label>
                        <input type='text' name='email' placeholder='Enter Email' value={userData.email} onChange={changeInputController} />
                        <label for="password">Password</label>
                        <input type='password' name='password' placeholder='Enter password' value={userData.password} onChange={changeInputController} />
                        <button type='submit'>Register</button>
                        <Link to="/login"><p className='login'>Already have an account?&nbsp;Login</p></Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
