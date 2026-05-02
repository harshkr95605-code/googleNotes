import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
     <Routes>
     <Route path='/home' element={<Home/>}> </Route>
     <Route path='/about' element={<About/>}> </Route>
     <Route path='/contact' element={<Contact/>}> </Route>
    <Route path='/' element={<Home/>}> </Route>

     </Routes>
     
    </>
  )
}

export default App
