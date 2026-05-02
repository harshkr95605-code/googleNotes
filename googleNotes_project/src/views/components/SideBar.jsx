import React from 'react'
import "../../assets/styles/sidebar.css"
import { useLocation, useNavigate } from 'react-router';
import { useEffect,useState } from 'react';


    const menuItems = [
        {icons: <i className="fa-regular fa-lightbulb"></i>,
           label: "Notes",
           id:"notes"
          },
         {icons: <i className="fa-regular fa-bell"></i>,
           label: "Archieve",
           id:"achieve"
          },
         {icons: <i className="fa-solid fa-trash"></i>,
           label: "Trash",
           id:"trash"
          },
];

const mapper = {
  "/":"notes",
  "/archieve":"archieve",
  "/trash":"trash",

}
const SideBar = () => {
  const navigate =useNavigate();
  const location =useLocation();
  const [activeTab,setActiveTab] = useState("notes"); 
  useEffect(()=>{
    setActiveTab(mapper[location.pathname]);
  },[location.pathname])

console.log(activeTab);
const handleNavigation = (type)=>{
  if(type==="notes"){
    navigate("/");
  }
  if(type==="archieve"){
    navigate("/archieve");
  }
  if(type==="trash"){
    navigate("/trash")
  }
}
  return (
    <div className="sidebarContentContainer">
      {menuItems?.map((item,index)=>(
        <div className={ `menuItems ${activeTab===item.id?  'active':""}`}
         key={index}
         onClick={()=>handleNavigation(item?.label.toLowerCase())}
         >
            <div className="menuIcon">{item?.icons}</div>
               <div className="menuLabel">{item?.label}</div>
        </div>
      ))}
    </div>
  )
}

export default SideBar
