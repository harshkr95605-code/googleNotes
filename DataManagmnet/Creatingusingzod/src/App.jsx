import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { z } from "zod"

const signupschema = z.object({
  username: z.string().min(1,'Username is required'),
  email: z.string().email("invalid email"),
  password:z.string().min(6,'password must be of 6 digits'),
  confirmPassword: z.string(),
})
.refine((data)=> data.password === data.confirmPassword,{
  message:"passwords do not match",
  path:["confirmPassword"],
});


function App(){
  const [username,setUsername] = useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [errors,setErrors]=useState({});

  const handlesubmit=(e)=>{
e.preventDefault();
const result = signupschema.safeParse({
  username,
  email,
  password,
  confirmPassword
});
console.log(result);
if(result.success){
  alert('Form has been submitted');
  console.log("user has been registered");
}
else{
  const allErrors = result.error.issues.map((err)=>err.message);
  setErrors(allErrors);
  console.log(allErrors);
 }

}
  return (
    <>
      <form onSubmit={handlesubmit}>

        <input type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        />
            <br/>           
        <input type="text" 
        placeholder="Email" 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
         />
            <br/>
            <input type="text" 
        placeholder="Password" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        />
            <br/> 
        <input type="text" 
        placeholder="Confirm Password" 
        value={confirmPassword} 
        onChange={(e)=>setConfirmPassword(e.target.value)}
        />
        <button type="submit" >Submit</button>
        {errors.length > 0 && (
          <div style={{color:"red"}}>
            <ul>
              {errors.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
            <div/>
          </div>
        )}



      </form>
    </>
  )
}

export default App
