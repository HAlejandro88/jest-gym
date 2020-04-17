describe('Comparandores comunes', () => {
    const user = {
        name: 'Alejandro',
        lastName: 'Soto'
    }

    const user2 = {
        name: 'Ariadna',
        lastName: 'Soto'
    }

    const user3 = {
        name: 'Alejandro',
        lastName: 'Soto'
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user3);
    });

    test('no son iguales', () => {
        expect(user).not.toEqual(user2);
    });
    
    
});// correr el comando jest "archivo de prueba"