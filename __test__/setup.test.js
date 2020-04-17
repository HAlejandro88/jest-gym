afterEach(() => {
    console.log('despues de cada prueba')
});

afterAll(() => {console.log("despues de todas laspruebas")});

//Antes de cada prueba

beforeAll(() => console.log("antes de todas la pruebas"));
beforeEach(() => {
    console.log("Antes de cada prueba");
});

describe('preparar antes de ejecutar', () => {
    test('es verdadero', () => {
       expect(true).toBeTruthy(); 
    });
});