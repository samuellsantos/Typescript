# GENERIC

- Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <tipo>

### Código Normal

function retorno(a: string | number | boolean) {
return a;
}

console.log(retorno('Samuel Santos'))
console.log(retorno(200))
console.log(retorno(true))

### Usando Generics

function retorno<variavel>(a: variavel): variavel {
return a;
}

console.log('Samuka')

### Exemplo mais real

const numeros = [1,2,3,4,5,6,7,8,9]
const frutas = ['Laranja', 'perâ', 'Maçã']

function firstThree<T>(lista:T[]): T[] {
return lista.slice(0,3)
}

console.log(firstThree(numeros))
console.log(firstThree(frutas))
