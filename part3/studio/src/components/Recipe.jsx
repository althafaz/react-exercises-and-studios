import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.marthastewart.com/author/riley-wofford";
   let authorPhoto = "https://www.marthastewart.com/thmb/3VpFlZYrWr5vjKa19YsmYB6Ois4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/riley-wofford-2018-81632856279842519548bc607969b36f.jpg";
   let authorName = "Riley Wofford";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [' cream cheese','creamy blue cheese','Kosher salt','ground pepper'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Blue-Cheese Spread</h1>
            <p>So easy to make yet special enough for your next cocktail hour or dinner party appetizer, all you need for this Blue-Cheese Spread is two ingredients, cream cheese and a creamy blue cheese such as Roquefort. Whizz them together in the food processor to create a smooth, spreadable consistency then season with salt and pepper and you're ready to serve.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.marthastewart.com/thmb/0KzrF7XHyLy0nc3b1rH8OXUVgjo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/blue-cheese-spread-5f52tzs8k898ambf8d1d3j-0622_horiz-782ec0cc2ea946efacfb819d369ea9cd.jpgitok2PdiqftD" alt="Blue-Cheese Spread" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
