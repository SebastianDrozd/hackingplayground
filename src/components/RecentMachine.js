
import React from 'react'
import "../css/RecentMachine.css"
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const RecentMachine = (props) => {
    const navigate = useNavigate()
    const {machine} = props
    let color = ""
    if (machine.difficulty == "easy") { color = "bg-success" }
    else if (machine.difficulty == "medium") { color = "bg-warning" }
    else if (machine.difficulty == "hard") { color = "bg-danger" }

    const handleView = () => {
        navigate(`/home/machines/${machine.name}`)
    }

    return (
        <>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto cont">
                    <div class="fw-bold">{machine.name}</div>
                    <br />
                    <p>Last Accessed: {new Date(machine.lastused).toDateString()}</p>
                    <button onClick={handleView} className='btn btn-primary'>View</button>
                </div>
                <span class={`badge bg-primary rounded-pill ${color} heyhey`}>{machine.difficulty}</span>
            </li></>
    )
}

export default RecentMachine