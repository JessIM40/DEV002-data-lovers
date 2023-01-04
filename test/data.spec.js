import { sortData, filterData, calculateData} from '../src/data.js';

const data = [
  { num: "001", name: "bulbasaur", type: ["grass", "poison"] },
  { num: "005", name: "charmeleon", type: ["fire"] },
  { num: "007", name: "squirtle", type: ["water"] },
  { num: "043", name: "oddish", type: ["grass", "poison"] },
  { num: "046", name: "paras", type: ["bug", "grass"] },
  { num: "050", name: "diglett", type: ["ground"] },
  { num: "071", name: "victreebel", type: ["grass", "poison"] },
  { num: "138", name: "omanyte", type: ["rock", "water"] },
  { num: "152", name: "chikorita", type: ["grass"] }
];

//Testeo de la función Ordenar "sortData"------------------------------------------
describe("Pruebas para función sortData", () => {
  it("Es una función", () => {
    expect(typeof sortData).toBe("function");
  })
  it("Debería retornar data ordenada de la A-Z por tipo (type)", () => {
    const resultAsc = [
      { num: "046", name: "paras", type: ["bug", "grass"] },
      { num: "005", name: "charmeleon", type: ["fire"] },
      { num: "001", name: "bulbasaur", type: ["grass", "poison"] },
      { num: "043", name: "oddish", type: ["grass", "poison"] },
      { num: "071", name: "victreebel", type: ["grass", "poison"] },
      { num: "152", name: "chikorita", type: ["grass"] },
      { num: "050", name: "diglett", type: ["ground"] },
      { num: "138", name: "omanyte", type: ["rock", "water"] },
      { num: "007", name: "squirtle", type: ["water"] }
    ];
    expect(sortData(data, "type", "upward")).toEqual(resultAsc);
  })
  it("Debería retornar data ordenada de la Z-A por tipo (type)", () => {
    const resultDesc = [
      { num: "007", name: "squirtle", type: ["water"] },
      { num: "138", name: "omanyte", type: ["rock", "water"] },
      { num: "050", name: "diglett", type: ["ground"] },
      { num: "001", name: "bulbasaur", type: ["grass", "poison"] },
      { num: "043", name: "oddish", type: ["grass", "poison"] },
      { num: "071", name: "victreebel", type: ["grass", "poison"] },
      { num: "152", name: "chikorita", type: ["grass"] },
      { num: "005", name: "charmeleon", type: ["fire"] },
      { num: "046", name: "paras", type: ["bug", "grass"] }
    ];
    expect(sortData(data, "type", "downward")).toEqual(resultDesc);
  })
  it("Debería retornar la data ordenada de forma ascendente (251-0) por número (number)", () => {
    const resultAsc = [
      { num: "001", name: "bulbasaur", type: ["grass", "poison"] },
      { num: "005", name: "charmeleon", type: ["fire"] },
      { num: "007", name: "squirtle", type: ["water"] },
      { num: "043", name: "oddish", type: ["grass", "poison"] },
      { num: "046", name: "paras", type: ["bug", "grass"] },
      { num: "050", name: "diglett", type: ["ground"] },
      { num: "071", name: "victreebel", type: ["grass", "poison"] },
      { num: "138", name: "omanyte", type: ["rock", "water"] },
      { num: "152", name: "chikorita", type: ["grass"] }    
    ];
    expect(sortData(data, "number", "upward")).toEqual(resultAsc);
  })
  it("Debería retornar la data ordenada de forma descendente (251-0) por número (number)", () => {
    const resultDesc = [
      { num: "152", name: "chikorita", type: ["grass"] },
      { num: "138", name: "omanyte", type: ["rock", "water"] },
      { num: "071", name: "victreebel", type: ["grass", "poison"] },
      { num: "050", name: "diglett", type: ["ground"] },
      { num: "046", name: "paras", type: ["bug", "grass"] },
      { num: "043", name: "oddish", type: ["grass", "poison"] },
      { num: "007", name: "squirtle", type: ["water"] },
      { num: "005", name: "charmeleon", type: ["fire"] },
      { num: "001", name: "bulbasaur", type: ["grass", "poison"] }      
    ];
    expect(sortData(data, "number", "downward")).toEqual(resultDesc);
  })
});


//Testeo de la función filtrar "filterData"------------------------------------------
describe("Pruebas de la función filterData", () => {
  it("Es una función", () => {
    expect(typeof filterData).toBe("function");
  })
  it("Debería retornar la data filtrada conteniendo sólo pokemons de tipo planta (Type Grass)", () => {
    const dataFiltered = [
      { num: "152", name: "chikorita", type: ["grass"] },
      { num: "071", name: "victreebel", type: ["grass", "poison"] },
      { num: "043", name: "oddish", type: ["grass", "poison"] },
      { num: "001", name: "bulbasaur", type: ["grass", "poison"] } 
    ];
    expect(filterData("grass", data)).toEqual(dataFiltered);
  })
  it("Debería retornar la cantidad de 4, que son los elementos de la data filtrada", () => {
    expect(filterData("grass", data).length).toEqual(4);
  })
});

//Testeo de la función calcular "calculateData"------------------------------------------
describe("Pruebas de la función calculateData", () => {
  it("Es una función", () => {
    expect(typeof calculateData).toBe("function");
  })
  it("Debería retornar el numero de elementos de la data filtrada", () => {
    expect(calculateData(data)).toEqual(9);
  })
});