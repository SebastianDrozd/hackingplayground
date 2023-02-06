import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import "../css/HomeWrapper.css"
const HomeWrapper = () => {
  return (
    <>
    <Sidebar/>
    <div className='outlet-container'>
    <Outlet/>
    </div>
    
    </>
  )
}

export default HomeWrapper