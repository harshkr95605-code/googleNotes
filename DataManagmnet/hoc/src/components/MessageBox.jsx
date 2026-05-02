import React from 'react'

function messageBox({children}) {
    const isHappy=false;
  return (
    <div>
      {children(isHappy)}
    </div>
  )
}

export default messageBox
