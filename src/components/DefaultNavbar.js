import React from 'react'
import { useSelector } from 'react-redux'
import "../css/DefaultNavbar.css"
const DefaultNavbar = () => {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const handleLogout= () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <>
      <div className="default-navbar">
        <div className='search-div'>
          <i style={{ color: 'white', margin: '10px' }} class="fa fa-search" aria-hidden="true"></i>
          <input className='nav-search' placeholder="Search HackerZone" />
        </div>
        { loggedIn && 
        <div onClick={handleLogout} className='nav-connect'>
            SignOut
        </div>

        }
       
      </div>
    </>
  )
}

export default DefaultNavbar