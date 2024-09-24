import React from 'react'
import Components1 from './Components1'
import { countContext } from '../Context/Context'
import { useContext } from 'react'
function Button() {
    const {count,setCount}=useContext(countContext)
  return( 
    
  <button onClick={()=>setCount(((cout)=>count+1))}>
        <span>
            <Components1 />
        </span>
    </button>
  )
}

export default Button