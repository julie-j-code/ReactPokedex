import React, {FunctionComponent, useEffect, useState} from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
import PokemonList from './pages/pokemon-list';
  
const App: FunctionComponent = () => {
//  const name: String = 'React';
// const[name, setName] = useState <string> ('React');
// const[pokemon] = useState <Pokemon[]> (POKEMONS);
const[pokemons, setPokemons] = useState <Pokemon[]> ([]);
useEffect (() => {
    setPokemons(POKEMONS)
},[]);
    
 return (
//   <h1>Hello, the total amount of pokemons is {pokemons.length} !</h1>
<div>
    <PokemonList/>
</div>
 )
}
  
export default App;