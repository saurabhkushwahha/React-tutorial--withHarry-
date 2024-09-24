import React from 'react'
import './Card.css'
function Card({item,index,className}) {
  
  return (
    <div>

     <span>
       <button>X</button>
      {item}
     </span>
    </div>

  )
}

export default Card