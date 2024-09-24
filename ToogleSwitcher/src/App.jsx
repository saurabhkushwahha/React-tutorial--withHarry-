import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Context/Context'

function App() {
  const [themeMode, setThemeMode]=useState('light');
  // set light mode

  const lightMode=()=>{
     setThemeMode('light')
  }
  // set dark mode
  const darkMode=()=>{
     setThemeMode('dark')
  }
  useEffect(()=>{
      document.querySelector('html').classList.remove('light','dark');
      document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  return (
    <>
     <ThemeProvider value={{themeMode,lightMode,darkMode}}>

      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
     </ThemeProvider>
    </>
  )
}

export default App
