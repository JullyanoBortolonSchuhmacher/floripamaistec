console.log('oi :D')
//função para consulta

function consulta() {
	console.log("function -> consulta")
	var resposta_consulta = document.getElementById('consultaResp').innerHTML = "O valor do produto é: "
    console.log(resposta_consulta)
}

function comprar() {
    console.log("function -> comprar")  
    var resposta_comprar =  document.getElementById('consultaResp').innerHTML = "carrinho:"
    console.log(resposta_comprar)
    //exibindo o input ao html//
    let text = document.getElementById("nomeCodigoProduto").value.trim().toLowerCase();
    let list = document.getElementById("carrinho").innerHTML;
    if (text == "" || text == null){ 
        alert("Digite o código ou nome do produto!");
    } else {
    list += "<li>" +text+ "</li>"
    document.getElementById("carrinho").innerHTML=list 
    }
}  
