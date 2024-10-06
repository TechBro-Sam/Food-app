import { useEffect, useState } from "react"
import './FoodDetail.css'
import FoodIngredient from "./FoodIngredient"
const FoodDetail = ({foodId}) =>{
    const [food,setFood] = useState({})
   const [isLoading,setIsLoading] =useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = '504f04127b3249469ed5bb9ca89ee383'
    useEffect(()=>{
        async function fetchFood( ){
       const resp =await fetch(`${URL}?apiKey=${API_KEY}`)
       const data = await resp.json()
       console.log(data) 
       setFood(data)
       setIsLoading(false)
    }
       fetchFood();
       }
       ,[foodId])
    return(
        <div>
       <div className="recipeCard">
    <h1 className="reciprName">{food.title}</h1>
            <img src={food.image} alt="" srcset=""  className="recipeImg"/>
       <div className="recipeDetails">     
            
            <span>
                <strong>🕛{food.readyInMinutes} Minutes</strong>
            </span>
            <span>
                <strong>🧑🏼‍🤝‍🧑🏻 Serves: {food.servings}</strong>
            </span>
            <span><strong>{food.vegetarian ? " 🥕Vegetarian" : " 🍖Non-Vegeterian"}</strong></span>
            <span><strong>{food.vegan ? " 🥕Vegan" : " "}</strong></span>
       </div>
       <div>
        <span><strong>$ {food.pricePerServing} Per Serving</strong></span>
       </div>

       <div className="recipeInstr">
        <h2>Ingredient</h2>
        <FoodIngredient food={food} isLoading= {isLoading}/>
        <h2>Instruction</h2>
        <ol>
       {isLoading?<p>Loading</p>: food.analyzedInstructions[0].steps.map((step)=>(
        <li>{step.step}</li>
        ))}
       </ol>    
       </div>
        </div>
        </div>
    )
}
export default FoodDetail