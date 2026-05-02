import React from 'react'

function MyArray(props) {
    console.log(props);
  return (
    <div>
      <h1>Coming from MyArray Component.</h1>
      <button>{props.caption}</button>
    </div>
  )
}

export default MyArray
