import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("gray")

  return (
    <>
    <div className="w-full bg-green h-screen" style={{backgroundColor:count}}>
      <div className="flex flex-wrap  justify-center items-end h-full">
      <div className=" p-3 flex justify-between w-1/2 bg-white">
  <button
    type="button" onClick={()=> setCount("black")} 
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Button text
  </button>
  <button
    type="button" onClick={()=> setCount("yellow")} 
    className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
  >
    Button text
  </button>
  <button
    type="button"  onClick={()=> setCount("red")} 
    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    Button text
  </button>
  <button
    type="button"  onClick={()=> setCount("green")} 
    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Button text
  </button>
  <button
    type="button"  onClick={()=> setCount("blue")} 
    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
  >
    Button text
  </button>
  <button
   
    type="button"   onClick={()=> setCount("violet")} 
    className="rounded-md bg-violet-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
  >
    Button text
  </button>
</div>

      </div>

   

    </div>
    </>
  )
}

export default App
