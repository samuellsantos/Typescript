interface Produto {
  nome: string;
  horas: number;
  tags: string[]
}

async function fetchDados() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json')
  const json = await response.json()
  handleData(json)
} 
fetchDados()

function isProduto(value: unknown): value is Produto {
  if(value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value){
    return true
  } else {
    return false
  }
}

function handleData(data: unknown) {
  if(Array.isArray(data)) {
    data.filter(isProduto).forEach(item => {
      document.body.innerText += `
      ${item.nome}
      `
    })
  }
}
