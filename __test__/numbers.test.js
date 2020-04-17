import { numbers } from '../numbers';


describe('descripcion de mayor que y menor que', () => {
    test('mayor Que', () => {
        expect(numbers(2,2)).toBeGreaterThan(3);
    })

    test('mayor que o igual', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
    });

      test('menor que', () => {
        expect(numbers(2,2)).toBeLessThan(5);
    });

    test('menor que o igual', () => {
        expect(numbers(2,2)).toBeLessThanOrEqual(4);
    });


    test('should ', () => {
        expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
    });
});