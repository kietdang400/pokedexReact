import React,{useState,useEffect} from "react";
import Card from "./Card";
import Axios from "axios";
const DisplayPokemonList=()=>{

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
            type:response.data.types[0].type.name,
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

return(
    <div>
<Card data={pokeData}></Card>
<button onClick={increaseLimit}>Increase</button>
    </div>
)
}

export default DisplayPokemonList;