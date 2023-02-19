import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Machines.css"
import LandingFooter from './LandingFooter'
const Machinelist = (props) => {
    const { machines } = props
    const navigate = useNavigate()
    return (
        <>
            <div className="machine-list-container">
                <div className='machine-table-div'>
                    <h2 className="machine-list-title">Machines List</h2>
                    <table className='recents-tab'>
                        <thead>
                            <tr className='row-title'>
                                <th className='row-title' role="columnheader" scope="col" aria-label="MACHINE" class="text-start"><span>MACHINE</span></th>
                                <th className='row-title' role="columnheader" scope="col" aria-label="USER RATING" class="text-start"><span>Description</span></th>
                                <th className='row-title' role="columnheader" scope="col" aria-label="RATING" class="text-start"><span>DIFFICULTY</span></th>
                                <th className='row-title' role="columnheader" scope="col" aria-label="USER OWNS" class="text-start"><span>POINTS</span></th>
                                <th className='row-title' role="columnheader" scope="col" aria-label="SYSTEM OWNS" class="text-start"><span>SYSTEM OWNS</span></th>
                                <th className='row-title' role="columnheader" scope="col" aria-label="" class="text-start"><span></span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {machines && machines.map(machine => (<>
                                <tr>
                                    <td role="cell" class="text-start"><span><i style={{ color: '#ce3aff', fontSize: '20px', marginRight: '1em' }} class="fa fa-laptop" aria-hidden="true"></i><b>{machine.name}</b></span></td>
                                    <td role="cell" class="text-start"><span>{machine.description}</span></td>
                                    <td role="cell" class="text-start"><span>{machine.difficulty}</span></td>
                                    <td role="cell" class="text-start"><span>{machine.points}</span></td>
                                    <td role="cell" class="text-start"><span>{machine.owns}</span></td>
                                    <td role="cell" class="text-start"><span><button onClick={() => { navigate(`/testhome/testmachines/${machine.id}`) }} className='machine-tab-button'>View</button></span></td>

                                </tr>
                            </>))}
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
                <br />
                <LandingFooter />
            </div>
        </>
    )
}

export default Machinelist