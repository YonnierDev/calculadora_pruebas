const CalculatorController = require('./controllers/CalculatorController');
const ConsoleView = require('./views/ConsoleView');

class App {
    constructor() {
        this.controller = new CalculatorController();
        this.view = new ConsoleView();
    }

    async start() {
        try {
            console.log('Bienvenido a la Calculadora');
            console.log('Operaciones disponibles:');
            console.log('\nEn español:');
            console.log('suma');
            console.log('resta');
            console.log('multiplicacion');
            console.log('division');
            console.log('\nEn inglés:');
            console.log('add');
            console.log('subtract');
            console.log('multiply');
            console.log('divide');
            console.log('\nNota: Solo se aceptan números enteros positivos');
            
            const operation = await this.view.getUserInput('\nIngrese el nombre de la operación: ');
            const num1 = await this.view.getUserInput('Ingrese el primer número: ');
            const num2 = await this.view.getUserInput('Ingrese el segundo número: ');

            const result = this.controller.handleOperation(operation, num1, num2);
            this.view.displayResult(result);
        } catch (error) {
            this.view.displayError(error);
        } finally {
            this.view.close();
        }
    }
}

const app = new App();
app.start(); 