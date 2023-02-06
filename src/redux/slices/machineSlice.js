import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  machines : []
}
export const machineSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
       setMachines: (state,action) => {
           state.machines = action.payload
       }
    }
})

// Action creators are generated for each case reducer function
export const { setMachines } = machineSlice.actions

export default machineSlice.reducer