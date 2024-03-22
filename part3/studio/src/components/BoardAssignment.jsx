import { useState } from 'react';

export default function BoardAssignment () {
   const boards = ['Breakfast','Launch','Dinner'];

   const [boardName, setboardName] = useState('no boards yet!')
   const handleChange = (event) => {
      setboardName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
            {boards.map((el,idx)=><option key={idx} value={el}>{el}</option>)}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
