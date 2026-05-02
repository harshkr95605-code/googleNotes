import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react';

function App() {

  function saveName(prevState,formData){
   const name = formData.get("name");
    return `Hello ${name}`;
  }
  const [message, formAction ,isPending] = React.useActionState(saveName,
    ""
  )

  return (
    <>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter your name"/>
       <button type="Submit">Greet</button>
          {message}
          {isPending ? "Loading..." : ""}
      </form>
       
    </>
  )
}

export default App
