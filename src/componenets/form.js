import React,{useState} from "react";

const Form=(props)=>{

const[pokemon,setPokemon]=useState('');


  const pokemonName=(event)=>{
    setPokemon(event.target.value.toLowerCase());
  }
  const pokemonForm=(event)=>{
    event.preventDefault();
   props.pokemon(pokemon);
  }

    return(
<div className="form">
<form onSubmit={pokemonForm}>
<input type="text" placeholder="Enter Pokemon's Name" onChange={pokemonName} value={pokemon}></input>
<button type='submit'>Submit</button>
</form>
</div>
    )
}

export default Form;