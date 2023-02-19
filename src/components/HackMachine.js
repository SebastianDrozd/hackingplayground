import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import "../css/HackMachine.css"
import { getActiveParrotMachines, getMachineById, getMachineRating, setCompleteMachine, setMachineRating, setRecentMachines, startHackMachine, startParrotInstance, stopParrotInstance } from '../utils/requests'
import { VncScreen } from 'react-vnc';
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { setUserPoints } from '../redux/slices/userSlice'
import { Rating } from 'react-simple-star-rating'
const HackMachine = () => {
    const token = useSelector(state => state.user.token)
    const Userid = useSelector(state => state.user.id)
    const [parrotId, setParrotId] = React.useState("hi")
    const [isInitializing, setIsInitializing] = React.useState(false)
    let { id } = useParams()
    const [initialDone, setInitialDone] = React.useState(false)
    const [wantsParrot, setWantsParrot] = React.useState(false)
    const [userAnswer, setUserAnswer] = React.useState("")
    const [wrongAnswer, setWrongAnswer] = React.useState(false)
    const [machine, setMachine] = React.useState({})
    const [connectionError, setConnectionError] = React.useState(false)
    const [parrotEndpoint, setParrotEndpoint] = React.useState('ws://10.0.0.171:300')
    const ref = useRef();
    const [doneWithMachine, setDoneWithMachine] = React.useState(false)
    const [wantsRating, setWantsRating] = React.useState(false)
    const [rating, setRating] = React.useState(0)
    const location = useLocation()
    const dispatch = useDispatch()
    const [viewRating, setViewRating] = React.useState(0)


    useEffect(() => {
        getMachineById(id,token).then(res => {
            setMachine(res.data[0])
            getMachineRating(id,token).then(res => {
                if(res.data.length == 0){
                    setViewRating(0)
                    return;
                }
                let total = 0;
                for(let i of res.data){
                    total += i.rating
                }
                setViewRating(total/res.data.length)
            })
        })
    }, [])
    useEffect(() => {
        localStorage.setItem("doneWithMachine","true")
        setDoneWithMachine(true)
    }, [location])
    useEffect(() => {
            return () => {
                if (localStorage.getItem("wantsParrot")==="true") {
                    console.log("this is parrotic endpoint", localStorage.getItem("parrotId"))
                    alert("You are about to leave this page. You current Parrot instance will be terminated.")
                    console.log("this is object that will get setnt", Userid, localStorage.getItem("parrotId"))
                    stopParrotInstance(Userid, localStorage.getItem("parrotId")).then(res => {
                        localStorage.removeItem("wantsParrot")
                        localStorage.removeItem("parrotId")
                        localStorage.removeItem("doneWithMachine")
                    })


                }
               
            }
        
    }, [doneWithMachine])

    const handleInitialize = () => {
        setIsInitializing(true)
        startHackMachine(machine.name).then(res => {
            if (res.status == 200) {
                setIsInitializing(false)
                setInitialDone(true)
            }
        }).catch(err => { setConnectionError(true) })

        setRecentMachines(token, machine.id, Userid).then(res => { console.log(res.data) }).catch(err => { console.log(err) })

    }

    const handleParrot = () => {
        getActiveParrotMachines().then(res => {

            const length = res.data.length
            startParrotInstance(Userid).then(res => {
                console.log("this is reponse from parat",res)
                localStorage.setItem("parrotId", res.data.endPoint)
                localStorage.setItem("wantsParrot", "true")
                setParrotId(res.data.endPoint)
                setWantsParrot(true)
                setParrotEndpoint(`ws://10.0.0.171:300${length}`)
            })

        })

    }

    const submitAnswer = (e) => {
        const answer = machine.flag
        if (userAnswer == answer) {

            setCompleteMachine(token, machine.id, Userid).then(res => {
            })
            dispatch(setUserPoints(machine.points))

            Swal.fire({
                title: 'Nice Job!',
                text: `You have completed the ${machine.name} machine! You have earned ${machine.points} points!`,
                imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/86/35/97/1000_F_386359720_njQcQ9M4wskBp4Rm395vLfODLVkrUOq7.jpg',
                background: '#111927',
                imageWidth: 400,
                imageHeight: 200,
                color: 'white',
                imageAlt: 'Custom image',
                confirmButtonColor: '#C736F7',
            })
                .catch(err => { console.log(err) })
        } else {
            setWrongAnswer(true)
            setTimeout(() => {
                setWrongAnswer(false)
            }, 3000)
        }
    }

    const handleRating = (e) => {
        setWantsRating(!wantsRating)
    }

    const handleReview = (rate) => {
        setRating(rate)
        setMachineRating(Userid, machine.id, rate,token).then(res => {
            
            Swal.fire({
                title: 'Review Submitted!',
                text: `Thanks for leaving a rating for this machine!`,
                background: '#111927',
                imageWidth: 400,
                imageHeight: 200,
                color: 'white',

                confirmButtonColor: '#C736F7',
            })
                .catch(err => { console.log(err) })
        })

    }
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            {connectionError && <div className="alert alert-danger" style={{ width: '50%', margin: '0 auto' }} role="alert"><p>Theres seems to be a problem on our end when connecting to this machine. </p>
                <p>We apologize for the inconvenience. Please try again at a later time. </p>
            </div>}
            <h1 className='hackmachine-title'>Hack Machine</h1>
            <div className='hackmachine-flex-container'>
                <div className="hackmachine-leftside">
                    <div className={`hackmachine-status ${initialDone == true ? 'online' : 'offline'}`}>
                        <p className='status-p'>{initialDone == true ? "ONLINE" : "OFFLINE"}</p>
                        {isInitializing == true && <div style={{ marginLeft: '1em' }} class="spinner-border" role="status"></div>}
                    </div>
                    <div className='hackmachine-create'>
                        <i onClick={handleInitialize} class="fa fa-power-off" aria-hidden="true"></i>
                        <div className='hackmachine-sub'>
                            <p><b>Start this machine</b></p>
                            <p className='h-sub-p'>Start an instance of this machine</p>
                        </div>
                    </div>

                    <div className='hackmachine-review'>
                        <i onClick={handleRating} class="fa fa-star-o" aria-hidden="true"></i>
                        <div className='hackmachine-review-sub'>
                            <p><b>Leave a review</b></p>
                            <p className='h-sub-p'>Leave a rating to let others know </p>
                            {wantsRating && <Rating onClick={handleReview} />}
                        </div>
                    </div>
                    <div className='hackmachine-create'>
                        <i onClick={handleParrot} style={{ color: "pink" }} class="fa fa-power-off" aria-hidden="true"></i>
                        <div className='hackmachine-sub'>
                            <p ><b>Start Parrot Os</b></p>
                            <p className='h-sub-p'>Start an in browser linux virtual m</p>
                        </div>
                    </div>
                </div>
                <div className='hackmachine-rightside'>
                    <div className='h-right' style={{ display: 'flex' }}>
                        <div className='hackmachine-smallcards'>
                            <i class="fa fa-user-o small-user" aria-hidden="true"></i>
                            <h4 className='small-owns'>{machine.owns}</h4>

                            <p className='small-owns-p'>USER OWNS </p>
                        </div>
                        <div className='hackmachine-smallcards'>
                            <i class="fa fa-star-o small-user" aria-hidden="true"></i>
                            <h4 className='small-owns'>{viewRating}</h4>

                            <p className='small-owns-p'>USER RATING </p>
                        </div>
                        <div className='hackmachine-smallcards'>
                            <i class="fa fa-calendar small-user" aria-hidden="true"></i>
                            <h4 className='small-owns'>11/23/22</h4>

                            <p className='small-owns-p'>MACHINE DATE  </p>
                        </div>
                    </div>
                    <div className='h-right2' style={{ display: 'flex', marginTop: '2em' }}>
                        <div className='hackmachine-smallcards'>
                            <i class="fa fa-laptop small-user" aria-hidden="true"></i>
                            <h4 className='small-owns2'>{machine.name}</h4>

                            <p className='small-owns-p'>MACHINE TITLE </p>
                        </div>
                        <div className='hackmachine-smallcards'>
                            <i class="fa fa-tasks small-user" aria-hidden="true"></i>
                            <h4 className='small-owns2'>{machine.description}</h4>

                            <p className='small-owns-p'>DESCRIPTION </p>
                        </div>
                        <div className='hackmachine-smallcards'>
                            <i class="fa fa-star-o small-user" aria-hidden="true"></i>
                            <h4 className='small-owns'>{machine.points}</h4>

                            <p className='small-owns-p'>POINTS AWARDED  </p>
                        </div>
                    </div>
                </div>
            </div>
            {initialDone == true && <>
                <div className="alert alert-success done" role="alert" style={{ marginTop: '2em' }}>
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
            {wantsParrot && <div className="parrot-container"><VncScreen
                //url='ws://10.0.0.171:3000'
                url={parrotEndpoint}
                scaleViewport
                background="#000000"
                password="abcd"
                style={{
                    width: '75vw',
                    height: '75vh',
                }}
                ref={ref}
            /></div>}
        </>
    )
}

export default HackMachine