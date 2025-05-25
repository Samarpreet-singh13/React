import { createContext,useContext } from "react";

export const TodoContext=createContext({
    // A todo will be a array of objects that will be carrying all the info about each todo 
    // We will need an empty array by default so that we can add it according to us 
    todos:[
        // a common structure to add a todo 
        {
            id:1,
            todo:"todo msg",
            // we can use any word in place of completed 
            completed: false
        }
    ],
    // we have written the functions only and not the functioning as they will be later done in app.jsx
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider
