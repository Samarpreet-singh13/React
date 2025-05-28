import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const[editid,seteditid]=useState(null)
    const[edittext,setedittext]=useState("")

    const handleEdit = (todo) => {
        seteditid(todo.id)
        setedittext(todo.text)
    }
    const handleSave=(id)=>{
      if(edittext.trim()==="") return 
      dispatch(updateTodo({id:id,text:edittext,completed:false}))
      seteditid(null)
      setedittext("")
    }

  return (
    <>
     <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
  <li
    key={todo.id}
    className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
  >
    {editid === todo.id ? (
      <>
        {/* This is shown ONLY when editing */}
        <input
          className="text-black px-2 py-1 rounded"
          value={edittext}
          onChange={(e) => setedittext(e.target.value)}
        />
        <button
          onClick={() => handleSave(todo.id)}
          className="ml-2 text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600"
        >
          Save
        </button>
      </>
    ) : (
      <>
        {/* This is shown when NOT editing */}
        <div className="text-white">{todo.text}</div>
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(todo)}
            className="text-white bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </>
    )}
  </li>
))}

      </ul>
    </>
  )
}

export default Todos