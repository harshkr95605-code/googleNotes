import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from "./views/Home"
import Archive from "./views/Archive"
import Trash from "./views/Trash"
import NodeWrapper from './views/layouts/NotesWrapper'
const App = ()=> {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        
      <Route path = "/" element={<NodeWrapper><Home/></NodeWrapper>}/>
      <Route path = "/archieve" element={<NodeWrapper><Archive/></NodeWrapper>}/>
      <Route path = "/trash" element={<NodeWrapper><Trash/></NodeWrapper>}/>
    </Routes>
      
    </>
  )
}

export default App
