import { sortData } from './data.js';
import data from './data/pokemon/pokemon.js';

// TRAER ELEMENTOS DESDE HTML
// Traer contenedor de tarjetas Pokemon desde HTML
let container = document.getElementById("cardsContainer");
// Traer contenedor de botones de tipo y numero de creación
let containerBtnType = document.getElementById("btnOrderContainer_imgToType");
let containerBtnNum = document.getElementById("btnOrderContainer_imgToNum");


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
        // Adjuntar/incluir "card" dentro de "container";
        container.appendChild(card);
    })
}

// Llamamos a la funcion showData para mostrar los pokemones por defecto
showData(loadData);

// ORDENAR POKEMONS POR TIPO Y NUMERO DE CREACION
// Traer botones desde HTML y agregar escuchador de eventos
let btnType = document.getElementById("btnOrderType");
btnType.addEventListener("click", (e)=>{configureSortOrder(e, loadData)});
let btnNum = document.getElementById("btnOrderNum");
btnNum.addEventListener("click", (e)=>{configureSortOrder(e, loadData)});

// variable para definir orden (ascendente/descendente)
let firstClick = true;

function configureSortOrder(e, loadData) {
    let sortBy;
    if(e.target.id == "btnOrderType") {
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
        sortData(loadData, sortBy, sortOrder);
    }
    if(e.target.id == "btnOrderNum") {
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
        sortData(loadData, sortBy, sortOrder);
    }
}

// FILTRAR POKEMONS POR GENERACIÓN Y TIPO
let btnFilterType = document.getElementById("btnFilterType");
btnFilterType.addEventListener("click", (e)=>{configureFiltered(e, loadData)});
let btnFilterNum = document.getElementById("btnFilterNum");
btnFilterNum.addEventListener("click", (e)=>{configureFiltered(e, loadData)});

function configureFiltered (e, loadData){
    console.log(e.target.id);
    console.log(loadData);
}



export { showData };