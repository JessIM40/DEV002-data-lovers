// import { orderedData } from './data.js';
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
btnType.addEventListener("click", (e)=>{sortData(e, loadData)});
let btnNum = document.getElementById("btnNum");
btnNum.addEventListener("click", (e)=>{sortData(e, loadData)});

//orderedData.upward(loadData, sortBy, sortOrder)
// console.log(orderedData);
let firstClick = true; // variable para definir orden (ascendente/descendente)
function sortData (e, loadData) {
    if(e.target.id == "btnType") {
        // console.log("ordenar por tipo");
        containerBtnType.innerHTML = ""
        // Definir orden ascendente o descendente
        let order = firstClick ? ("Orden Ascendente", containerBtnType.innerHTML = `<img src="./img/icons8-up-arrow-64.png">`, true) : ("Orden Descendente", containerBtnType.innerHTML = `<img src="./img/icons8-down-arrow-64.png">`, false);
        // orderedData.upward();
        let orderedData = loadData.sort(function(a, b) {
            // Orden ascendente
            if(order == true){
                firstClick = false;
                let x = a.type[0].toLowerCase();
                let y = b.type[0].toLowerCase();
                if(x > y) return 1;
                if(x < y) return -1;
                return 0;
            }
            // Orden descendente
            if(order == false){
                firstClick = true;
                let x = a.type[0].toLowerCase();
                let y = b.type[0].toLowerCase();
                if(x > y) return -1;
                if(x < y) return 1;
                return 0;
            }
        });
        showData(orderedData);
    }
    if(e.target.id == "btnNum") {
        containerBtnNum.innerHTML = "";
        // Definir orden ascendente o descendente
        let order = firstClick ? ("Orden Ascendente", containerBtnNum.innerHTML = `<img src="./img/icons8-up-arrow-64.png">`, true) : ("Orden Descendente", containerBtnNum.innerHTML = `<img src="./img/icons8-down-arrow-64.png">`, false);
        let orderedData = loadData.sort(function(a, b) {
            // Orden ascendente
            if(order == true){
                firstClick = false;
                if(a.num > b.num) return 1;
                if(a.num < b.num) return -1;
                return 0;
            }
            // Orden descendente
            if(order == false){
                firstClick = true;
                if(a.num > b.num) return -1;
                if(a.num < b.num) return 1;
                return 0;
            }
        });
        showData(orderedData);
    }
}
