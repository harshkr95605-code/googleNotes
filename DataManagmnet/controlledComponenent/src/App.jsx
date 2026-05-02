import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [name, setName] = useState("Harsh Gupta")
  function handlesubmit(e){
    e.preventDefault();
    alert(`Form Submited ${name}`);
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
        type="text"
        value={name}
        onChange={(e)=>{
          setName(e.target.value);
        }}
        />
          <button type="submit">Submit</button>
       
      </form>
     
    </>
  )
}

export default App
