import { useState } from 'react';
import { availableIngredients } from "../App.jsx";

const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name} 
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;


// import { useState } from 'react';
// import { availableIngredients } from "../App.jsx"

// const IngredientList = ({ availableIngredients, addToBurger }) => {
// const [availableIngredientList, setAvailableIngredientList] = useState(availableIngredients) 

//     return <ul>
//         {availableIngredientList.map((ingredient, index) => (
// <li key={index} style={{ backgroundColor: ingredient.color}}>
//      {ingredient.name} 
//      <button>+</button>
// </li>
//         ))}
//     </ul>;
//   };
  
//   export default IngredientList;