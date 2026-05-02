import React from 'react'
import RecipeItem from './RecipeItem'
function RecipeList({ recipes, onRemove }) {
  return (
    <div>
        <h3>Recipes</h3>
        {recipes.length===0 ? "No rceipes left. Please add some!" : ""}
        {recipes.map((r,index)=>(
           <RecipeItem key={index} recipes={r} OnRemove={()=>onRemove(index)}/>
        ))}

    </div>
  )
}

export default RecipeList
