import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css/Sidebar.css"
const Sidebar = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate("/home")
    }
    const handleMachines = () => {
        navigate("/home/machines")
    }
    return (
        <>
            <div class="sidebar">
                
                <a class="active" onClick={handleHome} >Home</a>
                <a onClick={handleMachines} >Machines</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </>
    )
}

export default Sidebar