import recipedata from "./recipe.json";

function IngredientList() {
    return (
      <div>
        <h3>Ingredients</h3>
        <ul>
          {recipedata[0].ingredients.map((ingredient,idx)=>(<li key={idx}>{ingredient}</li>))}
        </ul>
      </div>
    )
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 