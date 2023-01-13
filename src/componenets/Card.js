import React from "react"
const Card=({ data })=>{
    
    console.log('type of data is: ' + typeof data);
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
           // console.log("data: ", JSON.stringify(data[pokeKey]));
            let pokemon = data[pokeKey];
           // console.log("name " + pokemon.name );
            arr.push(
                <div className="card" key={Math.floor(Math.random() * 1000000)}> 
                    <img src={pokemon.img}></img>
                    <h2>{pokemon.name}</h2>
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