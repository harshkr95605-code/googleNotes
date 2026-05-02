import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState("");
  const [count,setCount] = useState(0);
  function Inc(){
    setCount(count+1);
  }
    useEffect(()=>{
    fetch('https://dummyjson.com/products')
  .then((res)=>res.json())
  .then((data)=> setData(data));
  console.log('API running')   

},[count])
  
  return (
    <>
     <button onClick={Inc}>Increment</button>
     {count}
    </>
  )
}

export default App
