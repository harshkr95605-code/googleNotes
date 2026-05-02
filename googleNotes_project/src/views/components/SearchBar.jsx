import React from 'react'
import "../../assets/styles/searchBar.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const SearchBar=()=> {
    const [search,setSearch] = useState("");
    const dispatch = useDispatch();
    const handleInputOnChange =(e)=>{
        setSearch(e.target.value);
    }
    useEffect(()=>{
  dispatch(updateSearchQuery(search));
    },[search,dispatch])
    const handleReset = ()=>{
        setSearch("");
    }
  return (
    <div className="searchBarParentContainer" >
     <div className="searchBarIconContainer">
         <i className="fa-solid fa-magnifying-glass"></i>
     </div>
      <input 
      type="text"
      className="searchBarInputContainer" 
      placeholder="Search"
      value={search}
       onChange={handleInputOnChange}
      >

      </input>
      {search?.length ? (
     <div className="searchBarIconContainer"
     onClick={handleReset}
     >
          <i className="fa-solid fa-xmark"></i>
        </div>
        ):("")}
    
    
    </div>
  )
}

export default SearchBar
