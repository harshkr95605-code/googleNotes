import React from 'react'
import { forwardRef } from 'react'
function Test(_,ref) {
  return (
    <div ref={ref}>
      <h2 >Test COmponent</h2>
      <button>ABcd</button>
    </div>
  )
}

export default forwardRef(Test)
