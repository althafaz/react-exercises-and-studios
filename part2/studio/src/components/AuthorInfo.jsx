import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {

let recipeAuthorImage = <img src={recipedata[0].authorImage} alt={recipedata[0].author} className="authorImage"/>
let recipeAuthor =<div key={recipedata[0].author}>{recipedata[0].author}</div>
let recipeWebsite = <a href={recipedata[0].website} >{recipedata[0].website}</a>
  return (
    <div >
       {recipeAuthorImage}
       {recipeAuthor}
       {recipeWebsite}
    </div>
  );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 