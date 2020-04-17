import { getDataFromApi } from '../promise';


describe('probar promesas', () => {
    test('probar api en la promes', done => {
        const api = 'https://rickandmortyapi.com/api/character';
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        })
    })

    test('resileve un  resolve', () => {
        return expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    });

    test('recibe un reject', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error');
    })
    
});