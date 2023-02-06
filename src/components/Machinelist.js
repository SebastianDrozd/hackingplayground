import React from 'react'
import "../css/Machines.css"
import SingleMachine from './SingleMachine'
const Machinelist = (props) => {
    const { machines } = props
    return (
        <>
            <div className="machine-list-container">
                <h2 className="machine-list-title">Machines List</h2>
                <ol class="list-group list-group-numbered">
                    {machines && machines.map(machine => (
                        <>
                            <SingleMachine machine = {machine} />
                        </>))}
                </ol>
            </div>
        </>
    )
}

export default Machinelist