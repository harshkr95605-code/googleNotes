import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainLayout from './components/MainLayout'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Recipe from './components/Recipe'
import Favourites from './components/Favourites'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path="/recipe/:id" element={<Recipe/>}></Route>
        <Route path='favourites' element={<Favourites/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
