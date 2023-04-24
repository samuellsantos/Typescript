# FUNÇÃO

- A interface de uma função é definida durante a sua declaração.

function somar(a: number, b:number) {
return a + b
}

### Overload

- Existem funções que retornam diferentes dados, dependendo do argumento.
- Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a itnerface antes da definição da mesma, utilizando o mesmo nome.
- O overload deve ser compatível com a função original.

<CÓDIGO>
function normalizar(valor: string[]): string[];
function normalizar(valor: string): string;
function normalizar(valor: string | string[]): string | string[] {
if(typeof valor === "string") {
return valor.trim().toLowerCase;
} else {
return valor.map((item) => item.trim().toLowerCase())
}
}

console.log(normalizar(" Produto ").toUpperCase())
console.log(normalizar(" Banana", "UVA ").toUpperCase())
<FIM DO CÓDIGO>
