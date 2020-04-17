describe('comprobar cadena de texto', () => {

    const texto = 'este es un super texto';

    test('debe contener el texto', () => {
        expect(texto).toMatch("es");
    });

    test('con regex', () => {
        expect(texto).toMatch(/super/);
    });

    test('not', () => {
        expect(texto).not.toMatch(/perro/g);
    });

    test('longitid de string', () => {
        expect(texto).toHaveLength(22);
    });
});