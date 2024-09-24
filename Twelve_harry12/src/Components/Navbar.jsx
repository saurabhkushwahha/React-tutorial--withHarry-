import React from 'react'
import { memo } from 'react'
function Navbar({adjective,getAdjective }) {
    console.log("Navbar is rendering......")
  return (
    <div>
        <h4>Navbar is good But saurabh is good software engineer and also better UI & Ux designer and also his website look so animated and modern 
            <br />{adjective}</h4>
            
            <button>{getAdjective()}</button>
            </div>
  )
}

export default memo(Navbar)