const Calculator = require('../models/Calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('suma dos números correctamente', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('resta dos números correctamente', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('multiplica dos números correctamente', () => {
        expect(calculator.multiply(4, 3)).toBe(12);
    });

    test('divide dos números correctamente', () => {
        expect(calculator.divide(6, 2)).toBe(3);
    });

    test('lanza error al dividir por cero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('No se puede dividir por cero');
    });
}); 