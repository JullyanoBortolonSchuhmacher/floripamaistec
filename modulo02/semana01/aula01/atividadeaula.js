// number
const idade = 18

if (idade > 18) {
    console.log("é maior de idade")
} else if (idade < 18) {
    console.log('é menor de idade')
} else {
    console.log('possuí 18 anos')
}

console.log(idade)


// string
const nome = "josé da silva fernandes"

console.log(nome)

// booleano
const certo = true
const mentira = false
const verdade = true


console.log(certo, mentira)

// objeto
const carro = {
    cor: "azul",
    ano: 2010,
}

// array
const itensMercado = [
    "banana",
    "Laranja",
    "leite",
    "ovos"
]

// date
const data = new Date()

console.log(data)

// REGEX -> CNPJ

const empresa1Cnpj = "24.141.100.0000-12"
const padraoCnpj =  /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/ 


