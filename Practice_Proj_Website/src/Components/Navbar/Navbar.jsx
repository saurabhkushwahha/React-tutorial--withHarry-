import React from 'react'
import { NavLink ,Link} from 'react-router-dom'

function Navbar() {

    return (
        <div className='w-full p-5 bg-lime-500/60 flex justify-between'>
            <ul className='flex gap-11 items-center justify-center'>
                <li className=' text-white text-xl'>
                    <NavLink to="/"
                     className={ ({isActive})=>`${(isActive) && "text-blue-700"}`}
                    >Home</NavLink>
                </li>
                <li className=' text-white text-xl'>
                    <NavLink to="/about"
                    className={({isActive})=>`${(isActive) && "text-blue-700"}`}
                    >About</NavLink>
                </li>
                <li className=' text-white text-xl'>
                    <NavLink to="/contact"
                    className={({isActive})=>`${(isActive)&& "text-blue-700"}`}
                    >Contact</NavLink>
                </li>
            </ul>
            


        </div>
    )
}

export default Navbar