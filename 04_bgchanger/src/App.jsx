import { useState } from 'react'

function App() {
  const [color,setColor]=useState("black")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"red"}}>red </button>
          <button 
          onClick={()=>setColor("pink")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"pink"}}>pink </button>
          <button 
          onClick={()=>setColor("white")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"white"}}>white </button>
          <button 
          onClick={()=>setColor("lightblue")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"lightblue"}}>lightblue </button>
          <button 
          onClick={()=>setColor("lavender")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"lavender"}}>lavender </button>
          <button 
          onClick={()=>setColor("beige")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"beige"}}>beige </button>
        </div>
      </div>
    </div>
  )
}

export default App
