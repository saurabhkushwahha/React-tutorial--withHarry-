import { useState,useEffect } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
const [mydata,setMydata]=useState([])
  useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>{
      setMydata(data)
    })
  },[])


  return (
    <>
  
<div className=' w-full  flex flex-wrap justify-center  gap-8' >
  <Navbar/>
    {mydata.map((item,index)=>(
      <Card data={item} />
    ))}
    <Footer/>
    </div>
          
    </>
    
  )
}

export default App
