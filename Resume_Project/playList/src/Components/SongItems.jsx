import React from 'react'

function SongItems({title,artist,image,id}) {
  return (

        <div style={{
            display:"flex",
            alignItems:"center",
            border:"1px solid black",
            padding:"10px",
            borderRadius:"5px",
            marginBottom:"10px",
            background:"Black",
        

        }}>

        
      <p>{id}</p>
      <img 
      src={image} 
      alt=""
      style={{
        height:"60px",
        width:"50px",
        marginLeft:"10px",
      }}
      />
      <div style={{
        color:"white",
        border:"1px solid black",
        borderRadius:"5px",
        marginLeft:"30px",
        padding:"10px",
      }}>
      <b>{title}</b>
      <p>{artist}</p>
      </div>
      
    </div>
  )
}

export default SongItems
