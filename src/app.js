const CalculadoraControlador = require('./controladores/CalculadoraControlador');
const CalculadoraVista = require('./vistas/CalculadoraVista');

const readline = require('readline');

const controlador = new CalculadoraControlador();
const vista = new CalculadoraVista();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('\nCalculadora en consola');
    console.log('1. Sumar');
    console.log('2. Restar');
    console.log('3. Multiplicar');
    console.log('4. Dividir');
}

function pedirOperacion() {
    mostrarMenu();
    rl.question('Elige una opción: ', (opcion) => {
        let tipoOperacion;
        switch(opcion) {
            case '1': tipoOperacion = 'suma'; break;
            case '2': tipoOperacion = 'resta'; break;
            case '3': tipoOperacion = 'multiplicacion'; break;
            case '4': tipoOperacion = 'division'; break;
            default:
                console.log('Opción no válida.');
                return pedirOperacion();
        }
        rl.question('Introduce el primer número: ', (num1) => {
            rl.question('Introduce el segundo número: ', (num2) => {
                try {
                    const resultado = controlador.operar(tipoOperacion, parseFloat(num1), parseFloat(num2));
                    vista.mostrarResultado(resultado);
                } catch (error) {
                    vista.mostrarError(error.message);
                }
                pedirOperacion();
            });
        });
    });
}

pedirOperacion(); 