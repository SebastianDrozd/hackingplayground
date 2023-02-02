import axios from 'axios'

export const registerUser = (user) => {
    console.log("this is object that will be sent", user)
    return axios.post("http://localhost:4000/api/v1/users/signup",user)
 }

 export const loginUser = (user) => {
    console.log("this is object that will be sent", user)
    return axios.post("http://localhost:4000/api/v1/users/login",user)
 }
 