//String
let nome: string = 'Samuel'
//Number
let numero: number = 14

//Boolean
let dev: boolean = true

//Array
let nomes: string[] = ['Samuel', 'Samuka']

let nomes2: Array<string> = [
  'Samuel', 'Santos'
]

//The array can take very types, so define it like this
let names: (string | number)[] = [
  'Samuel', 18, 19, 'Santos'
]

//OR

let names2: Array<string | number> = [
  'Samuel', 18, 19, 'Santos'
]

//Tuple
let people: [number, string] = [
  2004, 'Samuel'
]

function normalizarTexto(texto:string) {
  return texto.trim().toLowerCase()
}
console.log(normalizarTexto('SaMuKa'))
