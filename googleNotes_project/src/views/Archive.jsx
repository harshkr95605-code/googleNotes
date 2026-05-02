import React, { useMemo } from 'react'
import "../assets/styles/archive.css"
import { useSelector,useDispatch } from 'react-redux';
import NotesComponent from './components/NotesComponent';
import { useState } from 'react';
import { useCallback } from 'react';
const Archive = () =>  {
    const {notes = [],searchQuery}= useSelector((state) => state.notesStore);
    const [info,setInfo]=useState({
      editPopup:false,
      selectedNote: null,
    });
  
    const openEditPopup=useCallback((value)=>{
      setInfo((prev)=>({...prev,editPopup : true,selectedNote:value}));
    },[]);
  
      const closeEditPopup=useCallback(()=>{
      setInfo((prev)=>({...prev,editPopup: false,selectedNote:null}));
    },[]);
  const archivedata= useMemo(()=>{
       return notes
          ?.filter((ele)=>ele?.label==='archive' && 
				ele?.title.toLowercase().includes(searchQuery)?.toLowerCase);
          
    },[notes,searchQuery]);

  return (
    <div className="notesContentContainer">
				{archivedata
				?.map((ele, index) => (
          <NotesComponent key={index} data={ele} source={"archive"}/>
				))}
			</div>
  )
}

export default Archive
