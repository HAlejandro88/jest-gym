import { suma, multiplicar, restar, dividir } from '../maths';


describe('pruebas matematicas', () => {
    test('suma', () => {
        expect(suma(1,1)).toBe(2);
    });

    test('resta', () => {
        expect(restar(8,3)).toBe(5);
    });

    test('multiplicar ', () => {
        expect(multiplicar(5,2)).toBe(10);
    });

    test('dividir ', () => {
        expect(dividir(9,3)).toBe(3);
    })
    
    
});