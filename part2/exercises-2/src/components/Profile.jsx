import './styles.css';
import oceans from './oceans.json'
import Button from './Button';


function Profile()
{
   const listItem = oceans.map(ocean=>(
      <div key={ocean.id} className={ocean.fishCheck === 'true' ?  'isAFish' : 'profile'}>
         <img src={ocean.image} alt={ocean.name} className='img'/>
         <h2>{ocean.name}</h2>
         <h3>Facts</h3>
         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact1}</li>
         </ul>
         <Button />
      </div>
   ))


   return(
      <>
         {listItem}
      </>  
   );
}

export default Profile;