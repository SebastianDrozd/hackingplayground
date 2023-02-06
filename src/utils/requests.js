import axios from 'axios'

export const registerUser = (user) => {
    console.log("this is object that will be sent", user)
    return axios.post("http://localhost:4000/api/v1/users/signup",user)
 }

 export const loginUser = (user) => {
    console.log("this is object that will be sent", user)
    return axios.post("http://localhost:4000/api/v1/users/login",user)
 }
 
 export const getMachines = (jwt) => {
      return axios.get("http://localhost:4000/api/v1/machines",{
         headers: {
               Authorization: `Bearer ${jwt}`
         }
      })
 }

 export const startHackMachine = (name) => {
     console.log(name)
      return axios.get(`http://localhost:2500/api/v1/virtualmachines/start/${name}`)
 }

 export const startParrotInstance = () => {
      return axios.get(`http://10.0.0.171:2500/api/v1/parrot/start`)
 }


 export const getRecentMachines = (jwt, userid) => {
      return axios.get(`http://localhost:4000/api/v1/machines/recents/${userid}`,{
         headers: {
               Authorization: `Bearer ${jwt}`
         }
      })
 }

 export const setRecentMachines = (jwt,machineid, userid) => {
   let obj = {machineid: machineid, userid: userid}
   return axios.post("http://localhost:4000/api/v1/machines/recents",{
      headers: { 
          Authorization: `Bearer ${jwt}`
       }
   })
 }