// let nome = "    banana amassada   "
// const comentario = "amo java"

// nome = nome.toUpperCase()

// console.log(nome.toUpperCase())
// console.log(nome.trim())
// console.log(comentario, "*correção de frase de má conduta*")
// console.log(comentario.replace("java", '----'))

// ctrl + space -> vscode mostra todas as funções :)


// <----------------- number -----------------> 

// number com number (+) = number
// number com string (+) = string
// number com number (-) = number
// number com string (-) = number


// const salario = 100
// const salariostring = "100"
// const bonus = 50

// console.log('a', salario+bonus) // 150 -> 
// console.log('b', salariostring+bonus) // 10050 -> '+' considera como string 
// console.log('c', salariostring-bonus) // 50 -> '-' considera como number

// console.log('d', Number(salariostring)-Number(bonus))
/*
    adicionando o Number() deixa bem claro que é number 
    caso seja uma string ele retira os ("") 
*/

// const maiorIdade = false

// const idade = 25

// if (idade > 18) {
//     const maiorIdade = true
//     console.log(maiorIdade, "Usuario é maior de idade")
// }

// ------------------ NULL/nulo ------------------

// let cidade = null
// geralmente usado com let para que o intuito seja reutilizar 

// cidade = "Florianópolis"

// ------------------ Undefined ------------------

// const pessoa -> o const não deixa fazer isso
// propriedade indefinida

// let pessoa; -> evitar declarardessa forma

// let pessoa1 = "" // string
// let pessoa2 = [] // lista
// let pessoa3 = {} // objeto

// ------------------ OBJETO ------------------

// const aluno = {
//     nome: "Joao da silva",
//     curso: "programação",
//     idade: 29,
// }

// //  adicionar valor
// aluno.cidade = "Florianópolis"

// console.log(aluno)

// ------------------ ARRAY ---------------------------

// const estados = [ // array string
//     'SC',
//     'SP',
//     'BA',
//     'CE',
//     'MG',
// ]

// const numeros = [ // array number
//     1,
//     2,
//     3,
//     4,
// ]

// const alunos = [
//     'alunos',
//     { nome: 'Joao da silva', curso: 'programação', idade: 29 },
//     { nome: 'Jeferson', curso: 'pastronomia', idade: 24 }
//   ]

// // console.log(estados, numeros, alunos)
// // console.log(estados)
// // console.log(numeros)
// console.log(alunos)

// -------------------------- DATE -------------------

// const hoje = new Date() // vira objeto de data

// // console.log(hoje)
// // console.log(hoje.getHours()) 
// // console.log(hoje.getMinutes())
// // console.log(hoje.getSeconds())

// console.log(hoje.toLocaleDateString()) 
// // formata para a região, br-> dd/mm/aaaa, us-> mm/dd/aaaa
// console.log(hoje.getDay())
// // dia da semana [1-7]
// console.log(hoje.getDate()) 
// // pega o dia da semana

// --------------------- EXPRESSÕES REGULARES (REGEX) -------------------

const cpf = "999.999.999-99"
const padraoCpf = /^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/ // dentro do /^$/

if(padraoCpf.test(cpf)){
    console.log("É UM CPF", cpf)
} else {
    console.log("NÃO É UM CPF", cpf)
}

const nome = "asd"