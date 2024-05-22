const readline = require('readline');
const input = readline.createInterface( 
  process.stdin, 
  process.stdout
);

// peso inicial
let peso = 0

// altura inicial
let altura = 0

// definido a variavel da conta dp imc

input.question("Qual é o peso? ", (pesoDigitado) => {
  peso = Number(pesoDigitado)
  console.log(`${peso} kg`)
  input.question("Qual é a altura? em metros? ", (alturaDigitada) => {
    altura = Number(alturaDigitada)
    console.log(`${altura} metros / ${altura * 100} cm`)
    const resultado_imc = (peso / (altura * altura)).toFixed(2)
    console.log(resultado_imc.toFixed(2))

    if (resultado_imc < 18.5) {
        console.log(resultado_imc + " (abaixo do peso ideal)")
    } else if (resultado_imc >= 18.5 && resultado_imc < 25) {
        console.log(resultado_imc + " ( peso ideal)")
    } else if (resultado_imc >= 25 && resultado_imc < 30) {
        console.log(resultado_imc + " ( levemente acima do peso)")
    } else if (resultado_imc >= 30 && resultado_imc < 35) {
        console.log(resultado_imc + " ( obesidade grau I)")
    } else if (resultado_imc >= 35 && resultado_imc < 40) {
        console.log(resultado_imc + " ( obesidade grau II (severa))")
    } else {
        console.log(resultado_imc + "(obesidade III (mórbida))")
    }

    input.close()

  })
})

// Calcular IMC e apresenta feedback ( peso  / altura * altura )