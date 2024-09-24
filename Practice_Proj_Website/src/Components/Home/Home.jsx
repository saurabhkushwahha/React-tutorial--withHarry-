import React, { createContext, useState } from 'react'
import Login from '../Login/Login'
import { NavLink } from 'react-router-dom'
import Box from '../Box/Box'
import { meraContext } from '../../Context/Context'
function Home() {
  
  // const [userdata,setUserdata]= useState({
  //    id: 1,
  // name: "John Doe",
  // email: "john.doe@example.com",
  // age: 30,
  // address: {
  //   street: "123 Main St",
  //   city: "New York",
  //   state: "NY",
  //   zip: "10001",
  // },
  // hobbies: ["reading", "gaming", "hiking"],
  // isActive: true,

  // })
  const userdata={
     id: 2,
     name:"Saurabh Kushwaha",
     age:45,
     email:"saurabhkushwahhaa@gmail.com",
     address:"Gorkhpur,UttarPradesh"
  }
  return (
    
 <meraContext.Provider value={userdata}>

    <div className='flex gap-10 p-10'>
      <div className='relative px-10 py-2 flex flex-col'>
        <h1 className='font-extrabold text-4xl '> Home Component
        </h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolore blanditiis facilis voluptates excepturi, aperiam sunt id iste suscipit corporis tempore, eligendi voluptas eveniet laborum accusamus officia, similique ducimus atque incidunt quasi cum aliquid veniam molestiae. Dolor expedita accusamus assumenda provident et eligendi ab omnis, exercitationem ex enim quibusdam odio dolores laborum ipsum est maiores vitae voluptatibus sint distinctio </p>
        <div className='m-5'>
          <NavLink to="/login" className={({ isActive }) => `${(isActive) && "text-gray-500"}`}>
            <button className='px-8 py-2 rounded-md bg-black text-white shadow hover:shadow-lg hover:bg-black/15 transition-all delay-100
                   '>Login</button>
          </NavLink>
        </div>

      </div>
      <Box />
    </div>
  </meraContext.Provider>
)
}

export default Home