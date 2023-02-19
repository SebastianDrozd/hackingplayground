import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/LandingPage.css"
import card1 from "../assets/card1.svg"
import card2 from "../assets/card2.svg"
import card3 from "../assets/card3.svg"
import LandingFooter from '../components/LandingFooter'
import LandingPageNav from '../components/LandingPageNav'
const LandingPage = () => {
  
  const navigate = useNavigate()
  const gettingStarted = () => {
    navigate('/signup')
  }
  return (
    <>
    
    <LandingPageNav/>
    <div className='main'>
      <div className="landing-container">
        <div className="titles">
          <h1 className='main-title'>Welcome to to the Hacker Zone</h1>
          <p className='main-content'>HackerZone gives individuals, businesses and universities the tools they need to
            improve their cybersecurity capabilities — all in one place.</p>
          <button onClick={gettingStarted} className='btn btn-primary bob'>Get Started</button>
        </div>
      </div>
      <div className='about-section'>
        <div className='about-container'> 
          <div className='about-header'>
          <h1 className='about-header-title'>Test out your skills and see if you got what it takes!</h1>
          <p className='about-header-sub'>Our interactive  platform is a fun way to help develop your hacking skillset.</p>
          </div>
          <div className='about-content'>
            <div className="about-content-column">
              <img className='card-image' src={card1} height="200" width="200" alt="" />
              <h3 className='card-title'>Hackable Machines</h3>
              <p>Start your own instances of exploitable machines. See if you got what it takes to crack these machines and test your skills!</p>
            </div>
            <div className="about-content-column">
            <img className='card-image' src={card2} height="200" width="200" alt="" />
              <h3 className='card-title'>Browser-based Vm's</h3>
              <p>With our browser-based vm's you can hack anytime that you look! No more messy vpn connections, connect directly to our Parrot Os machines all in your browser</p>
            </div>
            <div className="about-content-column">
            <img  src={card3} height="200" width="200" alt="" />
              <h3 className='card-title'>Grow your skills</h3>
              <p>Practice is important, and here at Hackerzone we strive to create an environment where learning is encouraged. </p>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter/>
    </div>
    </>
  )
}

export default LandingPage