import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "../css/RecentMachineList.css"
import { getRecentMachines } from '../utils/requests'
import RecentMachine from './RecentMachine'
const RecentMachinelist = () => {
    const [recentMachines, setRecentMachines] = useState([])
    const jwt = useSelector(state => state.user.jwt)
    const id = useSelector(state => state.user.id)
    useEffect(() => {
        getRecentMachines(jwt, id).then(res => {
            console.log(res.data)
            setRecentMachines(res.data)
        }).catch(err => {
            console.log(err)
        })


    }, [])
    return (
        <>
            <div className='recent-container'>
                <h3 className='recent-title'>My Recent Machines</h3>
                <ol class="list-group list-group-numbered">
                    {recentMachines && recentMachines.length == 0 && <h4 style={{ textAlign: "center", fontWeight: 200 }}>You have not hacked any machines yet</h4>}
                    {recentMachines.map(machine => (<>
                        <RecentMachine machine={machine} />
                    </>))}
                </ol>
            </div>
        </>
    )
}

export default RecentMachinelist