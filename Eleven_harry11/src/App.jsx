import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums = new Array(30_000_000).fill(0).map((_, i)=>{
  return {
    index: i,
    isMagical: i===29_000_000
  }
})


function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true) // Expensive Computation
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])

  return (
    <>
     <span>Magical : {magical.index}</span>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          
        
        }}>
          count is {count}
        </button>
       
      </div>
     
    </>
  )
}

export default App