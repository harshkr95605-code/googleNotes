import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [number,setNumber] = useState(0)
  function generatenum(){
   const random =Math.floor(Math.random()*100);
   console.log(random);
  //  setNumber((num)=>{
  //   setNumber(random);
  //  });  OR
  setNumber(random);
  }
  return (
    <>
    <h2> plot a random number.</h2>
    <button onClick={generatenum}>Generate</button>
    <br/>
    {number}
    </>
  )
}

export default App
