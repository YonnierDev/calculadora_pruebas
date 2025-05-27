class CalculadoraVista {
    mostrarResultado(resultado) {
        console.log('Resultado:', resultado);
    }

    mostrarError(mensaje) {
        console.log('Error:', mensaje);
    }

    mostrarHistorial(historial) {
        console.log('\nHistorial de operaciones:');
        historial.forEach((item, indice) => {
            const { tipoOperacion, numeros, resultado } = item;
            let operacionStr = `${tipoOperacion}(${numeros.join(', ')}) = ${resultado}`;
            console.log(`${indice + 1}. ${operacionStr}`);
        });
    }
}

module.exports = CalculadoraVista; 