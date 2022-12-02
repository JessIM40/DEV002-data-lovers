import { sortData, filterData } from './data.js';
import data from './data/pokemon/pokemon.js';

// MOSTRAR TODOS LOS POKEMONES EN TARJETAS
for(let i=0; i<251; i++){
    // Traer contenedor de tarjetas Pokemon desde HTML
    let container = document.getElementById("cardsContainer");
    // Crear contenedor de datos de cada pokemon
    let card = document.createElement("div");
    // Adjuntar/incluir "card" dentro de "container";
    container.append(card);
    // Añadir/incluir todos los item de la card Pokemon
    card.innerHTML = `
        <img src="${data.pokemon[i].img}"/>
        <h3 id="pokeName" class="pokeData">${data.pokemon[i].num}//${data.pokemon[i].name}</h3>
        <h5 id="pokeType" class="pokeData">${data.pokemon[i].type[0]}</h5>
        <h5 id="pokeGeneration" class="pokeData">${data.pokemon[i].generation.name}//${data.pokemon[i].generation.num}</h5>
    `
}

// Traer botones desde HTML y agregar escuchador de eventos
let btnType = document.getElementById("btnType");
btnType.addEventListener("click", sortData);
let btnNum = document.getElementById("btnNum");
btnNum.addEventListener("click", sortData);




/* <h3 id="pokeNum" class="pokeData">${data.pokemon[i].num}</h3> */

// let img = document.createElement("img");
// let name = document.createElement("h3");
// let num = document.createElement("h3");
// let type = document.createElement("h4");
// let gen = document. createElement("h4");

// Agregar atributo
// let imgAttribute = document.createAttribute("src");
// imgAttribute.value = data.pokemon[0].img;
// img.setAttributeNode(imgAttribute);

// card.append(img);
// card.append(name);

// name.append(data.pokemon[0].name);


// console.log(data.pokemon[0].generation.name);
console.log(sortData, filterData, data);