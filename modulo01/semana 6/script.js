function alertainicio() {
    console.log('Bemvindo(a)');
}

function editarInfo() {
    const elementos = {
        nome: document.getElementById("nome"),
        idade: document.getElementById("idade"),
        profissao: document.getElementById("profissao"),
        email: document.getElementById("email"),
        numero: document.getElementById("numero"),
    };

            let novoNome = prompt("Digite o novo nome:");
            console.log(novoNome)    
            let novaIdade = prompt("Digite a nova idade:");
            console.log(novaIdade)
            let novaProfissao = prompt("Digite a nova profissão:");
            console.log(novaProfissao)
            let novoEmail = prompt("Digite o novo email:");
            console.log(novoEmail)
            let novoNumero = prompt("Digite o novo número:", "Dica: Use o formato +55 (00) 00000-0000");
            console.log(novoNumero)
}