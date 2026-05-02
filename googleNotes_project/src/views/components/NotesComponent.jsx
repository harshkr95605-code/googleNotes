import React, {useCallback, useEffect, useRef} from 'react'
import "../../assets/styles/notesComponent.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateNote, deleteNote } from '../../redux/homeSlice';
import pinned from "../../assets/pinned.svg"
import pin from "../../assets/pin.svg"
const NotesComponent=({data,source,onClick}) => {
  const dispatch = useDispatch();
  const {notes = []} = useSelector((state)=>state.notesStore);
  const editableTitleRef = React.useRef(null);
  const editableContentRef = useRef(null);

  useEffect(()=>{
    if(data){
      editableTitleRef.current.innerText = data?.title || "";
      editableContentRef.current.innerText = data?.content || "";
    }
  },[data]);


  const handleFooterOptions = useCallback(
    ()=>{
if (source==='notes'){
  return <>  <div className="bottomActionButtonWrapper"
             onClick={(e)=> handleActionButtonClick(e,"archive",data)}>
                <i className="fa-solid fa-box-archive"></i>
            </div>
             <div className="bottomActionButtonWrapper"
              onClick={(e)=> handleActionButtonClick(e,"trash",data)}>
                 <i className="fa-solid fa-trash"></i>
            </div></>
}
if(source==='archive'){
  return <>  <div className="bottomActionButtonWrapper"
             onClick={(e)=> handleActionButtonClick(e,"unarchive",data)}>
                <i className="fa-solid fa-box-archive"></i>
            </div>
             <div className="bottomActionButtonWrapper"
              onClick={(e)=> handleActionButtonClick(e,"trash",data)}>
                <i class="fa-solid fa-trash"></i>
            </div></>
}
if(source==='trash'){
   return <>  
     <div className="bottomActionButtonWrapper"
        onClick={(e)=> handleActionButtonClick(e,"deleteForever",data)}>
          <i className="fa-solid fa-box-archive"></i>  {/* ✅ delete forever */}
     </div>
     <div className="bottomActionButtonWrapper"
        onClick={(e)=> handleActionButtonClick(e,"restore",data)}>
        <i className="fa-solid fa-trash-arrow-up"></i>  {/* ✅ restore */}
     </div>
   </>
}
  },[source])
  const handleActionButtonClick=useCallback(
    (event,type,value)=>{
  const {id} = value;
  let index = -1;
  for(let i=0;i<notes?.length;i++){
  if(notes?.[i]?.id===id){
    index=i;
    break;
  }
  }
  if(index===-1){
    return;
  };
  const updatedNotesObj = {
    ...value,
  };
  if(type==="archive"){
    updatedNotesObj.label = "archive";
  }
   if(type==="unArchive"){
    updatedNotesObj.label = "notes";
  }
     if(type==="unarchive"){
    updatedNotesObj.label = "notes";
  }
  if(type === "restore"){
    updatedNotesObj.label = "notes";
  }
    if(type === "trash"){
    updatedNotesObj.label = "trash";
  }
  if(type==="pin"){
    updatedNotesObj.pinned = !updatedNotesObj.pinned;
  }
  if(type==="deleteForever"){
   return dispatch(deleteNote({index}));
  }
  dispatch(updateNote({index,payload:updatedNotesObj}));
  event.stopPropagation();

  },[notes])
  return (
    <div className='notesCardParentContainer'
   onClick={()=>onClick(data)}
     style={{
      backgroundColor: data?.activeBackgroundColor?.value||"",
      backgroundImage: data.activeBackgroundImage?.value ? `url(${data?.activeBackgroundImage?.value||""})`:"",
    }}>
      <div
       className="notesContentContainer" 
       ref={editableTitleRef}>
            </div>
      <div 
      className="contentContainer"
         ref={editableContentRef}>
            </div>
           {source==='notes' && (
           <div className={`pinButton ${data?.pinned?'pinned':""}`}
            onClick={(e)=> handleActionButtonClick(e,"pin",data)}>
            <img src={data?.pinned ? pinned : pin} width="25px"></img>
          </div>
          )}
            <div className='bottomActionButtonContainer' 
            >
              {handleFooterOptions(source)}
            {/* <div className="bottomActionButtonWrapper"
             onClick={()=> handleActionButtonClick("archive",data)}>
                <i className="fa-solid fa-box-archive"></i>
            </div>
             <div className="bottomActionButtonWrapper"
              onClick={()=> handleActionButtonClick("trash",data)}>
                <i class="fa-solid fa-trash"></i>
            </div> */}
            </div>
      
    </div>
  )
}

export default NotesComponent
