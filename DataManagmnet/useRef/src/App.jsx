import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useRef } from "react";
import Test from './component/Test'
function App() {
 const testref = useRef();
 const btnclicked=(()=>{
  console.log(testref.current);
 });
  return (
    <>
     <Test ref={testref}/>
     <button onClick = {btnclicked}>Console</button>
          
    </>
  )
}

export default App
