// _________________________________________________(Exercicio 01)
function filtrarNumerosPares(numeros) {
  let numerosPares = numeros.filter((numero) => numero % 2 === 0);
  return(numerosPares)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numeros)
console.log(filtrarNumerosPares(numeros)); 

console.log("_________________________________________________")
// _________________________________________________(Exercicio 02)
function filtrarIdadeAdultos(pessoas) {
  let pessoaAdulta = pessoas.filter(pessoa => pessoa.idade >= 18);
  return(pessoaAdulta)
}

let pessoas = [
  { nome: 'Artur', idade: 16 },
  { nome: 'Heloisa', idade: 24 },
  { nome: 'kauan', idade: 14 },
  { nome: 'josé', idade: 18 },
  { nome: 'Diogo', idade: 42 }
];

// console.log(pessoas)
console.log(filtrarIdadeAdultos(pessoas));

function calcularValorTotalPorCategoria(produtos) {
  return produtos.reduce((valorFinal, produto) => {
    const { categoria, valor } = produto;
    valorFinal[categoria] = (valorFinal[categoria] || 0) + valor;
    return valorFinal;
  }, {});
}

const produtos = [
  { categoria: 'eletronicos', valor: 99.99 },
  { categoria: 'eBooks', valor: 19.99 },
  { categoria: 'eletronicos', valor: 199.99 },
  { categoria: 'eBooks', valor: 29.99 },
  { categoria: 'acessorios', valor: 7.64 },
  { categoria: 'acessorios', valor: 16.43 }
];

console.log(calcularValorTotalPorCategoria(produtos));

console.log("_________________________________________________")
// _________________________________________________(Exercicio 04)
function contador() {
  let conta = 0
  return function() {
    conta++
    return conta
  }
}

let contador1 = contador();
console.log(contador1());
console.log(contador1());
console.log(contador1());

let contador2 = contador();
console.log(contador2());
console.log(contador2());
