
import React from 'react'
import "../css/RecentMachine.css"
import moment from 'moment';
const RecentMachine = (props) => {
    const {machine} = props
    
    return (
        <>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{machine.name}</div>
                    <p>Status: Done</p>
                    <p>Last Accessed: {new Date(machine.lastused).toDateString()}</p>
                </div>
                <span class="badge bg-primary rounded-pill">{machine.difficulty}</span>
            </li></>
    )
}

export default RecentMachine