import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
function Recipe() {
    const { id } = useParams();
    const [meal,setMeal]=useState(null);
    const [isFav,SetIsFav]=useState(false);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setMeal(data.meals[0]);
           const favs = JSON.parse(localStorage.getItem( "favs")) || [];
            SetIsFav(favs.includes(id));
        })
    },[id])

    const toggleFav=()=>{
        const favs =JSON.parse(localStorage.getItem("favs")) || [];
        let updated;
        if(isFav){
            updated = favs.filter((x)=> x!==id);
        }
        else{
            updated = [...favs,id];
        }
        localStorage.setItem('favs',JSON.stringify(updated));
        SetIsFav(!isFav);
    }
    if(!meal) return <p>Loading...</p>
  return (
    <div style={{padding:20}}>
      <button onClick={toggleFav}>{isFav ? "Remove from favourites" : "Add to favourites"}</button>
      
      <p>
     <strong> Category: {meal.strCategory}</strong>
      </p>
      <img src={meal.strMealThumb}/>
      <h1>Instructions:{meal.strInstructions}</h1>
    </div> 
  )
}

export default Recipe
