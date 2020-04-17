import {isNull, isFalse, isUndefined, isTrue} from '../true';


describe('resultados nulos', () => {
    test('recibe null', () => {
        expect(isNull()).toBeNull();
    });
});


describe('resultados verdaderos', () => {
    test('recive verdadero', () => {
        expect(isTrue()).toBeTruthy();
    })
    
});



describe('resultados undefined', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});


describe('resultados falsos', () => {
    test('falso', () => {
        expect(isFalse()).toBeFalsy();
    });
});


describe('resultados falsos con not', () => {
    test('not falso', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});