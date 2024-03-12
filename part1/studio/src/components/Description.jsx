import React from 'react'
import styles from './Description.module.css'

 function RecipeAuthor() {
    let authorLink = 'https://www.pinterest.com/sallysbakeblog/';
    let authorPhoto = 'https://i.pinimg.com/280x280_RS/e6/fe/0f/e6fe0f60241618457b4f0e95e4842859.jpg';
    let authorName = 'Sally McKenney';
  return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Sally McKenney is a professional food photographer, cookbook author, and baker" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Sally's baking addiction</a> 
           </div>
        </div>
     );
}


class RecipeDescription  extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Homemade Artisan Bread</h1>
                    <p>When it comes to bread, the term “artisan” doesn’t mean 1 particular thing. But generally, artisan bread is homemade, fresh, crusty, and deliciously rustic looking.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}


export default RecipeDescription;
