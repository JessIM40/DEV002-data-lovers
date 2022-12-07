// import { sortData } from './data.js';
import data from './data/pokemon/pokemon.js';


// Traer contenedor de tarjetas Pokemon desde HTML
let container = document.getElementById("cardsContainer");

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

// MOSTRAR TODOS LOS POKEMONES EN TARJETAS solo con los datos que trabajaremos
showData(loadData);
// funcion que muestra solo data con la que trabajaremos 
function showData(loadData){
    loadData.forEach((data) => {
        // Crear tarjeta (contenedor de datos) de cada pokemon
        let card = document.createElement("div");
        // Adjuntar/incluir "card" dentro de "container";
        container.append(card);
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
            </div>
        `
    })
}


// ORDENAR POKEMONS POR TIPO Y NUMERO DE CREACION
// Traer botones desde HTML y agregar escuchador de eventos
// let btnType = document.getElementById("btnType");
// btnType.addEventListener("click", (e)=>{sortData(e, loadData)});
// let btnNum = document.getElementById("btnNum");
// btnNum.addEventListener("click", ()=>{sortData(loadData)});



// function sortData (e, loadData) {
//     // Definir orden ascendente o descendente
//     let firstClick = true,
//         order = firstClick ? ("Orden Ascendente", true) : ("Orden Descendente", false);

    
//     if(e.target.id == "btnType" && order == true){
//         console.log("listo")

//         // loadData.sort(a, b)=>{
            
//         // }
//     }
//     // loadData.sort((a, b)=>{
//         // if(a.type < b.type){
//             // console.log(a.type)
//         // }
//     // })

// }
