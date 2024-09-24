import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from './Components/Navbar'

function App() {
  
  const router=createBrowserRouter([
    {
      path:"",
      element:<><Navbar/><Home/></>,
    },
    {
      path:"about",
      element:<><Navbar/><About/></>
    },
    {
      path:"contact",
      element: <><Navbar/><Contact/></>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
