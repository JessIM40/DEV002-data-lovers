
const sumar = (a, b)=>{
    return a+b;
}


function filterArray(array, elemento){
    let newArray = array.filter(elem => elem != elemento);
    return newArray;
}

const greeting = (str) => {
    if(!str) throw new Error('Argumento requerido')
    return `Hola ${str}`;
}


export { sumar, filterArray, greeting };