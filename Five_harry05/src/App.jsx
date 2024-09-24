import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn]=useState(false)
  const [todo,setTodo]= useState([
      {
        title:"saurabh 1",
        des:" this is first object with some description"
      },
      {
        title:"saurabh 3",
        des:"this is second object with some description"
      },
      {
        title:"saurabh 4",
        des:"this is fourth object with some description"
      },
      {
        title:"saurabh 5",
        des:"this is fifth object with some description"
      }
  ])
  
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>showbtn is true</button>: <button>showbtn is false</button>}
      {/* {showbtn && <button>showbtn </button>} */}
      {todo.map((item)=>{
        return ( <>
          <div>{item.title}</div>
          <div>{item.des}</div>
          
         </>)
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
