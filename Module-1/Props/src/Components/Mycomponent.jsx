
import React from 'react'

function Mycomponent(props) {
    console.log(props);
  return (
    <div>
      <h1>My Components</h1>
      {props.array} 
      //array is inside app.jsx i.e parent and hence props is used to transfer this data from paren to chiold component.
    </div>
  )
}

export default Mycomponent
