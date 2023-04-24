"use strict";
//A interface de uma função é definida durante sua declaração.
function somar(a, b) {
    return a + b;
}
function arredondarValor(valor) {
    if (typeof valor == 'string') {
        const numero = Number(valor).toFixed();
        return String(numero);
    }
    else {
        return valor.toFixed();
    }
}
console.log(arredondarValor('7.8'));
