const readline = require('readline/promises')
const { calcularAreaTriangulo } = require('./formulas_areas');
const { calcularPerimetroTriangulo } = require('./formulas_perimetros');
const { calcularJurosSimples } = require('./juros')
const viaCep = require('./cep')

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

async function areaDoTriangulo() {
  const altura = await input.question("Qual é o valor da altura? ")
  const base = await input.question("Qual é o valor da base? ")

  input.close()

  if (!!altura && !!base){
    console.log(calcularAreaTriangulo(base, altura));
  } else {
    console.log("meh.. 🤡 ->> function areaDoTriangulo")
  }
}

async function perimetroDoTriangulo() {
  const ladoA = await Number(input.question("Qual é o valor do lado 1? \n"))
  const ladoB = await Number(input.question("Qual é o valor do lado 2? \n"))
  const ladoC = await Number(input.question("Qual é o valor do lado 3? \n"))

  input.close()

  if (!!ladoA && !!ladoB && !!ladoC){
    console.log(calcularPerimetroTriangulo(ladoA, ladoB, ladoC)) // a, b, c --> a + b + c
  } else {
    console.log("meh.. 🤡 ->> function perimetroDoTriangulo")
  }
}


async function calculoJurosAPagar(){
  const capital = await input.question("Digite o valor que deseja pegar (em reais): ");
  const taxaMensal = await input.question("Digite a taxa mensal (em %): ");
  const tempo = await input.question("quantos meses você deseja parcelar? "); // 1 ano = 12 meses
  
  input.close()
  
  if (!!capital &&!!taxaMensal &&!!tempo) {
    console.log(calcularJurosSimples(Number(capital), Number(taxaMensal), Number(tempo)));
  } else {
    console.log("meh.. 🤡 ->> function calculoJurosAPagar");
  }
}

async function pesquisarCep(){
  const cep = await input.question("Digite o CEP (apenas números): ")
  input.close()
  if (!!cep) {
    if (cep.includes("-")) {
      console.log("tente novamente com apenas os números")
    } else {
      const dadosCep = viaCep(cep)
      console.log("O resultado é ", await dadosCep)
    }
  } else {
    console.log("meh.. 🤡 ->> function pesquisarCep");
  }
}

async function iniciar() {
  const opcao = await input.question("Qual a operação que deseja realizar? \n 1 - Área \n 2 - Perímetro \n 3 - Juros Simples \n 4 - CEP \n")
  if (opcao == 1){
    areaDoTriangulo()
  } else if (opcao == 2){
    perimetroDoTriangulo()
  } else if (opcao == 3){
    calculoJurosAPagar()
  } else if (opcao == 4){
    pesquisarCep()
  } else {
    console.log("meh.. 🤡 ->> function iniciar")
  }
}

iniciar()
