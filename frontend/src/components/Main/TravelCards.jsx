import React, { useEffect } from 'react'
import TravelCard from './TravelCard'
import win from '../../assets/win.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Places = [
    {
        id:1,
        image:win,
        title:"Jungle beach",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all except Antarctica"
    },
    {
        id:2,
        image:win,
        title:"Galle fort",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across species"
    },
    {
        id:3,
        image:win,
        title:"Galle fort",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across species"
    },
    {
        id:4,
        image:win,
        title:"Galle fort",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across species"
    },
    {
        id:5,
        image:win,
        title:"Jungle beach",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all except Antarctica"
    },
    {
        id:6,
        image:win,
        title:"Jungle beach",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all except Antarctica"
    },
    {
        id:7,
        image:win,
        title:"Jungle beach",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all except Antarctica"
    },
    {
        id:8,
        image:win,
        title:"Jungle beach",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all except Antarctica"
    },
    
]

const TravelCards = () => {

    useEffect(() => {
        Aos.init({duration:2000})
      },[])

  return (
    <div className='travelcard' data-aos="fade-up">
      {
        Places.map((place,index) => (
            <TravelCard key={place.id} image={place.image} tittle={place.title} description={place.description}/>
        ))
      }
    </div>
  )
}

export default TravelCards
