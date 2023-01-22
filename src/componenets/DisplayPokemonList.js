import React,{useState,useEffect} from "react";
import Card from "./Card";
import Axios from "axios";
import './DisplayPokemonList.css'
const DisplayPokemonList=(props)=>{

let start=20;
const[pokeDataURL,setPokeDataURL]=useState(`https://pokeapi.co/api/v2/pokemon?${start}`);
const[pokeData,setPokeData]=useState('');


const[limit,setLimited]=useState(50);

const increaseLimit=()=>{
  let arrayTest=[];
let i=21

let newLimit=limit+20 ;
 setLimited(newLimit);
do{
  i++;
  arrayTest.push(i);
  console.log(i);
}while(i<=limit)

//console.log(limit);

/*for(let i=21;i<=limit;start=i++){
arrayTest.push(i);
}*/
const last=arrayTest.pop()
//console.log(last)
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
            type:response.data.types[0].type.name,
            number:response.data.id
          }
        ;
        // console.log('toreturn: ' + JSON.stringify(toreturn));
        return toreturn;
    });

    const toret = await prom;
    // console.log("toret = " + JSON.stringify(toret));
    return toret; 
    
  };

  
 
const pokemonSelected=(name)=>{
props.select(name);
}

//console.log(pokeData);
//<button onClick={increaseLimit}>Increase</button>

return(
    <div className="DisplayPokemonList">
        <div className="scroll-div">
            <div className="scroll-object">
                <Card className={`item${props.id}`} data={pokeData} select={pokemonSelected}></Card>
            </div>
             <button id="load-more" onClick={increaseLimit}>Load More Pokemon...</button>
        </div>
    </div>
)
}

export default DisplayPokemonList;