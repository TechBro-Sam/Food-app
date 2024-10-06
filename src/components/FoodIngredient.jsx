import'./FoodIngredient.css'
import Item from './Item'
const FoodIngredient = ({food,isLoading})=>{
return(
    <>
    <div className="ingredient"> 
    { isLoading?<></>:
   
   food.extendedIngredients.map((items)=>
   <Item  items={items}/>
   )}
    </div>
    </>
)
}
export default FoodIngredient