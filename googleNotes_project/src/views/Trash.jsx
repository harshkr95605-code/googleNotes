import React, { useMemo } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import NotesComponent from './components/NotesComponent';
import "../assets/styles/trash.css";
import { useState } from 'react';
import { useCallback } from 'react';
const Trash = () => {
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
    const trashData =useMemo(()=>{
           return notes
              ?.filter((ele)=>ele?.label==='trash' && 
            ele?.title.toLowercase().includes(searchQuery)?.toLowerCase);
              
        },[notes,searchQuery]);
  return (
    <div className="notesContentContainer">
				{trashData 
				?.map((ele, index) => (
          <NotesComponent key={index} data={ele} source={"trash"}/>
				))}
			</div>
  )
}

export default Trash
