import React from 'react'
import { z } from "zod"
import { useState, useTransition } from 'react'


const recipeSchema = z.object({
    name: z.string().min(1,"Recipe name is required"),
    ingredients: z.string().min(1,"Add more Ingrediebts "),
    time: z.number().min(1,"Cooking requires atleast 20 minutes"),

});
function RecipeForm({ onAdd }) {
    const [name,setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [time, setTime] = useState('');
    const [errors,setErrors] = useState([]);
    const [isPending,startTransition] = useTransition();

    function handleSubmit(e){
        e.preventDefault();
        const result = recipeSchema.safeParse(
           
            {name,ingredients,time: Number(time)}
        );
        if(!result.success){
           const feildError={};
            result.error.issues.forEach((err)=>{
               feildError[err.path[0]]=err.message;
            })
            setErrors(feildError);
            return;
        }

       setErrors({});

       startTransition(()=>{
        onAdd({
            name,ingredients,time: Number(time),
        });
       })
    };  
  return (
   <form onSubmit={handleSubmit}>
    <h2>Add a Recipe</h2>
    <input type="text" value={name} placeholder="Recipe name" onChange={(e)=>setName(e.target.value)}/>
    {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
    <textarea placeholder="Add Ingredients" value={ingredients} onChange={(e)=>setIngredients(e.target.value)}/>
        <p>{ingredients.length}</p>
        {errors.ingredients && <p style={{color:"red"}}>{errors.ingredients}</p>}
    <input type="number" value={time} placeholder="Cooking time in minutes" onChange={(e)=>setTime(e.target.value)}/>
    {errors.time && <p style={{color:"red"}}>{errors.time}</p>}
    <button type="submit" disabled = {isPending}
    >
        Add Recipe
      {isPending ? "Adding..." : "Add Recipe"}
        </button>
        
0   </form>
  )
}

export default RecipeForm
