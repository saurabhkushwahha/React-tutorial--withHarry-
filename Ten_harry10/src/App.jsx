import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import {countContext} from './Context/Context'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <countContext.Provider value={{count,setCount}}>
    <Navbar />
    <br />
      <div>
       
          <img src={viteLogo} className="logo" alt="Vite logo" />
     
        
          <img src={reactLogo} className="logo react" alt="React logo" />
      
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      
      </countContext.Provider>
    </>
  )
}

export default App
