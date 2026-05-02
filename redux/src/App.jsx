import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CompA from './redux/components/CompA'
import DemoList from './redux/components/DemoList';
import { BrowserRouter} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <CompA/>
      <Routes>
        <Route path="/demo" element={<DemoList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
