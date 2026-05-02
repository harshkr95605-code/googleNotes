import React from 'react'

function RecipeItem({ recipes, OnRemove }) {
  return (
    <div 
    style={{border:"1px solid black", padding:"10px", marginBottom:"10px"}}
    >
      <h4>{recipes.name}</h4>
      <p>Ingredients: {recipes.ingredients}</p>
      <p>Cooking Time: {recipes.time} minutes</p>
      <button onClick={OnRemove}>Remove</button>
    </div>
  )
}

export default RecipeItem
