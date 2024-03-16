//variaveis gerais
const titulo = document.getElementById("titulo");  //h1
const elementoClique = document.getElementById("elementoClique");  //button
const clorir = document.getElementsByClassName("clorir"); //class="colorir"
const lorem = document.getElementById("lorem"); //div id="lorem"
const cor = document.getElementById("cor");     //input color
const tamanho = document.getElementById("tamanho"); //input range tamanho da div
const quantidade = document.getElementById("rangeNumeros");    //input range numeros
const textoh3 = document.getElementById("avsDiv");          //texto  do h3 (sobre a div lorem)
const numerosDiv = document.getElementById("numeros");      //numeros da (div numeros)


//clicando no botao que muda as cores 
function cliqueBotao() {
    const color = cor.value;
    for (let i = 0; i < clorir.length; i++) {
      clorir[i].style.color = color;
      lorem.style.color = color;
    }
}  

//adicionando e removendo classe
titulo.classList.add("barroco");
titulo.classList.remove("barroco");

//alterando tamanho com o input range
function alterarTamanho() {
  const tamanhoFonte = parseInt(tamanho.value);
  if (tamanhoFonte < 15) {
    textoh3.innerText = 'Muito pequeno';
  }
  if (tamanhoFonte >= 15) {
    textoh3.innerText = 'Título 1';
    lorem.style.fontSize = tamanhoFonte + 'px';
  }
}

//colocando numeros de acordo com o tamanho da range
function adicionarNumeros() {
    let quadro = [];
    const valorRange = parseInt(quantidade.value);
    
    for (let i = 1; i <= valorRange; i++) {
      quadro.push(i);
    }
    numerosDiv.innerText = quadro.join(', ');
}

//chamando funções
elementoClique.onclick = cliqueBotao;
tamanho.oninput = alterarTamanho;
quantidade.oninput = adicionarNumeros;

//criando um novo elemento  e  appendchild
const button = document.createElement("button");
const textNode = document.createTextNode("Clique aqui!");
button.appendChild(textNode);
const paragrafo = document.createElement("p");
paragrafo.appendChild(button);
document.body.appendChild(paragrafo);

button.onclick = function() {
  const novoParagrafo = document.createElement("p");
  const textNode = document.createTextNode("Texto inserido!");
  novoParagrafo.appendChild(textNode);
  novoParagrafo.id = "novo paragrafo";
  document.body.appendChild(novoParagrafo);
}

//chamando a função de alterar tamanho do texto lorem
alterarTamanho();