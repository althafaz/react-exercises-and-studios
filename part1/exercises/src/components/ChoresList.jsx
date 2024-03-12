import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <>
         <h1 className={classes.choresHeading}>Today's Chor</h1>
          <ol>
            <li className={classes.choresText}>Clean the Kitchen</li>
            <li className={classes.choresText}>water the Garden</li>
          </ol>
      </>
   )

}