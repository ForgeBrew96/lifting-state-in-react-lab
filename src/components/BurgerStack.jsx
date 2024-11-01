import { useState } from 'react';
import { availableIngredients } from "../App.jsx"

const BurgerStack = ({ stack, removeFromBurger }) => {
    const [ingredients, setchosenIngredients] = useState([{name: '', color: ''}]) 

    return <ul>
           {chosenIngredients.map((ingredient, index) => (
<li key={index} style={{ backgroundColor: ingredient.color}}>
     {ingredient.name} 
     <button>-</button>
</li>
        ))}
    </ul>;
  };
  
  export default BurgerStack;