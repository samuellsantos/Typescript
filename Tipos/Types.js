"use strict";
//String
let nome = 'Samuel';
//Number
let numero = 14;
//Boolean
let dev = true;
//Array
let nomes = ['Samuel', 'Samuka'];
let nomes2 = [
    'Samuel', 'Santos'
];
//The array can take very types, so define it like this
let names = [
    'Samuel', 18, 19, 'Santos'
];
//OR
let names2 = [
    'Samuel', 18, 19, 'Santos'
];
//Tuple
let people = [
    2004, 'Samuel'
];
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto('SaMuKa'));
