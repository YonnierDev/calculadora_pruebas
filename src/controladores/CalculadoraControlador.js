const CalculadoraModelo = require('../modelos/CalculadoraModelo');

class CalculadoraControlador {
    constructor() {
        this.modelo = new CalculadoraModelo();
        this.historial = [];
    }

    operar(tipoOperacion, primerNumero, segundoNumero) {
        let resultado;
        switch(tipoOperacion) {
            case 'suma':
                resultado = this.modelo.sumar(primerNumero, segundoNumero);
                break;
            case 'resta':
                resultado = this.modelo.restar(primerNumero, segundoNumero);
                break;
            case 'multiplicacion':
                resultado = this.modelo.multiplicar(primerNumero, segundoNumero);
                break;
            case 'division':
                resultado = this.modelo.dividir(primerNumero, segundoNumero);
                break;
            case 'potencia':
                resultado = this.modelo.potencia(primerNumero, segundoNumero);
                break;
            case 'raiz':
                resultado = this.modelo.raizCuadrada(primerNumero);
                break;
            default:
                throw new Error('Operación no válida');
        }
        this.historial.push({ tipoOperacion, numeros: [primerNumero, segundoNumero], resultado });
        return resultado;
    }

    obtenerHistorial() {
        return this.historial;
    }

    limpiarHistorial() {
        this.historial = [];
    }
}

module.exports = CalculadoraControlador; 