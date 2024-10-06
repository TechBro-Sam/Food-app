import { useState } from 'react'
import './FoodItem.css'
const FoodItem = ({food,setFoodId}) => {
const [asap,setAsap] = useState("")
    return(
        <div className='itemContainer'>
            <img src={food.image} alt={food.title}  className='itemImg'/>
       <div className="itemContain">
         <p className='itemName'>{food.title}</p>
        
       </div>
       <div className="btncontainer">
        <button 
        onClick={() =>{
            setFoodId(food.id)
            setAsap(food.id)
        }}
        className='itemBtn'>
            View Recipe
            </button>
            
            </div>
       
        </div>
    )
}
export default FoodItem