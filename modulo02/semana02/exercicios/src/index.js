// _________________________________________________(Exercicio 01)
function filtrarNumerosPares(numeros) {
    let numerosPares = numeros.filter((numero) => numero % 2 === 0);
    return(numerosPares)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numeros)
console.log(filtrarNumerosPares(numeros)); 

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
