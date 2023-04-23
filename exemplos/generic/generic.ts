/* function retorno(a: string | number | boolean) {
  return a;
}

console.log(retorno('Samuel Santos'))
console.log(retorno(200))
console.log(retorno(true)) */

/* function retorno<variavel>(a: variavel): variavel {
  return a;
}

console.log('Samuka') */


const numeros = [1,2,3,4,5,6,7,8,9]
const frutas = ['Laranja', 'perâ', 'Maçã']

function firstThree<T>(lista:T[]): T[] {
  return lista.slice(0,3)
}

console.log(firstThree(numeros))
console.log(firstThree(frutas))




function notNull<T>(arg: T) {
  if(arg !== null) return arg
  return null
}

notNull('Samuel')?.toLowerCase()
notNull(200)?.toFixed