import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [city, setCity] = useState("")
  const [weather,setWeather] = useState({
    temperature: "",
    windSpeed:"",
  })
   const Api_Key = '586c94ac71be425b63747a90fcd9f654';
  const Api = ('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}');
   function getweather(e){
    e.preventDefault()
  // console.log("function Triggered");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
  ).then((res)=>res.json())
  .then((resp)=>
     setWeather({
      temperature:`${resp.main.temp}`-273 ,
      windSpeed:`${resp.wind.speed} m/s`,
     })
  )

   }
  return (
    <>
    <form action="" onSubmit={getweather}>
      <h1>Weather foreCast</h1>
      <input type="text" placeholder="Enter your city" onChange={(e)=>setCity(e.target.value)}/>
       <button type="submit">Get Weather</button>
       <div> Temperature: {weather.temperature}</div>
       <div> WindSpeed: {weather.windSpeed}</div>
       </form>
      
    </>
  )
}

export default App
