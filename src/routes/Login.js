import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "../css/Login.css"
import { setLoggedIn } from '../redux/slices/userSlice'
import { loginUser } from '../utils/requests'
const Login = () => {
    const [password,setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [passwordErr, setPasswordErr] = useState(false)
    const [notFound,setNotFound] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = () => {
        const user = {
            email: email,
            password: password
        }
        loginUser(user).then(res => {
            console.log("response data",res.data)
            dispatch(setLoggedIn(res.data))
            localStorage.setItem("token",res.data.token)
            navigate("/home")
        }).catch(err => {
            if(err.response.status == 401){
                setPasswordErr(true)
                setTimeout(() => {
                    setPasswordErr(false)
                }, 3000);
            }
            else if(err.response.status == 404){
              setNotFound(true)
              setTimeout(() => {
                setNotFound(false)
            }, 3000);
            }
        })
    }
  return (
    <>
     <div className="container">
                <h1>Login</h1>
                <p>Please login in to continue to HackerZone.com</p>
                {passwordErr && <div className="alert alert-danger" role="alert">You have entered an incorrect password</div>}
                {notFound && <div className="alert alert-danger" role="alert">User not found</div>}
                <label for="email"><b>Email</b></label>
                <input onChange={(e) => {setEmail(e.target.value)}}  type="text" placeholder="Enter Email" name="email" required />
                <label for="psw"><b>Password</b></label>
                <input onChange = {(e) => {setPassword(e.target.value)}}  type="password" placeholder="Enter Password" name="psw" id="psw" required />
                <hr />
             
                <button onClick={handleLogin} className="registerbtn">Login</button>
            </div>
            <div className="container signin">
                <p>Dont' have an account? <Link to="/signup">Signup</Link></p>
                
            </div>
    </>
  )
}

export default Login