import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

//Quiero mostrar los datos del Pokémon

const tarjetaPokemon = document.getElementById("tarjetaPokemon")
tarjetaPokemon.innerHTML = `
<img src="${data.pokemon[0].img}"/>
<p class="pName">${data.pokemon[0].name}</p> <p id="pNum">${data.pokemon[0].num}</p>
<p id="pType">${data.pokemon[0].type}</p>
<p class="pGeneration">${data.pokemon[0].generation.num}${data.pokemon[0].generation.name}`;
//