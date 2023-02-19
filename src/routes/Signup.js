import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css/Signup.css"
import { registerUser } from '../utils/requests'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import LandingPageNav from '../components/LandingPageNav';
const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [passwordErr, setPasswordErr] = useState(false)
    const [userExists, setUserExists] = useState(false)
    const [isCreatedVisible, setIsCreatedVisible] = useState(false)
    const [accountCreated, setAccountCreated] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const navigate = useNavigate()
    const handleSignup = (e) => {
        if (email === "" || password === "" || password2 === "") {
            confirmAlert({
                title: 'Error',
                message: 'Please fill in all the fields',
                buttons: [
                    {
                        label: 'Ok',
                        onClick: () => { }
                    }
                ]
            });
            return
        }
        if (email.includes("@") || email.includes(".")) {
            setEmailError(false)
        }
        if (!email.includes("@") || !email.includes(".")) {
            setEmailError(true)
            return
        }

        if (password == password2) {
            setPasswordErr(false)

        }
        if (password !== password2) {
            setPasswordErr(true)
            return
        }
        const user = {
            email: email,
            password: password
        }
        registerUser(user).then(res => {
            setAccountCreated(true)
            setTimeout(() => {
                navigate("/login")
            }, 3000);

        }).catch(err => {
            if (err.response.status == 409) {

                setUserExists(true)
                setIsCreatedVisible(true)
                setTimeout(() => {
                    setIsCreatedVisible(false);
                }, 3000);
            }
        })

    }
    return (
        <>
            <LandingPageNav />
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                {isCreatedVisible && <p className='already-exists'>An account with this email already exists</p>}
                {accountCreated && <div class="alert alert-success" role="alert">
                    Account created successfully. Please login to continue.You will be redirected shortly
                </div>}
                {passwordErr &&
                    <div className="alert alert-danger" role="alert">
                        Your password does not match</div>}
                <hr />

                <label for="email"><b>Email</b></label>
                <input className={emailError == true ? "email-error" : ""} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" name="email" required />
                <label for="psw"><b>Password</b></label>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" id="psw" required />
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input onChange={e => setPassword2(e.target.value)} type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                <hr />
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button onClick={handleSignup} className="registerbtn">Register</button>
            </div>
            <div className="container signin">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </>
    )
}

export default Signup