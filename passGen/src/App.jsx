/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numYes, setNumYes] = useState(false);
  const [charYes, setCharYes] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numYes) str += "0123456789";
    if(charYes) str+= "!@#$%^&*()_-+=><?~`";

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numYes, charYes, setPassword])

  const copyPassToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,60)
    window.navigator.clipboard.writeText(password)
    setCopied(true)

    setTimeout(()=>{
      setCopied(false)
    }, 1500)
  }, [password])
  useEffect(()=>{passwordGenerator()}, [length, numYes, charYes, passwordGenerator]);
  return(
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-60 bg-gray-800 text-orange-500'>
        <h1 className="text-center text-white text-3xl mb-6" >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-4 text-xl bg-white' placeholder='Password' readOnly ref={passwordRef}/>
          <button onClick={copyPassToClip} className='outline-none bg-blue-700 text-white py-3 px-2 shrink-0'>{copied ? "Copied!" : "Copy"}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"  
              min={8}
              max={60}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            /><label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"  
              defaultChecked={charYes}
              className='cursor-pointer'
              onChange={()=>{setCharYes((prev)=>!prev)}}
            /><label>Characters</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"  
              defaultChecked={numYes}
              className='cursor-pointer'
              onChange={()=>{setNumYes((prev)=>!prev)}}
            /><label>Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
