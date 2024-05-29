function viaCep(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((response) => response.json())
  .then((dados) => {
    if(dados.erro === true) return null
    return dados
  })
  .catch(() => {
    console.log("Houve um erro ao retornar o CEP")
    return null
  })
}

module.exports = viaCep