import { useState } from 'react';
import './App.css'

function App() {
  const colors = [ "black", "brown", "green", "red","blue","orange","purple", "pink", "magenta", "olive", "cyan", "gray", "beige"];
  const [color, setColor] = useState("antiquewhite");
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-gray-200 px-3 py-2 rounded-2xl'>
          {colors.map((color) => (
            <button key={color} onClick={() => setColor(color)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: color }}>
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
