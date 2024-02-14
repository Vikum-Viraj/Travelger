import React, { useEffect, useState } from 'react'
import './page.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { upload } from '../utils/upload'

const UpdatePlace = () => {

  const navigate = useNavigate()

  const [file, setFile] = useState('')
  
  const [place, setPlace] = useState({
    place: "",
    location:"",
    price: "",
    description: ""
  })

  const {id} = useParams()

  const updatePlace = async(e) => {
    e.preventDefault()
    const url = await upload(file)
    console.log(url)
    try{
      const response = await axios.put(`http://localhost:5001/post/update/${id}`,{...place,img:url})
      const savedData = await response.data
      console.log(savedData)
      alert("place updated successfully")
      navigate('/dashboard')
    }catch(err){
      console.log(err)
    }
  }

  const getPlaceData = async() => {
    const res = await axios.get(`http://localhost:5001/post/getone/${id}`)
    const place = res.data
    setPlace(place)
    setFile(place.img)
  }
  
  useEffect(() => {
    getPlaceData()
  },[])

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
    <h2> Update Place</h2>
    <div className='form-container'>
      <form onSubmit={updatePlace}>
        <label htmlFor="place">Place Name</label>
        <input type='text' name="place" placeholder='Place Name' value={place.place} onChange={onChangeHandler} />
        <label htmlFor="country">Location</label>
        <input type='text' name='location' placeholder='Enter Location' value={place.location} onChange={onChangeHandler} />
        <label htmlFor="price">price</label>
        <input type='number' name='price' placeholder='Enter Price' value={place.price} onChange={onChangeHandler} />
        <label htmlFor="description">description</label>
        <textarea type='text' name='description' placeholder='Enter description' value={place.description} onChange={onChangeHandler} />
        <label htmlFor="image">Image</label>
        <input type='file' name='image' placeholder='Enter Image'  onChange={(e) => setFile(e.target.files[0])} />
        <button type='submit'>Update</button>
      </form>
    </div>
  </div>
  )
}

export default UpdatePlace
