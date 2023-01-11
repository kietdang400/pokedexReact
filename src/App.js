import React,{useState,useEffect} from "react";
import Axios from "axios";
import Form from "./componenets/form";
import PokemonList from "./componenets/PokemonList";
import Card from "./componenets/Card";
function App() {

const[getPokemon,setGetPokemon]=useState('');

//Data for Display
const[pokemonName,setPokemonName]=useState('');
const[pokemonType,setPokemonType]=useState('');
const[pokemonFront,setPokemonFront]=useState('');

//Data for cards
const[pokemonCardContent,setPokemonCardContent]=useState([]);
const pokemonGet=(name)=>{
  setGetPokemon(name)
};

//Form to get pokemon but also a button for the cards to pass in the pokemons name to get the data and put it in display

useEffect(()=>{

Axios.get(`https://pokeapi.co/api/v2/pokemon/${getPokemon}`).then(response=>{
setPokemonName(response.data.name);
setPokemonType(response.data.types[0].type.name);
setPokemonFront(response.data.sprites.front_default);});
});

const[pokeDataURL,setPokeDataURL]=useState("https://pokeapi.co/api/v2/pokemon/");
const[pokeData,setPokeData]=useState('');



 useEffect(()=>{
  Axios.get(pokeDataURL).then(response=>{response.data.results.map(pokemon=>{poke(pokemon.url)})})
},[])

const poke=(url)=>{Axios.get(url).then(response=>
{setPokeData(state=>{ return [...state, {name:response.data.name, img:response.data.sprites.front_default}]
})
})
}

//console.log(pokeData);

  return (
  <div className="App">
<Form pokemon={pokemonGet}></Form>
<img src={pokemonFront}></img>
<div>{pokemonName} {pokemonType}</div>

<Card data={pokeData}></Card>
    </div>
  );
}


export default App;
