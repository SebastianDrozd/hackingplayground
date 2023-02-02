import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import "../css/LandingPage.css"
const LandingPage = () => {
  const navigate = useNavigate()
  const gettingStarted = () => {
    navigate('/signup')
  }
  return (
    <div className='main'>
    <div className="landing-container">    
    <div className="titles">
        <h1>Welcome to to the Hacker Zone</h1>
        <p className='lead'>Your personal hacking playground. Get started here to elarn more about us</p>
        <button onClick = {gettingStarted}className='btn btn-primary bob'>Get Started</button>
    </div>
    </div>
    </div>
  )
}

export default LandingPage