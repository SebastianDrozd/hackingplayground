import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/LandingPageNav.css"
const LandingPageNav = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login")
    }
    const [wantsHamburger, setWantsHamburger] = useState(false)
    const handleHamburger = (e) => {
        setWantsHamburger(!wantsHamburger)
    }
    const handleHome = () => {
        navigate("/")
    }
    return (
        <>
            <div className="landing-navbar">
                <ul>
                    <li onClick={handleHome} ><a className='logo' href="">HackerZone</a> <i onClick={handleHamburger} class="fa fa-bars hamburger" aria-hidden="true"></i></li>
                    <div className={wantsHamburger == true ? 'show' : 'dont-show'}>
                        <li  ><a href="">Home</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                        <li><button onClick={handleLogin} className='btn btn-primary land-button'>Sign in</button></li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default LandingPageNav