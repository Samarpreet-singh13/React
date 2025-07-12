import {configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

const store=configureStore({
    reducer:{
        auth:authReducer // authReducer is the reducer for authSlice
    }
})

export default store