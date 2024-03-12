import React from 'react'
import classes from './HobbyLinks.module.css'

export default function HobbyLinks() {

let hobbyLinks = ["https://www.gardendesign.com/how-to/",
                "https://www.thesprucecrafts.com/photography-4162939"]

return (
    <div>
         <h3 className = {classes.hobbyHeading}>My Hobbies</h3>
        <ul>
            <li className={classes.hobbyText}><a href = {hobbyLinks[0]}>Gardening</a></li>
            <li className={classes.hobbyText}><a href = {hobbyLinks[1]}>Photography</a></li>
        </ul>
    </div>
  )
}
