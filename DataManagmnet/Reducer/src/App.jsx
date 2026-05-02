import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useReducer } from 'react'
function reducer(state,action){
  switch(action.type){
    case "increment" : return state+1;
    case "decrement" : return state-1;
  }
}
function App() {
  
  const [state,dispatch] = useReducer(reducer,0);

  function increment(){
    dispatch({ type: "increment"});
  }
  function decrement(){
    dispatch({type: "decrement"});
  }

  return (
    <>
      <button onClick={increment}>Add</button>
      {state}
      <br/>
      <button onClick={decrement}>Minus</button>
    </>
  )
}

export default App
