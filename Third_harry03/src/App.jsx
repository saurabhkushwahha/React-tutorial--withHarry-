import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
   const[color,setColor]=useState(0)

   useEffect(()=>{
    alert("Count was Changed")
    setColor(color+1)
   },[count])

  return (
    <>
    <Navbar color={color}/>
     <div>Counter is {count}</div>
        <button onClick={ ()=> setCount(count+1)}>counter</button>
    </>
  )
}

export default App
