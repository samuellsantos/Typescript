"use strict";
async function fetchDados() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleData(json);
}
fetchDados();
function isProduto(value) {
    if (value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleData(data) {
    if (Array.isArray(data)) {
        data.filter(isProduto).forEach(item => {
            document.body.innerText += `
      ${item.nome}
      `;
        });
    }
}
