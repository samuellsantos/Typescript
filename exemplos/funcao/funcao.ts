//A interface de uma função é definida durante sua declaração.
function somar(a:number, b:number) {
  return a + b
}

//OVERLOAD
/* Existem funções que retornam diferentes dados dependendo do argumento.

Podemos declarar a interface dessas funções utilzando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.

O Overload deve ser compatível com a função original. */
/* function normalizar(valor: string[]): string[];
function normalizar(valor: string): string;
function normalizar(valor: string | string[]): string | string[] {
	if(typeof valor === "string") {
		return valor.trim().toUpperCase();
	} else {
		return valor.map((item) => item.trim().toLowerCase())
	}
}

console.log(normalizar(" Produto "))
console.log(normalizar(['Banana', 'Uva'])) */


function arredondarValor(valor: string): string;
function arredondarValor(valor: number): number;
function arredondarValor(valor: number | string): number | string {
  if(typeof valor == 'string') {
    const numero = Number(valor).toFixed()
    return String(numero)
  } else {
    return valor.toFixed()
  }
}
console.log(arredondarValor('7.8'))