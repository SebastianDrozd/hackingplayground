import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "../css/UserDashboard.css"
import { getCompletedMachines } from '../utils/requests'
import RecentMachinelist from './RecentMachinelist'
const UserDashboard = () => {
    const [recentMachines,setRecentMachines] = useState([])
    const userid = useSelector(state => state.user.id)
    const token = useSelector(state => state.user.token)
    const points = useSelector(state => state.user.points)
    useEffect(() => {
        getCompletedMachines(token,userid).then(res => {
            console.log(res.data)
            setRecentMachines(res.data)
        })
    },[])
    return (
        <>
            <div className='dashboard-container'>
                <h1 className='user-title'>User Dashboard</h1>
                <div className='user-cards'>
                    <div className='user-card'>
                        <div className="card-title">
                            <h4 className='actual'>Machines Completed</h4>
                            <hr></hr>
                        </div>
                        <div className="card-description">
                            <h1 className='nums'>{recentMachines.length}</h1>
                        </div>
                    </div>
                    <div className='user-card'>
                        <div className="card-title">
                            <h4 className='actual'>Points Earned</h4>
                            <hr></hr>
                        </div>
                        <div className="card-description">
                            <h1 className='nums'>{points}</h1>
                        </div>
                    </div>
                    <div className='user-card'>
                        <div className="card-title">
                            <h4 className='actual'>Respect Earned</h4>
                            <hr></hr>
                        </div>
                        <div className="card-description">
                            <h1 className='nums'>0</h1>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
           <RecentMachinelist/>
        </>
    )
}

export default UserDashboard