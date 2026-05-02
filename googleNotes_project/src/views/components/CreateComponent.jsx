import React from 'react';
import "../../assets/styles/createComponent.css";
import { useState,useCallback } from 'react';
import PopOver from './PopOver';
import { useRef } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { createNotes } from '../../redux/homeSlice';


const initialState={
  focussed: false,
        backgroundOptions: false,
        activeBackgroundColor:null,
        activeBackgroundImage:null,
        resetCompleteComponent:"false",
}

function CreateComponent() {
  const dispatch = useDispatch();
   const [info,setInfo]=useState(initialState);
    const editableRef = useRef(null);
    const editatableTitleRef = useRef(null);

    const toggleBackgroundOptions = (val) => {
      setInfo((prev)=>({...prev,backgroundOptions:val? val:!prev.backgroundOptions,

      }));
    };

    const handlebackgroundOptionChange=(type,val)=>{
      setInfo((prev)=>({...prev,[type]:val}))

    }
    const handleReset = useCallback(()=>{

      const payload={
        title: editatableTitleRef.current.innerText,
        content: editableRef.current.innerText,
        activeBackgroundColor:info?.activeBackgroundColor|| "",
        activeBackgroundImage:info?.activeBackgroundImage||"",
        label:"notes",
        pinned: "false",
        id: crypto.randomUUID(),
      };
      dispatch(createNotes(payload));


      editableRef.current.innerText = "";
      editatableTitleRef.current.innerText= "";
      setInfo({...initialState,resetCompleteComponent:true });
      editableRef.current.innerText ="";
    },[editableRef,dispatch,editatableTitleRef,info?.activeBackgroundColor,info?.activeBackgroundImage])

    const handleResetChanges= useCallback((val)=>{
  setInfo((prev)=>({...prev,resetCompleteComponent: val}))
    },[])
  return (
    <div className="createComponentParentContainer" >
      <div className="createComponentContainer"  
      style={{
        backgroundColor:info?.activeBackgroundColor?.value || "" , 
        backgroundImage:`url(${info?.activeBackgroundImage?.value})`,
      }}
      >
       {info?.focussed && (
            <div className="titleContentInputContainer"
            contentEditable="true"
            spellCheck="false"
            aria-multiline="true"
            role="textbox"
            data-placeholder='Title'
            ref={editatableTitleRef}
            >
           
        </div>
      )}
        <div 
        ref={editableRef}
            className="notesContentInputContainer"
            contentEditable="true"
            spellCheck="false"
            aria-multiline="true"
            role="textbox"
            data-placeholder='Take a note...'
            onFocus={()=>setInfo((prev)=>({...prev,focussed: true}))}
        ></div>
        {info?.focussed &&
        (<div 
          className="notesFooterContainer" 
           style={{backgroundColor:info?.activeBackgroundColor?.value || "#fff"}}>
          <div className='colorPalleteBtn' onClick={toggleBackgroundOptions}>
            <i className="fa-solid fa-palette"></i>
          </div>
          <button className="closeBtn" onClick={(handleReset)}>Close</button>
        </div>
      )}
      </div>
      <PopOver 
      open={info?.backgroundOptions} 
      onClose={toggleBackgroundOptions }
      handlebackgroundOptionChange={handlebackgroundOptionChange}
      resetCompleteComponent={info?.resetCompleteComponent}
      handleResetChanges={  handleResetChanges}
       activeBackgroundColor={info?.activeBackgroundColor}
      activeBackgroundImage={info?.activeBackgroundImage}
      />
    </div>
  )
}

export default CreateComponent
