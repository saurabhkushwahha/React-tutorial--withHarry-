import React, { useEffect } from 'react'

function Navbar({color}) {


    //case 1: Run on every render
    useEffect( ()=>{
        alert("Hey I'm run on every render")
    })


    // case 2 : Run of first render
    useEffect( ()=>{
        alert("Hey, Run of First Render")
    },[])


    //case 3: Run on when color was changed
    useEffect( ()=>{
        alert("color was changed");
    },[color])

  // case 4 : Example of Cleanup function 
   useEffect( ()=>{
      alert("Example of Clean Up  function")
      return ()=>{
          alert("Run on Unmounted")
      }
   },[])
  return (
    <div>
        I am Navbar color {color}
    </div>
  )
}

export default Navbar