import React,{useState} from "react"
import TypeContainer from "./typeContainer";
import './DisplayPokemon.css'
const DisplayPokemon=(props)=>{
//add pokemon back and hover event
//add bounce effect
const[showFront,setFront]=useState(true);
const[toggleBaseStat,setBaseStat]=useState(false)

const pokemonImgBack=()=>{
  setFront(false);
}
const pokemonImgFront=()=>{
    setFront(true);
}

let backgroundColor=''
    switch(props.type2.length>0?props.type2:props.type){
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


let typeArray=[props.type,props.type2];
    return(
    <div className="DisplayPokemon">
<h1 className="name">{props.name}</h1>
<img src={showFront?props.imgFront:props.imgBack} onMouseEnter={pokemonImgBack} onMouseLeave={pokemonImgFront} style={{backgroundColor:`${backgroundColor}`}}></img>
{typeArray.map((type)=>(<TypeContainer type={type}></TypeContainer>))}
<div><span className='weight'>weight:{props.weight}lbs</span> <span className='height'>height:{props.height*10}cm</span></div>


{toggleBaseStat&&
<div>
<h4 className="label">hp</h4>
<div ><progress id='hp'max="100" value={Math.floor((props.hp/100)*100)}></progress></div>
<h4 className="label">atk</h4>
<div ><progress id='atk'max="100" value={Math.floor((props.ATK/100)*100)}></progress></div>
<h4 className="label">def</h4>
<div ><progress id='def' max="100" value={Math.floor((props.def/100)*100)}></progress></div>
<h4 className="label">spd</h4>
<div ><progress max="100" id='spd' value={Math.floor((props.spd/100)*100)}></progress></div>
</div>
}
<button id='load-stat'onClick={()=>{setBaseStat(!toggleBaseStat)}}>{toggleBaseStat?<span>Hide Base Stat...</span>:<span>Show Base Stat...</span>}</button>
</div>
    )
}

export default DisplayPokemon