import { arrayColors, arrayFruits } from '../array';


describe('comprobaremos que existe un elemento', () => {
    test('contine un platano', () => {
        expect(arrayFruits()).toContain('platano');
    });

    test('no contiene uva', () => {
        expect(arrayFruits()).not.toContain('uva');
    });
});

describe('el largo o lenght de un array', () => {
    test('lenght', () => {
        expect(arrayColors()).toHaveLength(4);
    })
});