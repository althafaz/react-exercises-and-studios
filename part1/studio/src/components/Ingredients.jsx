import styles from './Ingredients.module.css'

export default function RecipeIngredients () {
    const ingredientsArr = ['Bread flour','Instant Yeast','Salt','Water','Cornmeal']
    return(
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                {ingredientsArr.map((el,idx)=>{
                    return (
                    <li key={idx}>{el}</li>
                    )
               })}
            </ul>
        </div>
    )
}