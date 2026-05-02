import {useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Child from './components/child'

function App() {
 const [count, setCount] = useState(0)
 const [add,setAdd] = useState(0)
 const learning = useCallback(()=>{
//it will only rerender only when count changes
 },[count])

  return (
    <>
      
  <button onClick={()=>setAdd(add+1)}>Add : {add}</button>
  <button onClick={()=>setCount(count+1)}>Count : {count}</button>
      <Child learning={learning}/>
    </>
  )
}

export default App
