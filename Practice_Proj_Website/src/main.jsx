import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import  Contact from './Components/Contact/Contact.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Login from './Components/Login/Login.jsx'

// const router= createBrowserRouter([
//   {
//      path:"/",
//      element:<Layout/>,
//      children:[
//       {
//         path:"",
//         element:<Home/>,
       
//       },
//       {
//         path:"about",
//         element:<About/>,
//       },
//       {
//         path:"contact",
//         element:<Contact/>,
//       },
      
//      ]
//   },


// ])

 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    )
 )
  
  
  
createRoot(document.getElementById('root')).render(
    <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode >,
)
