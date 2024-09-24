import React from 'react'
import Board from '../Board/Board'

function Box() {
  return (
    <div className='p-10 bg-slate-800/25 rounded-xl text-red-950 flex justify-center items-center flex-col'>
        <h1 className='text-4xl font-extrabold text-center underline  p-2'>Box</h1>
        <p className='text-justify uppercase'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis sed ad facilis minus sint veritatis expedita dignissimos eligendi exercitationem? Reprehenderit corrupti minus fuga quo explicabo tenetur architecto provident quibusdam dolorum possimus ut, facilis quam sit voluptatem maiores molestiae modi distinctio quas corporis. Officiis voluptatum voluptas ipsum ipsa iusto eius?
        </p>
      <Board/>


    </div>
    
  )
}

export default Box