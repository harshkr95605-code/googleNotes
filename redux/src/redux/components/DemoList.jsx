
import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchRecipes } from '../feature/recipes/recipeSlice';
export default function DemoList(){
    const dispatch = useDispatch();

    const {list,status} = useSelector((state)=>state.recipes);
    useEffect(()=>{
        dispatch(fetchRecipes());
    },[dispatch])

    if(status === "loading"){
        <p>Loading Recipes</p>
    }
    if(status === 'failed'){
        <p>Failed to Load Recipes</p>
    }
    
    return(
        <ul>
        {list.map((recipe)=>(
         <li key={recipe.id}>{recipe.name}</li>
        ))}
        </ul>
    )
}