import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setcounter]=useState(15)
  const addvalue=()=>{
    console.log('clicked',counter)
    setcounter(counter+1)
  }
  const removevalue=()=>{
    console.log('clicked',counter)
    if(counter<=0) return 0 
    setcounter(counter-1)
  }
  // const counter =5
  return (
  <> 
  <h1>Samar or code</h1>
  <h1>counter value:{counter}</h1>
  <button onClick={addvalue}>Add value</button>
  <br />
  <button onClick={removevalue}>Decrease value</button>
  </>
  )
}

export default App
