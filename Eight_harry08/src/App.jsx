import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const[form,setForm]=useState({username:"",email:""})
  const handleChange=(e)=>{

     setForm({...form,[e.target.name]:e.target.value})
  }
  const showData=()=>{
      console.log(form)
  }
 
  return (
    <>
 
 <div className='w-1/2 h-[50vh] flex flex-col bg-yellow-100 rounded-xl' >
 
     <div>
       <label className=  " font-extrabold"htmlFor="username">Name :</label>
       <input className='m-4 rounded-[5px] px-1 py-1 caret-pink-700 scroll-smooth  focus:outline-0 border-b-2 border-lime-400'  type="text" name="username" id='username' value={form.username} onChange={handleChange} />
     </div>
       <div>
       <label className='font-extrabold' htmlFor="email">Email :</label>
       <input type="email" name="email" id='email' value={form.email}  className="m-4 rounded-[5px] px-1 py-1 caret-pink-700 scroll-smooth  focus:outline-0 border-2 border-yellow-400" onChange={handleChange} />
       </div>
       
<button className='px-4 py-2 bg-zinc-400  rounded-md font-bold' onClick={showData}>Submit</button>

 </div>
    

    </>
  )
}

export default App
