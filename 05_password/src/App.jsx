import { useEffect,useRef } from 'react';
import { useState,useCallback } from 'react'


function App() {
  const[length,setLength]=useState(8);

  const[num,setNum]=useState(false);

  const[char,setchar]=useState(false);

  const[pass,setPass]=useState("");

  // password generator function
  const password_generator=useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if(setNum) str+="0123456789"
    if(setchar) str+="!#¤%&/()=?+-";

    // code for generating a particular string pswrd
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)

      pass+=str.charAt(char);
    }
    setPass(pass); 
  },[length,Number,char,setPass])

  const passRef=useRef(null);

  const copyToclip=useCallback(()=>{
    passRef.current?.select()
      window.navigator.clipboard.writeText(pass);
  },[pass])

  // for running the generator 
  useEffect(()=>{
    password_generator();
  },[num,char,length,password_generator])

  return (
    <>
    {/* these are all below html and css no hard code to remember other than inputs */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passRef}
          />
          <button 
          onClick={copyToclip}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input 
            type="checkbox" 
            defaultChecked= {setNum}
            id='numberInput'
            onChange={()=>{
              setNum((prev)=>(!prev))
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input 
            type="checkbox" 
            defaultChecked= {setchar}
            id='charInput'
            onChange={()=>{
              setchar((prev)=>(!prev))
            }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
