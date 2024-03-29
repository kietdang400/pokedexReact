import React,{useState,useRef} from "react"
import TypeContainer from "./typeContainer";
import './DisplayPokemon.css';
import garadosMouth from "../IMG/pokemon background2.jpg";
import pokemonBackground4 from "../IMG/pokemon background4.jpg";
import background from '../IMG/pokemon background.jpg';
import QuestionMark from '../IMG/Questionmark.png';
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

const windowWidth = useRef(window.innerWidth);

const randomPokemon=()=>{
props.random(Math.floor(Math.random()*1000))
}
    return(
    <div className="DisplayPokemon">
<h1 className="name">{props.name!==undefined?props.name:"N/A"}</h1>
{props.name===undefined?<button onClick={randomPokemon} style={{backgroundColor:"transparent", border:"0px"}}><img id="questionMark" src={QuestionMark} alt="QuestionMark"></img></button>:<img src={showFront?props.imgFront:props.imgBack} onMouseEnter={pokemonImgBack} onMouseLeave={pokemonImgFront} style={{backgroundColor:`${backgroundColor}`}}></img>}
{typeArray.map((type)=>(<TypeContainer type={type}></TypeContainer>))}
<div><span className='weight'><u>weight:{props.weight}lbs</u></span> <span className='height'><u>height:{props.height*10}cm</u></span></div>

{window.innerWidth>=1199?
<div id="baseStat">
<h4 className="label">hp</h4>
<div ><progress id='hp'max="100" value={Math.floor((props.hp/100)*100)}></progress></div>
<h4 className="label">atk</h4>
<div ><progress id='atk'max="100" value={Math.floor((props.ATK/100)*100)}></progress></div>
<h4 className="label">def</h4>
<div ><progress id='def' max="100" value={Math.floor((props.def/100)*100)}></progress></div>
<h4 className="label">spd</h4>
<div ><progress max="100" id='spd' value={Math.floor((props.spd/100)*100)}></progress></div>
</div>:toggleBaseStat&&
<div id="baseStat">
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