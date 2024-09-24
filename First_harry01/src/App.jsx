import { useState } from "react"
import './App.css'
import Navbar from "./assets/components/Navbar"
import Footer from "./assets/components/Footer"



function App() {
 const [value, setValue]= useState(0)
 return (
   <div>
     <Navbar name='saurabh' logoText="codewithHarray"/>
      <div>{value}</div>
      <button onClick={()=> setValue(value+1)}>counter</button>
     <Footer/>
   </div>
  )
}

export default App
