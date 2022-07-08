// Programa para numeros primos 

function obtenerPrimos(maximo) {
    if (typeof maxico != 'number' || !number.isInteger(maximo)) {
        return null;
    }

    let auxiliar = [];
    let primos = [];

    for (let i = 2; i <= maximo; ++i) {
        if (!auxiliar[i]) {
            primos.push(i);

            for(let j = i << 1; j <= maximo; j += i) {

            }
        }
    }

    return primos;
}

console.log(obtenerPrimos(10));
