import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    token: "",
    email: "",
    id : ""
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
        }    
    }
})

// Action creators are generated for each case reducer function
export const { setLoggedIn } = userSlice.actions

export default userSlice.reducer