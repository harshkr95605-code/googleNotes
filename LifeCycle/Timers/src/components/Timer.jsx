import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function Timer({id,fxn}) {
  const [seconds,setSeconds] = useState(0);
  useEffect(()=>{
  
    console.log(`Timer ${id} started`);
    const Interval = setInterval(()=>{
      setSeconds((prev)=> prev +   1);
    },1000);
    return() => {
      clearInterval(Interval);
      console.log(`Timer ${id} cleared`);
    };
  },[]);

  return (
    <div>
      Timer {id} : {seconds} second(s)
      <button onClick={()=>fxn(id)}>Remove Timer</button>
    </div>
  )
}

export default Timer
