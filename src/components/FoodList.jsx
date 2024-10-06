import FoodItem from "./FoodItem"

const FoodList = ({foodData,setFoodData,setFoodId}) =>{
    
    return(
        <>
          {
        foodData.map((food)=>(
            <FoodItem food={food} key={food.id} setFoodId={setFoodId} />
        ))
      }
        </>
    )
}
export default FoodList