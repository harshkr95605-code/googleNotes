import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes,Route, Outlet } from 'react-router-dom'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Nav from './components/Nav'
import footer from './components/footer'
import MainLayout from './components/MainLayout'
import Data from './components/Data'
import GreetUser from './components/GreetUser'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   
      <Routes>
        <Route path='/' element={<MainLayout/>}> 
        <Route index element={<h1>This is the Wrapper Route</h1>}/>
         <Route path='page1' element={<Page1/>}/> 
         <Route path='page2' element={<Page2/>}/> 
         <Route path='page3' element={<Page3/>}/>
         <Route path="/data/:UserID" element={<Data/>}></Route>
            <Route path="/greet" element={<GreetUser/>}></Route>
         <Route path="*" element={<h1>404 Page not found❌</h1>}></Route>
      
          </Route>
       
      </Routes>
      
    </>
  )
}

export default App
