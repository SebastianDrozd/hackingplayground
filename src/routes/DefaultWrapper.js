import React from 'react'
import { Outlet } from 'react-router-dom'
import DefaultNavbar from '../components/DefaultNavbar'
import DefaultSidebar from '../components/DefaultSidebar'
import "../css/DefaultWrapper.css"
const DefaultWrapper = () => {
  return (
   <>
   <div className='default-container'>
    <div className="default-sidebar">
       <DefaultSidebar/>
    </div>
    <div className="default-dashboard">
        <DefaultNavbar/>
        <Outlet/>
    </div>
   </div>
   </>
  )
}

export default DefaultWrapper