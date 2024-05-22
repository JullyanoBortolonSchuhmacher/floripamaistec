// entrada de dados
//biblioteca do node https://nodejs.org/api/readline.html

const readline = require('readline')

// usando a biblioteca, diz para capturar as entradas e saidas de dados
// seria a função leia() do portugol / prompt() do html
// da acesso ao terminal

const input = readline.createInterface( // no "input" pode ser outro nome
  process.stdin, 
  process.stdout
);

let nome = ""
let sobrenome = ""

input.question("Qual é o seu nome? ", (nomeDigitado) => {
  nome = nomeDigitado.trim() // remove os espaços
  input.question("Qual é o seu sobrenome? ", (sobrenomeDigitado) => {
    sobrenome = sobrenomeDigitado.trim() // remove os espaços
    input.close() // fecha as pergunta
    console.log("nome:", nome + ' ' + sobrenome) // separa com o + ' ' +
    // concatenar é uma forma de juntar
  })
})
