import classes from './BookList.module.css'

export default function BookList() {
   let pageTitle = "The Godfather Franchise";
   let book1 = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg";
   let book2 = "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
   let book3 = "https://www.imfdb.org/images/thumb/7/75/Gf3-dvd.jpg/300px-Gf3-dvd.jpg";

   return (
      <div >
         <div className={classes.container}>
            <h3 className={classes.bookHeading}>{pageTitle}</h3>
            <ul className={classes.bookList}>
               <li><img src={book1} alt="The Godfather I" /></li>
               <li><img src={book2} alt="Nothing here II" /></li>
               <li><img src={book3} alt="Nothing here III" /></li>
            </ul>
         </div>
      </div>      
   );
}