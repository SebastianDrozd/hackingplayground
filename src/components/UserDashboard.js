import React from 'react'
import "../css/UserDashboard.css"
import RecentMachinelist from './RecentMachinelist'
const UserDashboard = () => {
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
                            <h1 className='nums'>0</h1>
                        </div>
                    </div>
                    <div className='user-card'>
                        <div className="card-title">
                            <h4 className='actual'>Points Earned</h4>
                            <hr></hr>
                        </div>
                        <div className="card-description">
                            <h1 className='nums'>0</h1>
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