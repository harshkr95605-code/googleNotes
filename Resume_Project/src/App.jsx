import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Bio from './Component/Bio'
import Contact from './Component/Contact'
import Skills from './Component/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Bio/>
     <Contact/>
     <Skills />
    </div>
  )
}

export default App
