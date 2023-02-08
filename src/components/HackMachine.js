import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../css/HackMachine.css"
import { setCompleteMachine, setRecentMachines, startHackMachine, startParrotInstance } from '../utils/requests'
import { VncScreen } from 'react-vnc';
const HackMachine = () => {
    const token = useSelector(state => state.user.jwt)
    const Userid = useSelector(state => state.user.id)
    const [isInitializing, setIsInitializing] = React.useState(false)
    let { id } = useParams()
    const machines = useSelector(state => state.machine.machines)
    let machine = machines.find(machine => machine.name === id)
    const [initialDone, setInitialDone] = React.useState(false)
    const [wantsParrot, setWantsParrot] = React.useState(false)
    const [userAnswer, setUserAnswer] = React.useState("")
    const [wrongAnswer, setWrongAnswer] = React.useState(false)
    const ref = useRef()
    const handleInitialize = () => {
        startHackMachine(machine.name).then(res => { console.log(res.data) })
        setIsInitializing(true)
        setTimeout(() => {
            setIsInitializing(false)
            setInitialDone(true)
        }, 3000)

        setRecentMachines(token, machine.id, Userid).then(res => { console.log(res.data) }).catch(err => { console.log(err) })

    }

    const handleParrot = () => {
        startParrotInstance().then(res => { console.log(res.data); setWantsParrot(true) })
    }

    const submitAnswer = (e) => {
        const answer = machine.flag
        if (userAnswer == answer) {
            alert("Nice Job! You have successfully hacked this machine!")
            setCompleteMachine(token, machine.id, Userid).then(res => { 
                console.log(res.data) })
                .catch(err => { console.log(err) })
        } else {
            setWrongAnswer(true)
            setTimeout(() => {
                setWrongAnswer(false)
            }, 3000)
        }
    }
    return (
        <>
            <div className='hackmachine-info-container'>
                <h1 className='hackmachine-title'>Hack Machine</h1>
                <div className='machine-notice-container hacker'>
                    <br />
                    <br />
                    <h2 className="machine-notice-title">{id}</h2>
                    <br />
                    <p className="machine-notice-description">
                        {machine.description}
                    </p>
                    <br />
                    <p>Difficulty: {machine.difficulty}</p>
                    <button style={{ marginRight: '1em' }} onClick={handleInitialize} className='btn btn-primary'>Start this machine</button>
                    <button onClick={handleParrot} className='btn btn-success'>Start Parrot Instance</button>
                    <br />
                    <br />
                    <br />
                    {isInitializing == true && <div class="spinner-border" role="status"></div>}
                    {initialDone == true && <>
                        <div className="alert alert-success" role="alert">
                            <p>Your hacking machine has successfully started!</p>
                            <p>Target IP: 10.0.0.51</p>
                            <p>Find the hidden HZ key and copy it to submit</p>
                            <p>Good luck!</p>
                        </div>
                        <div className='key-div'>
                            <input onChange={e => setUserAnswer(e.target.value)} placeholder='Enter HZ key here' className="form-control" type="text" />
                            <button onClick={submitAnswer} className='btn btn-success'>Submit</button>
                        </div>
                        {wrongAnswer && <div className="alert alert-danger" role="alert">You answer is incorrect please try again.</div>}
                    </>}
                </div>


                {wantsParrot && <div className="parrot-container"><VncScreen
                    url='ws://10.0.0.171:3000'
                    scaleViewport
                    background="#000000"
                    password="abcd"
                    style={{
                        width: '75vw',
                        height: '75vh',
                    }}
                    ref={ref}
                /></div>}
            </div>
        </>
    )
}

export default HackMachine