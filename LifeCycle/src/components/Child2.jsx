import React from 'react'
import { useEffect } from "react"

function Child2() {

    const fetchApi = async()=>{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
    };
    useEffect(()=>{
        console.log('Child2 Has been mounting');
    },[]);

    useEffect(()=>{
        const IntervalId = setInterval(fetchApi,2000);

        const cleanup = (()=>{
            console.log("Component has been UnMounted , Logging Off...");
            clearInterval(IntervalId);
        });
        return cleanup;
    })   
  return (
    <div>
      <h1>THIS IS CHILD 2</h1>

    </div>
  )
}

export default Child2
