import { sortData, configureFiltered } from './data.js';

import data from './data/pokemon/pokemon.js';


// TRAER ELEMENTOS DESDE HTML
// Traer contenedor de tarjetas Pokemon desde HTML
let container = document.getElementById("cardsContainer");
// Traer contenedor de botones de tipo y numero de creación
let containerBtnType = document.getElementById("btnOrderContainer_imgToType");
let containerBtnNum = document.getElementById("btnOrderContainer_imgToNum");

// OBTENER PARTE DE LA DATA
const loadData = data.pokemon.map(function (datum) {
    return {
        img: datum.img,
        name: datum.name,
        num: datum.num,
        type: datum.type,
        generation: datum.generation
    }
});

// MOSTRAR TODOS LOS POKEMONES EN TARJETAS
function showData(loadData) {
    container.innerHTML = "";
    loadData.forEach((item) => {
        // Crear tarjeta (contenedor de datos) de cada pokemon
        let card = document.createElement("div");
        // Añadir/incluir todos los item de la card Pokemon
        card.innerHTML = `
            <div id="container-pokeImage" class="pokeData">
                <img src="${item.img}"/>
            </div>
            <div id="container-pokeNum_Name" class="pokeData">
                <h3 id="pokeName">${item.name}</h3>
                <h3 id="pokeNum">${item.num}</h3>
            </div>
            <div id="container-pokeType" class="pokeData">
                <h5 id="pokeType">${item.type}</h5>
                
            </div>
            <div id="container-pokeGeneration" class="pokeData">
                <h5 id="pokeGenerationName">${item.generation.name}</h5>
                <h5 id="pokeGenerationNum">${item.generation.num}</h5>
            </div>`
        // <h5 id="pokeType">${item.type[1]}</h5>
        // Adjuntar/incluir "card" dentro de "container";
        container.appendChild(card);
        // console.log(item)
    })
}

// // Llamamos a la funcion showData para mostrar los pokemones por defecto
showData(loadData);

// ORDENAR POKEMONS POR TIPO Y NUMERO DE CREACION
// Traer botones desde HTML y agregar escuchador de eventos
let btnType = document.getElementById("btnOrderType");
btnType.addEventListener("click", (e) => { configureSortOrder(e, loadData) });
let btnNum = document.getElementById("btnOrderNum");
btnNum.addEventListener("click", (e) => { configureSortOrder(e, loadData) });

// variable para definir orden (ascendente/descendente)
let firstClick = true;

function configureSortOrder(e, loadData) {
    let sortBy;
    if (e.target.id == "btnOrderType") {
        sortBy = "type";
        containerBtnType.innerHTML = "";
        // Definir orden ascendente o descendente
        // condicion ? true : false;
        // let a = -3;
        // a > 3 ? alert("todo bien") : alert("todo mal");
        let sortOrder = firstClick ? (
            containerBtnType.innerHTML = `<img src="./img/icons8-collapse-arrow-100.png">`,
            firstClick = false,
            "upward"
        ) : (
            containerBtnType.innerHTML = `<img src="./img/icons8-expand-arrow-100.png">`,
            firstClick = true,
            "downward"
        );
        const newData = sortData(loadData, sortBy, sortOrder);
        // console.log(newData);
        showData (newData);
    }
    if (e.target.id == "btnOrderNum") {
        sortBy = "number";
        containerBtnNum.innerHTML = "";
        // Definir orden ascendente o descendente
        let sortOrder = firstClick ? (
            containerBtnNum.innerHTML = `<img src="./img/icons8-collapse-arrow-100.png">`,
            firstClick = false,
            "upward"
        ) : (
            containerBtnNum.innerHTML = `<img src="./img/icons8-expand-arrow-100.png">`,
            firstClick = true,
            "downward"
        );
        const newData = sortData(loadData, sortBy, sortOrder);
        // console.log(newData);
        showData (newData);
    }
}

// FILTRAR POKEMONS POR GENERACIÓN Y TIPO
// Traer elemento select desde HTML
let selectType = document.getElementById("type-select");
selectType.addEventListener("change", (e) => { showData (configureFiltered(e, loadData)) });

//MUDAR A---------------------------------------------------

// Creamos un array para la lista de opciones del select
let typePokemon = [];
for (let i = 0; i < loadData.length; i++) {
    loadData[i].type.reduce((a, e) => {
        if (!a.find(d => d == e)) {
            a.push(e)
        }
        return a;
    }, typePokemon);
}

// Agregar opciones al elemento select del HTML
typePokemon.map(function (opt) {
    selectType.innerHTML += `
    <option value="${opt}">${opt}</option>
    `
})
// console.log(typePokemon)

//--- data.js-----------------------------------------------------

/* PREGUNTAS OH:
- linea 129  main.js
- linea 6 data.js
*/



/* RETOS:
   1.- Ordenar de acuerdo a lo mostrado (guardar en una variable la ultima data mostrada, y llamarla desde cualquier funcion).

*/


// console.log(filterType);

//FILTRAR POKEMON POR GENERACIÓN:

//Llamar comoponentes del DOM------------------

// let generationSelect = document.getElementById("generation-Select");
// generationSelect.addEventListener("change", (e) => { generationFilter(e, loadData) });

// console.log(e);

//Llamar name y num de generation-----------------------

// let arrayGeneration = loadData.generation.name.map(function (datum) {
//     return {
//         generation: datum.generation
//     }
    
// })
// console.log(arrayGeneration);

//Genrar array sin duplicas-------------------
// console.log(loadData);
// console.log(loadData[0].generation.name);
// let generation_Select = [];
// for (let i = 0; i < loadData.length; i++) {
//     loadData[i].generation.name.reduce((a, e) => {
//         if (!a.find(d => d == e)) {
//             a.push(e)
//         }
//         return a;
//     }, generation_Select);
// }
// console.log(generation_Select)
// let typePokemon = [];
// for (let i = 0; i < loadData.length; i++) {
//     loadData[i].type.reduce((a, e) => {
//         if (!a.find(d => d == e)) {
//             a.push(e)
//         }
//         return a;
//     }, typePokemon);
// }

//Establecer array sin duplicas como el valor del contenido en options de select-----------

// generation_Select.map(function (opt) {
//     generationSelect.innerHTML += `
//     <option value="${opt}">${opt}</option>
//     `
// })

// //Filtrar la data usando el contenido de option.value-----------------

// function generationFilter(e, loadData) {
//     if (e.target.id == "generation-Select") {
//         let filteredGeneration = loadData.filter(item => item.generation.name == e.target.value); // filtrar por item.type[1]??? 
//         showData(filteredGeneration);
//         // console.log(item);
//     }
// }
// const filterGeneration = loadData[i].generation.name.filter (item => ); ||
