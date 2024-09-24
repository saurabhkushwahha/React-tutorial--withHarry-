import React from 'react'
import "./Cards.css"
function Cards(props) {
  return (
    <div>
        <div className='cards'>
          <img src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={250} style={{border:"2px solid red"}} />
          <h1>{props.title}</h1>
          <p>{props.des}</p>
        </div>
    </div>
  )
}

export default Cards