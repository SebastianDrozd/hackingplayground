import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    token: "",
    email: "",
    id : "",
    points : 0,
    page : ""
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setLoggedIn: (state,action) => {
            console.log("this is action",action)
            state.loggedIn = true
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.points = action.payload.points
        },
        setUserPoints : (state,action) => {
            state.points = action.payload
        }    
    }
})

// Action creators are generated for each case reducer function
export const { setLoggedIn,setUserPoints } = userSlice.actions

export default userSlice.reducer