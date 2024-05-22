const { error } = require('console');
const readline = require('readline')
const fs = require('fs')

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

let cep = 0

input.question("Qual é o cep da pesquisa? ", (cepDigitado) => {
   // 12345678
   // 12345-678
    cep = cepDigitado
    console.log(cep)
    if(cep.length === 8) {

        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then(response => {
            if(response.ok === true) {
                return response.json()
            } else {
                throw new Error()
            }
        })
        .then(data => {
            console.log(data);
            // fs.writeFileSync //escrever em um arquivo // dentro do ('') é o nome do arquivo + extensão
            fs.writeFileSync('endereco.txt', `
            Estado: ${data.bairro}
            Cidade ${data.localidade}
            Bairro: ${data.uf}
            Rua: ${data.logradouro}
            `) // .txt -> arquivo de text

        })
        .catch(() => {
            console.log("Erro ao pesquisar no via cep")
        })
    } else {
        console.log(`o cep inserido ${cep}, está inválido`)
    }
    input.close()
})