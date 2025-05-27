import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
// is file me store ko configure karte hain
const store=configureStore({
    reducer:todoReducer
})

export default store;
// is file me store ko export karte hain