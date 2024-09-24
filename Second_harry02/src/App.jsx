import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <div className="card">
    <Cards title="Card 1" des="des 1"/>
    <Cards title="Card 2" des="des 2"/>
    <Cards title="Card 3" des="des 3"/>
    <Cards title="Card 4" des="des 4"/>
    
     </div>
     <Footer/>
    </>
  )
}

export default App
