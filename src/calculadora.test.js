const Calculadora = require('./calculadora');

describe('Calculadora', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    test('suma dos números correctamente', () => {
        expect(calculadora.sumar(2, 3)).toBe(5);
        expect(calculadora.sumar(-1, 1)).toBe(0);
        expect(calculadora.sumar(0, 0)).toBe(0);
    });

    test('resta dos números correctamente', () => {
        expect(calculadora.restar(5, 3)).toBe(2);
        expect(calculadora.restar(1, 1)).toBe(0);
        expect(calculadora.restar(0, 5)).toBe(-5);
    });

    test('multiplica dos números correctamente', () => {
        expect(calculadora.multiplicar(2, 3)).toBe(6);
        expect(calculadora.multiplicar(-2, 3)).toBe(-6);
        expect(calculadora.multiplicar(0, 5)).toBe(0);
    });

    test('divide dos números correctamente', () => {
        expect(calculadora.dividir(6, 2)).toBe(3);
        expect(calculadora.dividir(5, 2)).toBe(2.5);
        expect(calculadora.dividir(0, 5)).toBe(0);
    });

    test('lanza error al dividir por cero', () => {
        expect(() => calculadora.dividir(5, 0)).toThrow('No se puede dividir por cero');
    });
}); 