import React from 'react'
import "../css/DefaultSidebar.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const DefaultSidebar = () => {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const navigate = useNavigate()
  const handleGoToMachin = () => {
    navigate('/testhome/testmachines')
  }
  const handleGotoDashboard = () => {
    navigate('/testhome')
  }
  const handleLogout = () => {
    
  }
  return (
    <>
      <div class="sidebar2">
        <div className="top">
          <h1 className='top-logo'>HackerZone</h1>
        </div>
        <ul>
          <li onClick={handleGotoDashboard}>
            <a>
              <span class={`icon ${window.location.href.endsWith('testhome') && 'icon-active'}`}> <i class="fa fa-desktop" aria-hidden="true"></i></span>
              <span class="text">Dashboard</span>
            </a>
          </li>

          <li onClick={handleGoToMachin}>
            <a >
              <span class={`icon ${window.location.href.includes('testmachines') && 'icon-active'}`}><i class="fa fa-link"></i></span>
              <span class="text">Machines</span>
            </a>
          </li>
          <li className='dont-show'>
            <a href="#">
              <span class="icon"><i class="fa fa-eye"></i></span>
              <span class="text">Overview</span>
            </a>
          </li>
          <li className='dont-show'>
            <a href="#">
              <span class="icon"><i class="fa fa-book"></i></span>
              <span class="text">Event</span>
            </a>
          </li>
          <li className='dont-show'>
            <a href="#">
              <span class="icon"><i class="fa fa-question-circle"></i></span>
              <span class="text">About</span>
            </a>
          </li>
          <li className='dont-show'>
            <a href="#">
              <span class="icon"><i class="fa fa-pen"></i></span>
              <span class="text">Overview</span>
            </a>
          </li>
          {loggedIn && 
          <li className='show-nav'>
          <div onClick={handleLogout} className='nav-connect side'>
            SignOut
        </div>
        </li>
          }
        </ul>
      </div>

    </>
  )
}

export default DefaultSidebar