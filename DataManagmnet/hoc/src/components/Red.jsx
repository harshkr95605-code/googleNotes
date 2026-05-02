import React from 'react'

function Red({color, children}) {
    console.log(children);
  return (
    <span style={{color:`${color !== undefined ? color : "red"}`}}>
        {children}
    </span>
  )
}

export default Red
