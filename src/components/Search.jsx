import { useEffect, useState } from "react";
import './Search.css'
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="504f04127b3249469ed5bb9ca89ee383"
const Search = ({foodData,setFoodData}) =>{
    const [query,setQuery]=useState("Pizza")
    useEffect(()=>{
     async function fetchFood( ){
       const resp =await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
    const data = await resp.json()
    setFoodData(data.results) 
    }
    fetchFood();
    }
    ,[query])
    
    return(
        <div className="container">
            <input className="inputstyle"
            onChange={(e)=>setQuery(e.target.value)}
            type="text"
            value={query} 
            name={query}/>
        </div>
    )
}
export default Search;