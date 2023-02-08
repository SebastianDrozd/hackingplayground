import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Machines.css"
const SingleMachine = (props) => {
    const { machine } = props
    let color = ""
    if (machine.difficulty == "easy") { color = "bg-success" }
    else if (machine.difficulty == "medium") { color = "bg-warning" }
    else if (machine.difficulty == "hard") { color = "bg-danger" }
    console.log(color, "color hi")

    const navigate = useNavigate()
    const handleMachine = () => {
        navigate(`/home/machines/${machine.name}`)
    }
    return (
        <>
            <li class="list-group-item d-flex justify-content-between align-items-start single-li">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{machine.name}</div>
                    <p className='machine-description'>{machine.description}</p>
                    <button onClick={handleMachine} className='btn btn-primary'>Hack me</button>
                </div>
                <span className={`badge rounded-pill machine-badge ${color} babe`}>{machine.difficulty}</span>
            </li>
        </>
    )
}

export default SingleMachine