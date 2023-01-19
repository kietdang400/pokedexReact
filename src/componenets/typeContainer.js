import React from "react";
import './typeContainer.css'
const TypeContainer=(props)=>{

    let backgroundColor='';
    const color=(pokemon)=>{
switch(pokemon){
        case 'grass':
            backgroundColor='#7AC74C';
        break;
        case 'fire':
            backgroundColor='#EE8130';
        break;
        case 'ground':
            backgroundColor='#E2BF65';
        break;
        case 'rock':
            backgroundColor='#B6A136';
        break;
        case 'steel':
            backgroundColor='#B7B7CE';
        break;
        case 'ice':
            backgroundColor='#96D9D6';
        break;
        case 'electric':
            backgroundColor='#F7D02C';
        break;
        case 'dragon':
            backgroundColor='#6F35FC';
        break;
        case 'ghost':
            backgroundColor='#735797';
        break;
        case 'psychic':
            backgroundColor='#F95587';
        break;
        case 'normal':
            backgroundColor='#A8A77A';
        break;
        case 'fighting':
            backgroundColor='#C22E28';
        break;
        case 'poison':
            backgroundColor='#A33EA1';
        break;
        case 'bug':
            backgroundColor='#A6B91A';
        break;
        case 'flying':
            backgroundColor='#A98FF3';
        break;
        case 'dark':
            backgroundColor='#705746';
        break;
        case 'fairy':
            backgroundColor='#D685AD';
        break;
        case 'water':
            backgroundColor='#6390F0';
        break;
    }
    }

    color(props.type);
    color(props.type2);

return(
<div className="TypeContainer" style={{backgroundColor:`${backgroundColor}`}}>
   {props.type}
</div>
)
}

export default TypeContainer;