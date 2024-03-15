console.log('oi :D')
//função para consulta

let carrinho = [];

function limparInput() {
    document.getElementById("nomeCodigoProduto").value = '';
    document.getElementById("valorProduto").value = '0';
}

function consulta() {
    console.log("function -> consulta");
    // Display the "Valor Total" with an empty value as a placeholder
    document.getElementById('showInHtml').innerHTML = "O valor do produto é ";
    limparInput();
}

function comprar() {
    console.log("function -> comprar");

    // nome e valor dos produtos
    let nomeProduto = document.getElementById("nomeCodigoProduto").value.trim().toLowerCase();
    let valorProduto = document.getElementById('precoProduto').value.trim();

    // valores não são vazios
    if (nomeProduto !== '' && valorProduto !== '') {
        // adicionando ao carrinho
        carrinho.push({ 'nome': nomeProduto, 'preco': valorProduto });

        // mostrando no carrinho
        let list = document.getElementById("carrinho");
        list.innerHTML += `<li> ${nomeProduto}, R$ ${valorProduto}</li>`;

    } else {
        alert("Por favor, inserir valores validos!");
    }

    // valor total
    calculaTotal();
}

function calculaTotal() {
    console.log("function -> calculaTotal");
    let total = 0;
    let carrinhoList = document.getElementById("carrinho");

    // calcula a soma dos produtos
    for (i = 0; i < carrinho.length; i++) {
        total += Number(carrinho[i].preco);
    }

    // mostrar o valor total
    document.getElementById("showInHtml").innerHTML = "Valor Total: R$ " + total.toFixed(2);
}

function carrinhoVazio() {
    console.log('function -> carrinhoVazio')
    if (carrinho.length == 0) {
        return document.getElementById("showInHtml").innerHTML = "Carrinho está vazio";
    } else {
        return false;
    }
} 

carrinhoVazio()