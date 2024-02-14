import React, { useState } from 'react'
import './page.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { upload } from '../utils/upload';

const AddPlace = () => {

  const navigate = useNavigate()

  const [file, setFile] = useState('')
  const [place, setPlace] = useState({
    place: "",
    location:"",
    price: "",
    description: ""
  })


  const addPlace = async(e) => {
    e.preventDefault()
    const url = await upload(file)
    console.log(url)
    try{
      const response = await axios.post('http://localhost:5001/post/add',{...place,img:url})
      const savedData = await response.data
      console.log(savedData)
      alert("place added successfully")
      navigate('/dashboard')
    }catch(err){
      console.log(err)
    }
  }

  //get user input dynamically
  const onChangeHandler = (e) => {
    setPlace((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className='container'>
      <h2> Add a New Place</h2>
      <div className='form-container'>
        <form onSubmit={addPlace}>
          <label htmlFor="place">Place Name</label>
          <input type='text' name="place" placeholder='Place Name' value={place.place} onChange={onChangeHandler} />
          <label htmlFor="country">Location</label>
          <input type='text' name='location' placeholder='Enter Location' value={place.location} onChange={onChangeHandler} />
          <label htmlFor="price">price</label>
          <input type='number' name='price' placeholder='Enter Price' value={place.price} onChange={onChangeHandler} />
          <label htmlFor="description">description</label>
          <textarea type='text' name='description' placeholder='Enter description' value={place.description} onChange={onChangeHandler} />
          <label htmlFor="image">Image</label>
          <input type='file' name='image' placeholder='Enter Image' onChange={(e) => setFile(e.target.files[0])} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddPlace
