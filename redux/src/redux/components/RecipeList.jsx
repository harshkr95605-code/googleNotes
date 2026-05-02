
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchRecipes } from '../feature/recipes/recipeSlice'

  const dispatch  = useDispatch();
  const {list,status,error} = useSelector((state)=>state.recipes)

  useDispatch(()=>{
    if(status === 'idle'){
        dispatch(fetchRecipe())
    }
  },[status,dispatch])
  if(status === 'loading') return <p>Loading...</p>
  if(status==='failed') return <p>Error Loading recipes</p>
function RecipeList() {

  return (
    <div>
        <h2>Recipes</h2>
      <ul>
         <li key={recipe.id}>
            <Link to={'/recipe/${recipe.id}'}/>
            <img src={recipe.image} width="140"/>
            <p>{recipe.name}</p>
         </li>
      </ul>
    </div>
  )
}

export default RecipeList
