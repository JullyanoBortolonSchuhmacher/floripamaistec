let filmes = ["Homem de Ferro", "Jogos Mortais", "Harry Potter"]
// em ordem: [0, 1, 2]

let numeros = new Array(1, 2, 3, 4, 5)

console.log(filmes)
console.log(numeros)

let [filmeUm, filmeDois, filmeTres, filmeQuatro] = filmes
console.log(filmes[1])

// Modificando elementos do Array

filmes[1] = "capitão América"

console.log(filmes)

// comprimento do array

let tamanhoArray = filmes.length
console.log(tamanhoArray)

// -- // acessando de acordo com o tamanho
console.log(filmes[tamanhoArray-3])

// manipulando arrays
// push -> adiciona no final do array
filmes.push("A Creche do Papai") 
console.log(filmes)

// unshift -> adiciona no início do array
filmes.unshift("As Branquelas")
console.log(filmes)

// removendo elementos
// pop remove o último elemento do array
let ultimoFilme = filmes.pop()
console.log(ultimoFilme)
console.log(filmes)

// shift remove o primeiro elemento do array
let primeiroFilme = filmes.shift()
console.log(primeiroFilme)
console.log(filmes)

// map -> modifica todos os dados
let numerosDobro = numeros.map((numero) => {
    return numero * 2
})
console.log(numerosDobro)    

// filter -> modifica os dados
let numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})
console.log(numerosPares)

// reduce -> aplica função contra um acumulador e cada 
// elemento do array (da esquerda para a direita)
// para reduzi-lo a um único valor

let soma = numeros.reduce((total, numero) => {
    return total + numero
}, 0) // 0 -> é o valor inicial
console.log(soma)

// Encontrar nos arrays
// find
let numeroEncontrado = numeros.find((numero) => {
    return numero > 2
})

console.log(numeroEncontrado)

let indiceEncontrado = numeros.findIndex((numero) => {
    return numero > 4
})

if (indiceEncontrado == -1) {
    console.log("Não foi encontrado, ", indiceEncontrado)
} else {
    console.log(indiceEncontrado)
}

// métodos de organização
// sort -> ordena os elementos do array e retorna o próprio
let filmesOrdenados = filmes.sort()
console.log(filmesOrdenados)

// reverse -> inverte a ordem dos elementos no array
let filmesInvertidos = filmes.reverse()
console.log(filmesInvertidos)

// definindo um objeto
const pessoa = {
    nome: 'João',
    idade: 31,
    profissao: 'Engenheiro',
    cidade: 'Florianópolis'
}

const propriedades = ["nome", "idade", "profissao", "cidade"]
propriedades.forEach((propriedade) => {
    console.log(pessoa[propriedade])
    // se existir essa propriedade no objeto pessoa,
    //ira mostrar no console o valor
})

// modificando propriedades do Objeto
pessoa.idade = 28
// pessoa["idade"] = 42
console.log(pessoa.idade)

// removendo propriedades do objeto
delete pessoa.cidade
console.log(pessoa)

// chave dinâmica
const prefixo = "item"
const produtos = ["livro", "caderno", "caneta"]

// devolvendo um novo array para ele
// const produto = produtos.map((prod, indice) => {
//     // return {[prefixo + indice]: prod} // começa com 0
//     return {[prefixo + ++indice]: prod} // começa com 1 
// })

// console.log(produto)


// criando propriedades dinamicamente
const propriedades1 = ["nome", "idade", "profissao"]

const usuarios = [
    ["Pedro", 28, "dev"]
    ["Luiz", 28, "QA"]
]
