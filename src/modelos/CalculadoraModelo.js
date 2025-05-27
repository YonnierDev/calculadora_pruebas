class CalculadoraModelo {
    sumar(primerNumero, segundoNumero) {
        return primerNumero + segundoNumero;
    }

    restar(primerNumero, segundoNumero) {
        return primerNumero - segundoNumero;
    }

    multiplicar(primerNumero, segundoNumero) {
        return primerNumero * segundoNumero;
    }

    dividir(primerNumero, segundoNumero) {
        if (segundoNumero === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return primerNumero / segundoNumero;
    }

    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }

    raizCuadrada(numero) {
        if (numero < 0) {
            throw new Error("No se puede calcular la raíz cuadrada de un número negativo");
        }
        return Math.sqrt(numero);
    }
}

module.exports = CalculadoraModelo; 