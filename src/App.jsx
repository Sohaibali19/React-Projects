import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
   
      <div className='w-full h-screen duration-200'
      style ={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'
        >
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2'
          >
            <button className='outline-none px-4 py-1  rounded-full text-white'
            style ={{backgroundColor:"red"}}
            onClick={() => setColor('red')}
            >
            Red</button>
            <button className='outline-none px-4 py-1  rounded-full text-white'
            style ={{backgroundColor:"green"}}
            onClick={() => setColor('green')}
            >
            Green</button>
            <button className='outline-none px-4 py-1  rounded-full text-white'
            style ={{backgroundColor:"blue"}}
            onClick={() => setColor('blue')}
            >
            Blue</button>

            <button className='outline-none px-4 py-1  rounded-full text-white'
            style ={{backgroundColor:"orange"}}
            onClick={() => setColor('orange')}
            >
            Orange</button>

            <button className='outline-none px-4 py-1  rounded-full text-red'
            style ={{backgroundColor:"yellow"}}
            onClick={() => setColor('yellow')}
            >
            Yellow</button>

            <button className='outline-none px-4 py-1  rounded-full text-white'
            style ={{backgroundColor:"olive"}}
            onClick={() => setColor('olive')}
            >
            Olive</button>
          </div>
        </div>
        
      </div>
      
  )
}

export default App
