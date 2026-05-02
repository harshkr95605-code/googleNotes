import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { z } from "zod"

const schema  = z.object({
   name: z.string().min(1,'Name is Required'),
   email: z.string().email("Invalid email"),
   phone: z.string().regex(/^\d{10}$/,'phone number has to be of 10 digits')
});
 

function App() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [error,setError] = useState({});
    
 function handleclick(e){
  e.preventDefault();
  const result = schema.safeParse({name,email,phone});
  console.log(result);
  if(result.success){
    alert('Form has been submitted');
    console.log(result.data);
  }
  else{
    const feilderror ={};
    result.error.issues.forEach((err)=>{
      feilderror[err.path[0]]=err.message
    });
    setError(feilderror);
  }
 }
  return (
    <>
     <form onSubmit={handleclick}>
      <input type="text" 
      placeholder="name" 
      value={name} 
      onChange={(e)=>setName(e.target.value)}/>
         <br/>
         {error.name && <p style={{color:"red"}}>{error.name}</p>}
          <input type="email" 
      placeholder="Email" 
      value={email} 
      onChange={(e)=>setEmail(e.target.value)}/>
       <br/>
         {error.email && <p style={{color:"red"}}>{error.email}</p>}
          <input type="number" 
      placeholder="Number" 
      value={phone} 
      onChange={(e)=>setPhone(e.target.value)}/>
      <br/>
        {error.phone && <p style={{color:"red"}}>{error.phone}</p>}
      <button type="submit">submit</button>
     </form>
    </>
  )
}

export default App
