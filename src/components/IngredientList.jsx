import { useState } from 'react';
import { availableIngredients } from "../App.jsx"

console.log({availableIngredients})

const IngredientList = ({ availableIngredients, addToBurger }) => {
const [availableIngredientList, setAvailableIngredientList] = useState(availableIngredients) 

    return <ul>
        {availableIngredientList.map((ingredient, index) => (
<li key={index} style={{ backgroundColor: ingredient.color}}>
     {ingredient.name} 
     <button>+</button>
</li>
        ))}
    </ul>;
  };
  
  export default IngredientList;