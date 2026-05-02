import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Timer from "./components/Timer";
function App() {
  const [timers, setTimers] = useState([])
  const [nextId,setNextId] = useState(1)
const addTimer=()=>{  //another type of functions
  //Logic to add timers
  setTimers((prev)=>[...prev,nextId]); 
  setNextId((prev)=> prev + 1);
};
const removeTimer = (id) => {
  setTimers((prev)=> prev.filter((timerid) => timerid !==id));
}

  return (
    <>
       
     <button onClick={addTimer}>Add Timer</button>
    {timers.map((id)=>(
      // <Timer key={id} id= {id}/> 
      //key used to give the identity to the each timer and id={id} is sending the id to the component
      <Timer key={id} id= {id} fxn={removeTimer}/>
    ))}
    </>
  )
}

export default App

