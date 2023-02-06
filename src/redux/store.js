import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../redux/slices/userSlice"
import machineReducer from '../redux/slices/machineSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        machine : machineReducer
      },
})