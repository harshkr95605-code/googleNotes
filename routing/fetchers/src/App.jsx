import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>React Router Fetcher Example</h1>
    <nav>
      <Link to="/post/1">Go to Post 1</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default App
