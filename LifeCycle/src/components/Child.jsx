import React from 'react'

function Child({value}) {
  return (
    <div>
        {console.log("Components has been updated")}
      {value}
    </div>
  )
}

export default Child
