import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function Logoutbtn(){
    const dispatch=useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout()); // dispatch the logout action to the store
        })
    }

    return (
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full"
        onClick={logoutHandler}>Logout</button>
    )
}

export default Logoutbtn;
// This is a placeholder component for the Logout button.