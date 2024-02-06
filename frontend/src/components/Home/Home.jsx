import React, { useEffect } from 'react'
import './home.css'
import sea from '../../assets/sea.mp4'
import { IoSearch } from "react-icons/io5";
import { Button } from '@mui/material';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Main from '../Main/Main';

const Home = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <>
    <section className='home'>
      <video className='vid' src={sea} muted autoPlay loop type="video/mp4"></video>

      <div className='homeContent container'>
        <div className="textDiv" >
          <h1 className='homeTitle' data-aos="fade-right">
            Experience<br />
            The best holiday you spent
          </h1>
          <div className='para' data-aos="fade-right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda minima earum<br /> possimus dolor asperiores animi nihil
              deserunt aliquam voluptate veniam! Provident<br /> nemo at quae
              blanditiis dolores minus, velit nulla nesciunt! deserunt aliquam <br />voluptate veniam! Provident
              deserunt aliquam voluptate veniam! Provident <br />deserunt aliquam voluptate veniam! Provident
            </p>
            <Button className='exp' variant='outlined' 
              style={{
              border: '0.15rem solid white',
              color:'white',
              marginTop: '1.2rem',
              padding:'0.5rem 1.9rem',
            }}
              item xs={8} sm={6} >Explore</Button>
          </div>
        </div>
      </div>
    </section>
    <Main/>
    </>
  )
}

export default Home
