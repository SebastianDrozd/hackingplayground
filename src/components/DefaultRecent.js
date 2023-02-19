import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/DefaultRecent.css"
const DefaultRecent = (props) => {
    const navigate = useNavigate()
    const recentMachines = props.recents
    const handleViewRecentMachines = () => {
        navigate('/testhome/testmachines')
    }
    return (
        <>
            <div className='table-div'>
                <h1 className='title-recents-tab'>Recent Machines</h1>
                <table className='recents-tab'>
                    <thead>
                        <tr className='row-title'>
                            <th className='row-title' role="columnheader" scope="col" aria-label="MACHINE" class="text-start"><span>MACHINE</span></th>
                            <th className='row-title' role="columnheader" scope="col" aria-label="USER RATING" class="text-start"><span>RATING</span></th>
                            <th className='row-title' role="columnheader" scope="col" aria-label="RATING" class="text-start"><span>DIFFICULTY</span></th>
                            <th className='row-title' role="columnheader" scope="col" aria-label="USER OWNS" class="text-start"><span>LAST USED</span></th>
                            <th className='row-title' role="columnheader" scope="col" aria-label="SYSTEM OWNS" class="text-start"><span>SYSTEM OWNS</span></th>
                            <th className='row-title' role="columnheader" scope="col" aria-label="" class="text-start"><span></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentMachines.length == 0 && <tr><td colSpan='6' style={{ textAlign: 'center', fontWeight: '100', opacity: '0.8' }}>No Recent Machines. Get started now! <button onClick={handleViewRecentMachines} className='button-machine-list'>View Machines</button></td></tr>}
                        {recentMachines && recentMachines.map((machine) => (<>
                            <tr>
                                <td role="cell" class="text-start"><span><i style={{ color: '#ce3aff', fontSize: '20px', marginRight: '1em' }} class="fa fa-laptop" aria-hidden="true"></i><b>{machine.name}</b></span></td>
                                <td role="cell" class="text-start"><span>{machine.description}</span></td>
                                <td role="cell" class="text-start"><span>{machine.difficulty}</span></td>
                                <td role="cell" class="text-start"><span>{new Date(machine.lastused).toDateString()}</span></td>
                                <td role="cell" class="text-start"><span>{machine.owns}</span></td>
                                <td role="cell" class="text-start"><span><button onClick={() => { navigate(`/testhome/testmachines/${machine.id}`) }} className='recent-tab-button'>View</button></span></td>

                            </tr>
                        </>))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DefaultRecent