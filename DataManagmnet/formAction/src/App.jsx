import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useFormStatus } from "react-dom"

async function saveData(formData){
  await new Promise((resolve)=> setTimeout (resolve,2000));
  console.log("saved data", formData.get("name"));
}
function App() {
 // const [count, setCount] = useState(0)

  

  function SubmitButton (){
    const {pending}= useFormStatus();
    return(
      <button type="submit-button" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    );
  }
  return (
    <>
     <form action = {saveData}>
      <input type="text" name= " name " placeholder="Enter your name" required/>
  
      <SubmitButton/>
     </form>
    </>
  )
}

export default App
