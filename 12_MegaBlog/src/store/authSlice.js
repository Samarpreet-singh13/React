import { createSlice } from "@reduxjs/toolkit";

const inintialState={
    status:false,
    userData:null
}

const authSlice=createSlice({
    name:"auth",
    inintialState,
    reducers:{
        login:(state,action)=>{
            state.status=true; // user is logged in
            state.userData=action.payload // payload contains the user data
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null
        }
    }
})
export const {login,logout}=authSlice.actions; // export the actions to be used in components
export default authSlice.reducer;