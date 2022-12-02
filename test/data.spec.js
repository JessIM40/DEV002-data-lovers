import { example, anotherExample } from '../src/data.js';

import { sumar, filterArray, greeting } from '../src/pruebaTest.js';

describe('Pruebas para la función sumar', () => {
  it('is a function', () => {
    expect(typeof sumar).toBe('function');
  })
  // toBe => Bolean, Number, String
  it('function sumar de 1 y 2 debe dar 3', () => {
    expect(sumar(1, 2)).toBe(3);
  })
})

describe('Pruebas para la función filterArray', () => {
  it('is a function', () => {
    expect(typeof filterArray).toBe('function');
  })
  // toEqual => Arrays y Object
  it('la funcion filterArray devuelve un array', () => {
    expect(filterArray([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 5]);
  })
  // toContain => si un elemento contiene
  // not.toContain => si un elemento no contiene a otro
  it('la función filterArray no contiene un elemento específico', () => {
    expect(filterArray([1, 2, 3, 4, 5], 4)).not.toContain(4);
  })
  // toHaveLength => length de un array
  it('si el array original contiene 5 elementos, la función filter debe retornar un nuevo array con 4 elementos', () => {
    expect(filterArray([1, 2, 3, 4, 5], 4)).toHaveLength(4);
  })
})

describe('Pruebas para la función greeting', () => {
  // toMatch => Match de un string con una expresion regular
  it('toma una palagra como argumento y retorna un mensaje que la contiene', () => {
    expect(greeting('mundo')).toMatch(/mundo/);
    expect(greeting('mundo')).not.toMatch(/[0-9]/);
  })
  // toThrow => revisa si lanza un error
  it('retorna un error si se ejecuta sin argumentos', () => {
    // Escuchamos la ejecucion de la función greeting con la función flecha anónima
    // En este caso, No evaluamos un resultado de una función sino el proceso de dicha función
    expect(() => greeting()).toThrow();
  })
})





describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
