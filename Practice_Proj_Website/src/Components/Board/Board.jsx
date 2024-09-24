import React, { useContext } from 'react'
import { meraContext } from '../../Context/Context'

function Board() {
    const userdata=useContext(meraContext)
    
  return (
    <div className='bg-lime-700 w-full flex items-center justify-center flex-col rounded-xl'>
    <div className='text-black font-extrabold text-3xl underline '>Board</div>
     {/* <div>
     {userdata.name}<br/>
     {userdata.email} <br/>
     {userdata.hobbies.map((item,index)=>{
        return(
           <li key={index}>{item}</li>
        )
     })}
     </div> */}
     <div>
        {userdata.name}
     </div>
    </div>
  )
}

export default Board