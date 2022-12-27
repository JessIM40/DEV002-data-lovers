import { sortData, configureFiltered } from '../src/data.js';

const data = [
  {
    "num": "001",
    "name": "bulbasaur",
    "type": ["grass", "poison"]
  },
  {
    "num": "005",
    "name": "charmeleon",
    "type": ["fire"]
  },
  {
    "num": "007",
    "name": "squirtle",
    "type": ["water"]
  },
  {
    "num": "071",
    "name": "victreebel",
    "type": ["grass", "poison"]
  },
  {
    "num": "050",
    "name": "diglett",
    "type": ["ground"]
  },
  {
    "num": "152",
    "name": "chikorita",
    "type": ["grass"]
  },
  {
    "num": "138",
    "name": "omanyte",
    "type": ["rock", "water"]
  },
  {
    "num": "043",
    "name": "oddish",
    "type": ["grass", "poison"]
  },
  {
    "num": "046",
    "name": "paras",
    "type": ["bug", "grass"]
  }
]

//Testeo de la función Ordenar "sortData"------------------------------------------

describe("Pruebas para función sortData", () => {
  it("Es una función", () => {
    expect(typeof sortData).toBe("function");
  })
  it("Debería retornar data ordenada de la A-Z por tipo (type)", () => {
    const result = [
      {
        "num": "046",
        "name": "paras",
        "type": ["bug", "grass"]
      },
      {
        "num": "005",
        "name": "charmeleon",
        "type": ["fire"]
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "type": ["grass", "poison"]
      },
      {
        "num": "043",
        "name": "oddish",
        "type": ["grass", "poison"]
      },
      {
        "num": "071",
        "name": "victreebel",
        "type": ["grass", "poison"]
      },
      {
        "num": "152",
        "name": "chikorita",
        "type": ["grass"]
      },
      {
        "num": "050",
        "name": "diglett",
        "type": ["ground"]
      },
      {
        "num": "138",
        "name": "omanyte",
        "type": ["rock", "water"]
      },
      {
        "num": "007",
        "name": "squirtle",
        "type": ["water"]
      }
    ];
    expect(sortData(data, "type", "upward")).toEqual(result);
  })
});

//Testeo de la función Ordenar "sortData"------------------------------------------

describe("Pruebas de la función configureFiltered", () => {
  it("Es una función", () => {
    expect(typeof configureFiltered).toBe("function");
  })
  it("Debería retornar la data filtrada conteniendo sólo pokemons de tipo planta (Type Grass)", () => {
    const dataFiltrada = [
      {
        "num": "001",
        "name": "bulbasaur",
        "type": ["grass", "poison"]
      },
      {
        "num": "043",
        "name": "oddish",
        "type": ["grass", "poison"]
      },
      {
        "num": "071",
        "name": "victreebel",
        "type": ["grass", "poison"]
      },
      {
        "num": "152",
        "name": "chikorita",
        "type": ["grass"]
      }
    ];
    expect(configureFiltered(data.type[0], data)).toEqual(dataFiltrada);
  })
});