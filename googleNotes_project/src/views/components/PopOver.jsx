import React, { useEffect, useState } from 'react'
import "../../assets/styles/popover.css"
const colors= [
  {
    id:"#faafa8",
    value:"#faafa8"
    
  },
    {
    id:"#f39f71",
    value:"#f39f76"
    
  },
    {
    id:"#fff8b2",
    value:"#fff8b8"
    
  },
    {
    id:"#e2f6d3",
    value:"#e2f6d3"
    
  },
    {
    id:"#b4ddd4",
    value:"#b4ddd3"
    
  },
  {
    id:"#d4e4e5",
    value:"#d4e4ed"
    
  },
  {
    id:"#aeccd6",
    value:"#aeccdc",
  },
  {
    id:"#faafa7",
    value:"#faafa8"
    
  },
    {
    id:"#f39f78",
    value:"#f39f76"
    
  },
    {
    id:"#fff8b9",
    value:"#fff8b8"
    
  },
    {
    id:"#e2f6d11",
    value:"#e2f6d3"
    
  },

   
];

const backgroundImage = [
  {
    id:"1",
    value:"https:/www.gstatic.com/keep/backgrounds/grocery_light_thumb_0615.svg",
  },
   {
    id:"2",
    value:"https:/www.gstatic.com/keep/backgrounds/travel_light_thumb_0615.svg",
  },
   {
    id:"3",
    value:"https:/www.gstatic.com/keep/backgrounds/food_light_thumb_0615.svg",
  },
   {
    id:"4",
    value:"https:/www.gstatic.com/keep/backgrounds/celebration_light_thumb_0715.svg",
  },
   {
    id:"5",
    value:"https:/www.gstatic.com/keep/backgrounds/recipe_light_thumb_0615.svg",
  },
   {
    id:"6",
    value:"https:/www.gstatic.com/keep/backgrounds/grocery_light_thumb_0615.svg",
  },
   {
    id:"7",
    value:"https:/www.gstatic.com/keep/backgrounds/travel_light_thumb_0615.svg",
  },
   {
    id:"8",
    value:"https:/www.gstatic.com/keep/backgrounds/food_light_thumb_0615.svg",
  },
   {
    id:"9",
    value:"https:/www.gstatic.com/keep/backgrounds/celebration_light_thumb_0715.svg",
  },
   {
    id:"10",
    value:"https:/www.gstatic.com/keep/backgrounds/grocery_light_thumb_0615.svg",
  },
   {
    id:"11",
    value:"https:/www.gstatic.com/keep/backgrounds/recipe_light_thumb_0615.svg",
  },
]
const BackgroundColorComponent=({bgColor,active,onClick})=>{
  return <div className="backgroundColorComponent" 
  style={{ backgroundColor: bgColor ,border: active ? "1px solid rgb(161,66,244)": ""}}
  onClick={onClick}
  ></div>
}

const BackgroundImageComponent=({bgImage,active,onClick})=>{
  return <div className="backgroundImageComponent" 
  onClick={onClick}
  style={{ backgroundImage: `url(${bgImage})` ,border: active ? "1px solid rgb(161,66,244)": ""}}
  ></div>
}

const initialstate={
  backgroundImage:null,
  backgroundColor:null,
}
const PopOver=({
  open,
  onClose,
  handlebackgroundOptionChange,
  resetCompleteComponent,
    handleResetChanges, 
     customOuterContainerStyles = {},
     activeBackgroundColor,
     activeBackgroundImage,
}) => {

  const [info,setInfo] = useState(initialstate);
  useEffect(()=>{
   setInfo((prev)=>({
    ...prev,
    backgroundColor: activeBackgroundColor,
    backgroundImage: activeBackgroundImage,
   }))
  },[  activeBackgroundColor,activeBackgroundImage,])
  useEffect(()=>{
    if(resetCompleteComponent){
      setInfo(initialstate);
        handleResetChanges(false)
    }
  },[resetCompleteComponent])

  const handleBackgroundColorClick=(color)=>{
 setInfo((prev)=>({
    ...prev,
    backgroundColor: color,
   }));
   handlebackgroundOptionChange("activeBackgroundColor",color)
  };
  const handleBackgroundImageClick=(image)=>{
   setInfo((prev)=>({
    ...prev,
    backgroundImage: image,
   }));
   handlebackgroundOptionChange("activeBackgroundImage",image)
  };
  return (
    open && (
        <>
        <div className='popoverOverlay' onClick={()=>  onClose(false) }></div>
        <div className="popoverParentContainer" style={{... customOuterContainerStyles}}>
            <div className='backgroundColorContainer'>
              <div className="slashDrop" style={{
                borderColor: info?.backgroundColor===null ?"rgb(161,66,244)":"" 
              }}
              onClick={()=>handleBackgroundColorClick(null)}
              >
                <i class="fa-solid fa-droplet-slash"></i>
              </div>
              {colors?.map((ele,index)=> (
            <BackgroundColorComponent 
            key={index}  
            bgColor={ele?.value} 
            active={info?.backgroundColor?.id===ele?.id}
            onClick={()=>handleBackgroundColorClick(ele)}
            />

              ))}
            </div>
            <div className='backgroundImageContainer'>
               <div className="slashImage" style={{
                borderColor:info?.backgroundImage===null ?"rgb(142, 55, 218)":"" ,
              }}
                            onClick={()=>handleBackgroundImageClick(null)}

              >
               <img src="https://static.vecteezy.com/system/resources/previews/017/756/699/non_2x/gallery-slash-icon-simple-design-vector.jpg"/>
              </div>
                {backgroundImage?.map((ele,index)=> (
            <BackgroundImageComponent 
            key={index} 
            bgImage={ele?.value} 
            active={info?.backgroundImage?.id===ele?.id}
             onClick={()=>handleBackgroundImageClick(ele)}
            />

              ))}
            </div>
        </div>
        </>
    )
  )
}

export default PopOver
