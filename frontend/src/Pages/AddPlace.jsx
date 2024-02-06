import React from 'react'
import './page.css'
import { useNavigate } from "react-router-dom";

const AddPlace = () => {

  const navigate = useNavigate()

  const submitData = () => {
    navigate('/dashboard')
  }
  
  return (
    <div className='container'>
      <h2> Add a New Place</h2>
      <div className='form-container'>
        <form>
          <label for="place">Place Name</label>
          <input type='text' name="place" placeholder='Place Name' />
          <label for="country">Country</label>
          <input type='text' name='country' placeholder='Enter Country' />
          <label for="price">price</label>
          <input type='number' name='price' placeholder='Enter Price' />
          <label for="description">description</label>
          <textarea type='text' name='description' placeholder='Enter description' />
          <label for="image">Image</label>
          <input type='file' name='image' placeholder='Enter Image' />
          <button type='submit' onClick={submitData}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddPlace
