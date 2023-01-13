import React,{useState,useEffect} from "react";
import Axios from "axios";
import Form from "./componenets/form";
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
setPokemonFront(response.data.sprites.front_default);}).catch((err)=>{console.log('error: ' +err);});
},[getPokemon,pokemonName,pokemonType]);






let start=20;
const[pokeDataURL,setPokeDataURL]=useState(`https://pokeapi.co/api/v2/pokemon?${start}`);
const[pokeData,setPokeData]=useState('');


const[limit,setLimited]=useState(50);

const increaseLimit=()=>{
  let arrayTest=[];
let i=21

let newLimit=limit+100;
 setLimited(newLimit);
do{
  i++;
  arrayTest.push(i);
  console.log(i);
}while(i<=limit)

console.log(limit);

/*for(let i=21;i<=limit;start=i++){
arrayTest.push(i);
}*/
const last=arrayTest.pop()
console.log(last)
setPokeDataURL(`https://pokeapi.co/api/v2/pokemon?limit=${last}&offset=0`) 
}



 useEffect(()=>{
  Axios.get(pokeDataURL).then(async (response)=>{
 let pokemonData=await Promise.all(response.data.results.map(async(pokemon)=>{return await poke(pokemon.url)}));
setPokeData(pokemonData)
 });
},[pokeDataURL])

 


const poke=async (url)=>{const prom=Axios.get(url).then(response=>
{
   let toreturn = 
          {
            name: response.data.name,
            img: response.data.sprites.front_default,
          }
        ;
        // console.log('toreturn: ' + JSON.stringify(toreturn));
        return toreturn;
    });

    const toret = await prom;
    // console.log("toret = " + JSON.stringify(toret));
    return toret; 
    
  };

  
 


//console.log(pokeData);
//<button onClick={increaseLimit}>Increase</button>
  return (
  <div className="App">
<Form pokemon={pokemonGet}></Form>
<img src={pokemonFront}></img>
<div>{pokemonName} {pokemonType}</div>

<Card data={pokeData}></Card>
<button onClick={increaseLimit}>Increase</button>

    </div>
  );
}


export default App;
