import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {ThemeContext} from './ThemeContext'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0);
  const [theme,setTheme] = useState("light");
  const toggleTheme =() =>{
    setTheme((prev)=>(prev==="light"?"dark":"light"))
  }
  return (
    <>
     <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className={theme==="dark" ? "dark-mode" : "light-mode"}></div>
       
     <Home/>
     </ThemeContext.Provider>
    </>
  )
}

export default App
