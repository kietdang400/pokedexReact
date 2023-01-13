import React from "react";
import './Card.css';
const Card=({ data })=>{
    

    //console.log('type of data is: ' + typeof data);
    // console.log("data: ", data);
    /*<div>
        {props.data.map((pokemon)=>{
            return(
                <div key={Math.floor(Math.random()*1000)}>
                    <img src={pokemon.img} alt={pokemon.name}></img>
                    <h2 key={pokemon.name}>{pokemon.name}</h2>
                </div>
            )
        })};
        </div>*/
    //    console.log("card log: " + props.data.name);
    
    const createDivs = function(data){

        let arr = []; 
        for(let pokeKey of Object.keys(data)){
                 let pokemon = data[pokeKey];
            let backgroundColor=''
    switch(pokemon.type){
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
           // console.log("data: ", JSON.stringify(data[pokeKey]));
       
           // console.log("name " + pokemon.name );
            arr.push(
                <div className="card" style={{backgroundColor:`${backgroundColor}`}} key={Math.floor(Math.random() * 1000000)}> 
                    <img src={pokemon.img}></img>
                    <h2>{pokemon.type}</h2>
                </div>
            );
        }
        //console.log(arr);
        return arr;
    }

;
    return(
        <div className="hi">

            {createDivs(data)}
            
        </div>
    );

};
       

export default Card;