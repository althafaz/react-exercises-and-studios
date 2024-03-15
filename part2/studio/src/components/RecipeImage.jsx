import recipedata from "./recipe.json";


function RecipeImage() {

  return (<div>
    <img src={recipedata[0].recipeImage} alt={recipedata[0].name} className='recipeImage'></img>
  </div>)
  
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
