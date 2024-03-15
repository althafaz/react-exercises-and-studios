import './styles.css';

function Button(props) {

   const onLearnMore = () =>{
      alert(`Slipsh Splash ${props.name}`)
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;