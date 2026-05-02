import React,{useContext} from 'react'
import {ThemeContext} from '../ThemeContext'
function Home() {
    const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <h2>Current Theme : {theme}</h2>
      <button onClick={toggleTheme}>
         Switch to : {theme==="ligth" ? "dark" : "light"} Mode
         </button>
    </div>
  )
}

export default Home
