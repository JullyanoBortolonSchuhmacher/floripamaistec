async function calcularJurosSimples(capital, taxa, tempo) {
  const juros = (capital * taxa * tempo) / 100
  const valorFinal = +capital + +juros
  return juros, valorFinal
}
module.exports = {
  calcularJurosSimples
}