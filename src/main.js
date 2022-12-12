import { sortData } from './data.js';
import data from './data/pokemon/pokemon.js';

// TRAER ELEMENTOS DESDE HTML
// Traer contenedor de tarjetas Pokemon desde HTML
let container = document.getElementById("cardsContainer");
// Traer contenedor de botones de tipo y numero de creación
let containerBtnType = document.getElementById("btnContainer_imgToType");
let containerBtnNum = document.getElementById("btnContainer_imgToNum");


// OBTENER PARTE DE LA DATA
let loadData = data.pokemon.map(function(datum){
    return {
        img: datum.img,
        name: datum.name,
        num: datum.num,
        type: datum.type,
        generation: datum.generation
    }
})

// MOSTRAR TODOS LOS POKEMONES EN TARJETAS
function showData(loadData){
    container.innerHTML = "";
    loadData.forEach((data) => {
        // Crear tarjeta (contenedor de datos) de cada pokemon
        let card = document.createElement("div");
        // Añadir/incluir todos los item de la card Pokemon
        card.innerHTML = `
            <div id="container-pokeImage" class="pokeData">
                <img src="${data.img}"/>
            </div>
            <div id="container-pokeNum_Name" class="pokeData">
                <h3 id="pokeName">${data.name}</h3>
                <h3 id="pokeNum">${data.num}</h3>
            </div>
            <div id="container-pokeType" class="pokeData">
                <h5 id="pokeType">${data.type}</h5>
            </div>
            <div id="container-pokeGeneration" class="pokeData">
                <h5 id="pokeGenerationName">${data.generation.name}</h5>
                <h5 id="pokeGenerationNum">${data.generation.num}</h5>
            </div>`
        // Adjuntar/incluir "card" dentro de "container";
        container.append(card);
    })
}

// Llamamos a la funcion showData para mostrar los pokemones por defecto
showData(loadData);

// ORDENAR POKEMONS POR TIPO Y NUMERO DE CREACION
// Traer botones desde HTML y agregar escuchador de eventos
let btnType = document.getElementById("btnType");
// btnType.addEventListener("click", (e)=>{choiceOrder(e, loadData)});
btnType.addEventListener("click", (e)=>{configureSortOrder(e, loadData)});
let btnNum = document.getElementById("btnNum");
btnNum.addEventListener("click", (e)=>{configureSortOrder(e, loadData)});


// variable para definir orden (ascendente/descendente)
let firstClick = true; 
function configureSortOrder(e, loadData) {
    let sortBy;
    if(e.target.id == "btnType") {
        sortBy = "type";
        containerBtnType.innerHTML = "";
        // Definir orden ascendente o descendente
        let sortOrder = firstClick ? (
            containerBtnType.innerHTML = `<img src="./img/icons8-up-arrow-64.png">`, 
            firstClick = false,
            "upward"
        ) : (
            containerBtnType.innerHTML = `<img src="./img/icons8-down-arrow-64.png">`, 
            firstClick = true,
            "downward"
        );
        sortData(loadData, sortBy, sortOrder);
    }
    if(e.target.id == "btnNum") {
        sortBy = "number";
        containerBtnNum.innerHTML = "";
        // Definir orden ascendente o descendente
        let sortOrder = firstClick ? (
            containerBtnNum.innerHTML = `<img src="./img/icons8-up-arrow-64.png">`, 
            firstClick = false,
            "upward"
        ) : (
            containerBtnNum.innerHTML = `<img src="./img/icons8-down-arrow-64.png">`, 
            firstClick = true,
            "downward"
        );
        sortData(loadData, sortBy, sortOrder);
    }
}

export { showData };