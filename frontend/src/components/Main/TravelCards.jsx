import React, { useContext, useEffect, useState } from 'react'
import TravelCard from './TravelCard'
import win from '../../assets/win.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { CartContext } from '../context/productContext'

const TravelCards = () => {

    //set duration for transition
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const [places, setPlace] = useState([])

    
    const {addToCart} = useContext(CartContext)

    const getAllPlaces = async () => {
        const response = await axios.get('http://localhost:5001/post/all')
        const place = await response.data
        setPlace(place)
    }

    useEffect(() => {
        getAllPlaces()
    }, [])

    return (
        <div className='travelcard' data-aos="fade-up">
            {
                places.map((place, index) => (
                    <TravelCard key={place.id} image={place.img} tittle={place.place}  cartOnClick={() =>addToCart(place)}
                        location={place.location} description={place.description} price={place.price} />
                ))
            }
        </div>
    )
}

export default TravelCards