import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mycomponent from './Components/Mycomponent'
import MyArray from './Components/MyArray'
const names = ["Harsh","Annu","tuutu"];
function App() {
  const [count, setCount] = useState(0)
  const arr = [1,2,3,45]
  function btn_Clicked(){
    alert('hii');
  }

  return (
    <>
  {names.map((elem,idx)=>{
    return (
    <ul> 
      <li key={idx}>{elem}</li>
    </ul>
    )
  })}
    <h1>Hii</h1>
      <Mycomponent array ={arr}/>
      <MyArray caption='Cilck before it ends!'/>
      <button onClick={btn_Clicked}>Cilck Me!</button>
    </>
  )
}

export default App
