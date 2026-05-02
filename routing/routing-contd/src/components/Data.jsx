import React from 'react'
import { useParams } from 'react-router-dom'

function Data() {
    const params = useParams();
    console.log(params);
  return (
    <div>
      <h2>Data is lOading...</h2>
        <h3>User ID is : {params.UserID}</h3>
    </div>
  )
}

export default Data
