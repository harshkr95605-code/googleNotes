import React, { useEffect } from 'react'
import "../../assets/styles/header.css";
import SearchBar from './SearchBar';
const Header = () => {
  useEffect(()=>{
    console.log("Header is mounted");
  },[])
  console.log("Header is getting re-render");

  return (
    <div className="headerParentContainer">
    <div className="menuBarIconContainer">
      <i class="fa-solid fa-bars"></i>
    </div>
    <img
     src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5"
     width={44}
     heigth={40}
     />
     <span className="applicationTitleText">Keep</span>
     <SearchBar/>
      
    </div>
  )
}

export default Header
