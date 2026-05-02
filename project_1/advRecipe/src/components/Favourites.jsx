import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
function favourites() {
    const [favs,setFavs] = useState([]);
    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem("favs"));
        setFavs(stored);
    },[])
  return (
    <div>
      {favs.length===0 && <p>No favorite recipes found.</p>}
      <ul>
        {favs.map((id)=>{
            return (
                <li key={id}>
                    <Link to={`/recipe/${id}`}>Recipe {id}</Link>
                </li>
            );
        })}
      </ul>
    </div>
  )
}

export default favourites
