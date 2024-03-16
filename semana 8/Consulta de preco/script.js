
// Variáveis principais
const inputProduto = document.getElementById('idProduto');
const respostaH3 = document.getElementById('respPreco');
const botaoAdicionar = document.getElementById('addCarrinho');
const listaItensCarrinho = document.getElementById('itensCarrinho');
const elementoValorTotal = document.getElementById('vlrTotal');
let total = 0;
let qtdCarrinho = 0; 
let carrinho = [];

// Facilitador para enviar com o Enter
inputProduto.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        consultarPreco();
    }
});

function precos(produto) {
    let valorProd = 0;
    switch (produto) {
        case "1":
        case "morango":
            valorProd = 5.99;
            habilitarBotao();
            return 'R$' + valorProd;
        case "2":
        case "laranja":
            valorProd = 6.45;
            habilitarBotao();
            return 'R$' + valorProd;
        case "3":
        case "goiaba":
            valorProd = 4.87;
            habilitarBotao();
            return 'R$' + valorProd;
        case "4":
        case "pera":
            valorProd = 3.49;
            habilitarBotao();
            return 'R$' + valorProd;
        case "5":
        case "carambola":
            valorProd = 7.88;
            habilitarBotao();
            return 'R$' + valorProd;
        case "":
        case null:
            desabilitarBotao();
            return 'campo de consulta está vazio!';
        case "0":
        case "sair":
            if (confirm('Programa encerrado. Deseja sair?')) {
                window.location.reload();
            }
        default:
            desabilitarBotao();
            return 'Produto não encontrado';
    }
}

function consultarPreco() {
    const produto = inputProduto.value.trim().toLocaleLowerCase();
    const resposta = precos(produto);
    
    respostaH3.innerText = resposta;
}

function habilitarBotao() {
    botaoAdicionar.disabled = false;
}

function desabilitarBotao() {
    botaoAdicionar.disabled = true;
}

function adicionarAoCarrinho() {
    const produto = inputProduto.value.trim().toLocaleLowerCase();
    const resposta = respostaH3.innerText;
    
    if (resposta !== 'Produto não encontrado' && resposta !== 'campo de consulta está vazio!' && resposta !== 'Programa encerrado') {
        adicionarItemAoCarrinho(produto, parseFloat(resposta.replace('R$', '')));
    }
}

function adicionarItemAoCarrinho(produto, preco) {
    const novoItem = document.createElement('li');
    novoItem.textContent = `${produto} - R$${preco.toFixed(2)}`;
    listaItensCarrinho.appendChild(novoItem);

    total += preco;
    elementoValorTotal.innerText = `Total: R$${total.toFixed(2)}`;

    qtdCarrinho++;
    atualizarQtdCarrinho();
    const id = carrinho.length;
    let itemCarrinho = {
        id: id,
        nome: produto,
        preco: preco
    };
    carrinho.push(itemCarrinho);
    localStorage.setItem(`produto_${id}`, JSON.stringify(itemCarrinho));
}

function atualizarQtdCarrinho() { 
    const qtdElemento = document.getElementById("qtdCarrinho"); 
    qtdElemento.innerText = `Itens (${qtdCarrinho})`; 
}

window.addEventListener('load', function() {
    Object.keys(localStorage).forEach(function(key) {
        if(key.includes('produto_')) {
            let item = JSON.parse(localStorage.getItem(key));
            carrinho.push(item);
        }
    });
    atualizarQtdCarrinho();
});

function f5() {
    window.location.reload(); 
}