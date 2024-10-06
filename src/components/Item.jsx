import './Item.css'
const Item = ({items})=>{
    return <>
        <div className='itemContainers'>
            <div className="imgContainers">
             <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+ items.image} alt="img" className='imgf' />   
                </div> 
             <div className="nameContainer">
                 <div className='names'>{items.name}</div>
            <div className='amount'>{items.amount}</div>
             </div>
           
        </div>
    </>
} 
export default Item