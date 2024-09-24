import React from 'react'

function Navbar(props) {
  return (
    <div>
        <div>{props.logoText}</div>
         
         <ul >
             <li>Home</li>
             <li>About</li>
             <li>Contact Us</li>
             <li>{props.name}</li>
             <li>{props.college}</li>
         </ul>
    </div>
  )
}

export default Navbar