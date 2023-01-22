import React,{useState,useEffect} from "react";
import Axios from "axios";
import Form from "./componenets/form";
import DisplayPokemonList from "./componenets/DisplayPokemonList";
import DisplayPokemon from "./componenets/DisplayPokemon";
import './App.css'
function App() {

const[getPokemon,setGetPokemon]=useState('');

//Data for Display
const[pokemonName,setPokemonName]=useState('');
const[pokemonType,setPokemonType]=useState('');
const[pokemonType2,setPokemonType2]=useState('')
const[pokemonFront,setPokemonFront]=useState('');
const[pokemonBack,setPokemonBack]=useState('');
const[hp,setHP]=useState('');
const[ATK,setATK]=useState('');
const[def,setdef]=useState('');
const[spd,setspd]=useState('');
const[weight,setWeight]=useState('');
const[height,setHeight]=useState('');
const[id,setID]=useState('')
//Data for cards

const pokemonGet=(name)=>{
  setGetPokemon(name)
};

//Form to get pokemon but also a button for the cards to pass in the pokemons name to get the data and put it in display

//display two pokemon types
useEffect(()=>{
Axios.get(`https://pokeapi.co/api/v2/pokemon/${getPokemon}`).then(async (response)=>{

setPokemonName(response.data.name);
setPokemonType(response.data.types[0].type.name);
setPokemonType2('');
//setPokemonType2(response.data.types[1].type.name);
setHeight(response.data.height)
setPokemonFront(response.data.sprites.front_default);
setPokemonBack(response.data.sprites.back_default);
setHP(response.data.stats[0].base_stat);
setWeight(response.data.weight);
setATK(response.data.stats[1].base_stat);
setdef(response.data.stats[2].base_stat);
setspd(response.data.stats[5].base_stat);
setID(response.data.id);
{response.data.types[1].type.name.length!==0&&setPokemonType2(response.data.types[1].type.name)}
}).catch((err)=>{console.log('error: ' +err);});
},[getPokemon,pokemonName,pokemonType]);





const selectedPokemon=(name)=>{
  setGetPokemon(name);
}
  


  return (
  <div className="App">
<h1 className="Title"style={{textAlign:'center'}}>Pokedex</h1>
<Form pokemon={pokemonGet}></Form>
<DisplayPokemon 
imgFront={pokemonFront} 
imgBack={pokemonBack} 
name={pokemonName} 
type={pokemonType} 
type2={pokemonType2}
hp={hp} 
ATK={ATK}
def={def}
spd={spd}
weight={weight}
height={height}>
</DisplayPokemon>
<DisplayPokemonList select={selectedPokemon} id={id}></DisplayPokemonList>
    </div>
  );
}


export default App;
