const Calculator = require('../models/Calculator');

class CalculatorController {
    constructor() {
        this.calculator = new Calculator();
        this.validOperations = {
            'suma': 'suma',
            'add': 'add',
            'resta': 'resta',
            'subtract': 'subtract',
            'multiplicacion': 'multiplicacion',
            'multiply': 'multiply',
            'division': 'division',
            'divide': 'divide',
            // Errores comunes
            'divicion': 'division',
            'multiplicación': 'multiplicacion',
            'división': 'division',
            'sumar': 'suma',
            'restar': 'resta',
            'multiplicar': 'multiplicacion',
            'dividir': 'division'
        };
    }

    validateNumber(num) {
        const number = parseInt(num);
        if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
            throw new Error('Por favor ingrese un número entero positivo válido');
        }
        return number;
    }

    handleOperation(operation, a, b) {
        const num1 = this.validateNumber(a);
        const num2 = this.validateNumber(b);

        // Normalizar la operación a minúsculas y eliminar espacios
        const normalizedOperation = operation.toLowerCase().trim();

        // Verificar si la operación está en nuestro mapa de operaciones válidas
        const correctedOperation = this.validOperations[normalizedOperation];
        
        if (!correctedOperation) {
            throw new Error(
                'Operación no válida. Use: suma/add, resta/subtract, multiplicacion/multiply, division/divide\n' +
                'Nota: Asegúrese de escribir correctamente el nombre de la operación'
            );
        }

        switch (correctedOperation) {
            case 'suma':
            case 'add':
                return this.calculator.add(num1, num2);
            case 'resta':
            case 'subtract':
                return this.calculator.subtract(num1, num2);
            case 'multiplicacion':
            case 'multiply':
                return this.calculator.multiply(num1, num2);
            case 'division':
            case 'divide':
                return this.calculator.divide(num1, num2);
            default:
                throw new Error('Operación no válida. Use: suma/add, resta/subtract, multiplicacion/multiply, division/divide');
        }
    }
}

module.exports = CalculatorController; 