const listaDeTarefas = document.getElementById("listaTarefas");
const input = document.getElementById("inputTarefas");
const avisos = document.getElementById("resposta");

document.getElementById("addButton").addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
    let textoTarefa = input.value.trim();

    if (textoTarefa === "") {
        avisos.innerText = "Por favor, adicione uma tarefa";
    } else {
        criarLi(textoTarefa);
        limparInput();
        avisos.innerText = "";
    }
}

function criarLi(texto) {
    let itemLista = document.createElement("li");
    itemLista.classList.add('itensListaDeTarefas');
    itemLista.textContent = texto;

    let btnConcluido = document.createElement("button");
    btnConcluido.classList.add('btn-concluir');
    btnConcluido.textContent = "Concluir";
    btnConcluido.onclick = function () {
        marcarComoFeito(itemLista);
    };
    itemLista.appendChild(btnConcluido);

    let btnRemover = document.createElement('button');
    btnRemover.classList.add('btn-remover');
    btnRemover.textContent = 'X';
    btnRemover.onclick = function () {
        removeTarefa(itemLista);
    };
    itemLista.appendChild(btnRemover);

    listaDeTarefas.appendChild(itemLista);
}

function limparInput() {
    input.value = '';
}

function marcarComoFeito(tarefa) {
    tarefa.classList.toggle("feito");
}

function removeTarefa(tarefa) {
    tarefa.remove();
}