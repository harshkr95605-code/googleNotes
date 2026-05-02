import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [celcius,setCelcius] = useState("");
    const [farenheit,setFarenheit] = useState("");
    function handlefarenheit(e){
      const value = e.target.value;
      setFarenheit(value);
      setCelcius(5/9*(value-32));
    }
       function handlecelcius(e){
          const value = e.target.value;
          setCelcius(value);
          setFarenheit(9/5*value + 32);
    }
  return (
    <>
     <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      height:"100vh",
      gap:5,
     }}>
       <h2>Temperature Controller🌡️</h2>
       <input type="number" value={farenheit} onChange={handlefarenheit} placeholder="Fahrenheit"/> 
      <input type="number" value={celcius} onChange={handlecelcius} placeholder="Celcius"/> 
     </div>
    </>
  )
}

export default App
