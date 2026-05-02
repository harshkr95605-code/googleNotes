import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RecipeForm from './components/RecipeForm'
import RecipeList from './components/RecipeList'


function App() {
  const [recipes,setRecipes] = useState([])

  const addRecipe =(recipe)=>{
    setRecipes((prev)=>[...prev,recipe]);
  }

  const removeRecipe=(index)=>{
    setRecipes((prev) => prev.filter((_,i)=> i !==index));
  }

  return (
    <>
      <h1>Recipe App 🍽️</h1>
      <p>Discover and share your favorite recipes with our app! 🍳🍰</p> 
      

       <RecipeList recipes={recipes} onRemove={removeRecipe}/>  
        <RecipeForm onAdd={addRecipe}/> 
    </>
  )
}

export default App
