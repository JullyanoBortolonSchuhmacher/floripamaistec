console.log('oi :D')
//função para consulta

function consulta() {
	console.log("function -> consulta")
	var resposta_consulta = document.getElementById('consultaResp').innerHTML = "O valor do produto é "; 
    console.log(resposta_consulta)
}

function limparInput(){
    document.getElementById("nomeCodigoProduto").value='';
};

function comprar() {
    console.log("function -> comprar")  
    console.log(resposta_comprar)
    //exibindo o input ao html//
    let text = document.getElementById("nomeCodigoProduto").value.trim().toLowerCase();
    let list = document.getElementById("carrinho").innerHTML;
    if (text == "" || text == null){ 
        alert("Digite o código ou nome do produto!");
    } else {
    list += "<li>" +text+ "</li>"
    document.getElementById("carrinho").innerHTML=list 
    var resposta_comprar =  document.getElementById('h2carrinho').innerHTML = "carrinho:"    
    //limpando input
    limparInput()        
    }
}  

function vlrTotal() {
    console.log("function -> vlrTotal")
    var carrinho = document.getElementsByTagName("LI");
    var total = 0;
    for (i = 0 ; i <carrinho.length; i++) {
        total += Number(carrinho[i].innerText);
    };
    return document.getElementById("vlrTotal").innerHTML = "Valor Total: ";
}

/*     let itens = list.split(',');

    //calculando
    let total = itens.reduce((acc, item) => {
        let valor = item.trim().toLowerCase();
        return acc + parseFloat(valor);
    },0);
        //console
        console.log(total)
        console.log(itens)
} */


//local storage

