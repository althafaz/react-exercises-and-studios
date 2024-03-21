import {useState} from 'react'
import data from '../data.json'

export default function MyProjects() {
    
    const [index, setIndex] = useState(0)

    const projectsList = data['Projects']

    const displayItems = (index) => {
        const el = projectsList[index]
        return (
            <li key={index}>
                <div>
                    <h3>{el.name}</h3>
                    <p>{el.location}</p>
                    <img src={el.photoUrl} alt={el.alt}  width={600}/>
                </div>
            </li>
        )
    }

    const handleClick = () =>{
        (index < data['Projects'].length-1) ? setIndex(index+1) : setIndex(0)
    }

    console.log(index, projectsList[index])
    return (
    <div>
        <button onClick={()=>handleClick()}>Next</button>
        <ul>
            {displayItems(index)}
        </ul>
    </div>
  )
}
