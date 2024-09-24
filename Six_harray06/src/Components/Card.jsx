import React, { useRef } from 'react'

function Card({data:{title,body}}) {
  const bgref=useRef()
  const handleEvent=()=>{
     bgref.current.style.backgroundColor='darkcyan'
     bgref.current.style.color='white'
     bgref.current.style.transition='2s'
     
  }
  return (
    <div ref={bgref}  className='w-[25rem] bg-black h-80 p-6 rounded-[0.4rem] text-white ' onMouseEnter={handleEvent}>
      <div>
        <h2 ref={bgref}className='font-mono bg-slate-600 p-3 rounded-md'>TITLE : {title}</h2>
      
       <p ref={bgref} className='p-4 text-justify'>{body}</p>
      
      </div>
    
    </div>
  )
}

export default Card