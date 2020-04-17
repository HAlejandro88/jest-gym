import { callbackHell } from '../callbacks';

describe('pruebas un callback', () => {
    test('probar un callback', done => {
        function onatherCallback(data) {
            expect(data).toBe('Hola javaScript')
            done();
        }
        callbackHell(onatherCallback);
    });

});