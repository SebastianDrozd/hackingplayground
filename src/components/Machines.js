import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../css/Machines.css"
import { setMachines } from '../redux/slices/machineSlice'
import { getMachines } from '../utils/requests'
import Machinelist from './Machinelist'
const Machines = () => {
    const [machines,setMachiness] = useState([])
    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch() 
    useEffect(() => {
        getMachines(token).then(res => {
            console.log(res.data)
            setMachiness(res.data)
            dispatch(setMachines(res.data))
        })
    },[])
  return (
    <>
    <div className="machine-container">
    <h1 className='user-title'>Machine Dashboard</h1>
    <div className='machine-notice-container'>
        <h2 className="machine-notice-title">Important Notice</h2>
        <p className="machine-notice-description">
            Here at HackerZone, we are committed to providing a safe and secure environment for all of our users. In order to achieve this, we offer our users 2 options when it comes to testing out their hacking skillset.
        </p>
        <ol>
            <li>Use one of our own virtual machines in your browser. If you would like to use our own browser based parrot instance, simply click start on instance on the machine page.</li>
            <li>Connect to our network using openvpn. Once connected, you will be notified and allow to spawn instance. If you would like to connect using a vpn, please click the button below.</li>
            <li className='last'> <button className='btn btn-success'>Download Vpn file</button></li>
        </ol>
    </div>
    <Machinelist machines={machines && machines}/>
    </div>
    </>
  )
}

export default Machines