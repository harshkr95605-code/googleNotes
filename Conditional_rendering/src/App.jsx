import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import  DashComp  from './Components/dashComp'
import  LoginComp  from './Components/loginComp'
import './App.css'

function App() {
  const [IsLoggedin, setIsLoggedin] = useState(false)
  function toggleLogin(){
   setIsLoggedin(!IsLoggedin);
  }
  return (
    <>
      <h1>Conditional Rendering</h1>
      <button onClick={toggleLogin}>{IsLoggedin ? "Logout" : "Login"}</button>
      {IsLoggedin ?  <DashComp/> : <LoginComp/>}
     
      

    </>
  )
}

export default App
