import axios from 'axios'
import HEROKU_URL from './endpoints'

export const registerUser = (user) => {
    return axios.post(`${HEROKU_URL}/api/v1/users/signup`,user)
 }

 export const loginUser = (user) => {
    return axios.post(`${HEROKU_URL}/api/v1/users/login`,user)
 }
 
 export const getMachines = (jwt) => {
   //original http://localhost:4000/api/v1/machines
      return axios.get(`${HEROKU_URL}/api/v1/machines`,{
         headers: {
               Authorization: `Bearer ${jwt}`
         }
      })
 }

 export const startHackMachine = (name) => {
   if(name == "Easiest Machine Ever"){
      name = "EasiestMachineEver"
   }
     console.log(name)
      return axios.get(`http://10.0.0.171:2500/api/v1/virtualmachines/start/${name}`)
 }

 export const startParrotInstance = (userid) => {
   
   const obj = {userid: userid}
      return axios.post(`http://10.0.0.171:2500/api/v1/parrot/start`,obj)
 }

 export const stopParrotInstance = (userid,parrotid) => {
   const obj = {
      userid: userid,
      parrotid: parrotid
   }
   return axios.post(`http://10.0.0.171:2500/api/v1/parrot/delete`,obj)
 }


 export const getRecentMachines = (jwt, userid) => {
   //original http://localhost:4000/api/v1/machines/recents/${userid}
      return axios.get(`${HEROKU_URL}/api/v1/machines/recents/${userid}`,{
         headers: {
               Authorization: `Bearer ${jwt}`
         }
      })
 }

 export const setRecentMachines = (jwt,machineid, userid) => {
   let obj = {machineid: machineid, userid: userid}
   //original http://localhost:4000/api/v1/machines/recents
   return axios.post(`${HEROKU_URL}/api/v1/machines/recents`,obj,{
      headers: { 
          Authorization: `Bearer ${jwt}`
       }
   })
 }

 export const setCompleteMachine = (jwt,machineid,userid) => {
   let obj = {machineid: machineid, userid: userid}
   //original http://localhost:4000/api/v1/machines/complete
   return axios.post(`${HEROKU_URL}/api/v1/machines/complete`,obj,{
    headers: {
          Authorization: `Bearer ${jwt}`
    }
 })
 }
 export const getCompletedMachines = (jwt, userid) => {
   //original http://localhost:4000/api/v1/machines/complete/${userid}
   return axios.get(`${HEROKU_URL}/api/v1/machines/complete/${userid}`,{
    headers: {
          Authorization: `Bearer ${jwt}`
    }
 })
 }

 export const verifyJwtToken = (jwt) => {
   let obj = {
      token: jwt
   }
   //original http://localhost:4000/api/v1/users/verify
   return axios.post(`${HEROKU_URL}/api/v1/users/verify`,obj)
 }

 export const getMachineById = (id,jwt) => {
   //original http://localhost:4000/api/v1/machines/${id}
   return axios.get(`${HEROKU_URL}/api/v1/machines/${id}`,{
    headers: {
          Authorization: `Bearer ${jwt}`
    }
 })
 }
 export const getActiveParrotMachines = () => {
   return axios.get(`http://10.0.0.171:2500/api/v1/parrot/active`)
 }
 export const setMachineRating = (userid,machineid,rating,jwt)=>{
   const obj = {
      userid: userid,
      machineid: machineid,
      rating: rating
   }
   //original http://localhost:4000/api/v1/machines/like
   return axios.post(`${HEROKU_URL}/api/v1/machines/like`,obj,{
    headers: {
          Authorization: `Bearer ${jwt}`
    }
 })
 }

 export const getMachineRating = (machineid,jwt)=>{
   //original http://localhost:4000/api/v1/machines/like/${machineid}
  return axios.get(`${HEROKU_URL}/api/v1/machines/like/${machineid}`,{
    headers: {
          Authorization: `Bearer ${jwt}`
    }
 })
 }