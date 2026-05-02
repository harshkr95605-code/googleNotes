import React from 'react'

function FoodItems({image,food,size,price,quantity}) {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      border:"1px solid black",
      borderRadius:"5px",
      
      
    }}>
      <img src={image} alt=""
      style={{
        width:"20%",
        padding:"10px",
        borderRadius:"5px",
      }}
      />
 <div
 style={{
  width:"200px",
  border:"1px solid black",
  borderRadius:"7px",
  boxShadow:"4px 0 8px 0 rgba(0,0,0,0.5)",
  marginLeft:"30px"
 }}
 >
       <h2>{food}</h2>
      <h2>{size}</h2>
      <h2>{price}</h2>
      <h2>{quantity}</h2>
 </div>
    </div>
  )
}

export default FoodItems
