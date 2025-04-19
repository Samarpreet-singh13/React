import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const[user,setUser]=React.useState(null)
    return(
        // to give access to the certain elements 
        <UserContext.Provider value={{user,setUser}}> 
        {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;