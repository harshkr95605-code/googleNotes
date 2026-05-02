import { useMemo,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [add, setAdd] = useState(0);
  const [minus,setMinus] = useState(100);
function sum(){
  setAdd(add+1);
}
function subtract(){
  setMinus(minus-1);
}
// function multiply(){
//   console.log("Multiplication invoked") // this is letting functions add and minus invoked in the console even if we not render subtract function in the multiply
//   return add *10
// }
 const multiply = useMemo(
    function multiply(){
  console.log("Multiplication invoked") 
  return add *10
},
[add]
  )
  return (
    <>
      <button onClick={sum}>Click to add: {add}</button> 
      <br/>
      {multiply}
      <button onClick={subtract}>Click to subtract:{minus}</button>
    </>
  )
}

export default App
