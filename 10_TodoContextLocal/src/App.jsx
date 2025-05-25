import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/todoContext'

function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (todo) => {
    // destructure(...) is used here as we want to get all the old values if we write like setTodo(todo) all previous value will be vanished
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (todo) => {
    setTodo((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)))

    // below is the expansion of the above map 
    // prev.map((eachVAL)=>{
    //   if(eachVAL.id===id){
    //     todo
    //   }else eachVAL
    // })
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevtodo) => (prevtodo.id !== id)))
  }

  const toggleComplete = () => {
    setTodo((prev) => prev.map((prevtodo) => (
      prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prev)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
            </div>
          </div>
        </div>
      </>
    </TodoProvider>
  )
}

export default App
