import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useEffect } from "react";
import './App.css'
import Child from "./components/Child"
import Child2 from "./components/Child2"

function App() {
  const [showChild,setShowChild] = useState(false);
  
   useEffect(()=>{
    console.log("Component Mounted");//Mpunting Phase
   },[]);
  // const [value,setValue] = useState(0);
  // useEffect(()=>{
    //Mounting Phase
  //  console.log("Componnet Mounted");
  useEffect(()=>{
    console.log("Parent Updated");
  },[showChild]);
  // },[]);
  // function fxn(){
  //  setValue(value+1);
  // }

  return (
    <>
    <div>
      <h1>UnderStanding the LifeCycle (Unmounting)</h1>
      {/* <button onClick={fxn}>Click Me</button>
      <Child value={value}/> */}
      <input type="checkbox" onChange={(e)=>
      setShowChild(  e.target.checked)
      }/>
      {showChild===true ? <Child2/>:false}

    </div>

    </>
  )
}

export default App
