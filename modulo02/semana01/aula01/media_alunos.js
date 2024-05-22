const readline = require('readline');

const input = readline.createInterface( 
  process.stdin, 
  process.stdout
);

// definindo as notas vazias
let nota1 = 0
let nota2 = 0
let nota3 = 0

input.question("Qual é a primeira nota? ", (valorNota1) => {
    nota1 = Number(valorNota1)

    input.question("Qual é a primeira nota? ", (valorNota2) => {
        nota2 = Number(valorNota2)

        input.question("Qual é a primeira nota? ", (valorNota3) => {
            nota3 = Number(valorNota3)
            console.log(`as notas são respectivamente: ${nota1}, ${nota2}, ${nota3}`)
            const media_final = ((nota1 + nota2 + nota3) / 3).toFixed(2)
            console.log(`média final de ${media_final} pontos`)
            if (media_final >= 7) {
                console.log("aprovado")
            } else {
                console.log("reprovado")
            }
            input.close()
        })
    })
})
