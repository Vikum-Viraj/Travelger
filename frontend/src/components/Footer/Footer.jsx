import React, { useEffect } from 'react'
import './footer.css'
import ocean from '../../assets/ocean.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <section className='footer' style={{marginTop:'2rem'}}>
      <div className='videoDiv'>
        <video src={ocean} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type='text' placeholder='Enter email address' />
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdTravelExplore className='icon' />Travel
              </a>
            </div>
            <div className='footerParagraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia, illum distinctio totam illo recusandae quae fuga
              nulla. Ab fuga laborum officiis incidunt aliquid.
              Consequatur deserunt iusto debitis hic delectus dolores?
              Officia, illum distinctio totam illo recusandae quae fuga
              nulla. Ab fuga laborum officiis incidunt aliquid.
              Consequatur deserunt iusto debitis hic delectus dolores?
              Officia, illum distinctio totam illo recusandae quae fuga
              nulla. Ab fuga laborum officiis incidunt aliquid.
              Consequatur deserunt iusto debitis hic delectus dolores?
              Officia, illum distinctio totam illo recusandae quae fuga
              nulla. Ab fuga laborum officiis incidunt aliquid.
              Consequatur deserunt iusto debitis hic delectus dolores?

            </div>
            <div className='footerSocials flex'>
              <FaTwitter className='icon'/>
              <FaYoutube className='icon'/>
              <FaInstagramSquare className='icon'/>
              <FaFacebook className='icon'/>
            </div>
          </div>
          <div className='footerLinks grid'>
            {/*Link group 1*/}
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Services
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Agency
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Tourism
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Insurance
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Payment
              </li>
            </div>

            {/*Link group 2*/}
             <div className='linkGroup'>
              <span className='groupTitle'>
                OUR SERVICE
              </span>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Bookings
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                RentalCars
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                HostelWorld
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Trivago
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Trip Advisor
              </li>
            </div>

             {/*Link group 3*/}
             <div className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                London
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                California
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Indonesia
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Europe
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Bali
              </li>
            </div>
          </div>
          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITES</small>
            <small>@COPYRIGHTS RESERVED - VIRAJDEV 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
