
import {contextMain} from '../context';
import React,{useContext} from "react";
function ChildE() {
 const data = useContext(contextMain);
  return (
    <div>
      
      <h2>ChildE</h2>
      {data}
      {/* <contextMain.Consumer>
        {value => (
         <div>
          <h3>Coming directly from App.jsx</h3>
          {value}
         </div>
        )}
      </contextMain.Consumer> */}
    </div>
  )
}

export default ChildE
