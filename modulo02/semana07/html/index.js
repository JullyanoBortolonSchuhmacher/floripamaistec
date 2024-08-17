document.getElementById('courseForm').addEventListener('submit', async function(event) {
    event.preventDefault()
  
    const nome = document.getElementById('nome').value
    const descricao = document.getElementById('descricao').value
    const duracao = document.getElementById('duracao').value
    const online = document.getElementById('online').checked
  
    const response = await fetch('http://localhost:8332/cursos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        descricao,
        duracao,
        online
      })
    })
  
    const messageElement = document.getElementById('message')
  
    if (response.ok) {
      const data = await response.json()
      messageElement.textContent = 'Curso criado com sucesso!'
      messageElement.classList.remove('error')
      document.getElementById('courseForm').reset()
      console.log('Curso criado:', data)
    } else {
      const errorMessage = await response.text()
      messageElement.textContent = `Erro ao criar o curso: ${errorMessage}`
      messageElement.classList.add('error')
      console.error('Erro ao criar o curso:', errorMessage)
    }
  })
  
  document.getElementById('updateButton').addEventListener('click', async function() {
    const id = prompt('Digite o ID do curso que deseja atualizar:')
    const nome = document.getElementById('nome').value
    const descricao = document.getElementById('descricao').value
    const duracao = document.getElementById('duracao').value
    const online = document.getElementById('online').checked
  
    const response = await fetch(`http://localhost:8332/cursos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        descricao,
        duracao,
        online
      })
    })
  
    const messageElement = document.getElementById('message')
  
    if (response.ok) {
      const data = await response.json()
      messageElement.textContent = 'Curso atualizado com sucesso!'
      messageElement.classList.remove('error')
      console.log('Curso atualizado:', data)
    } else {
      const errorMessage = await response.text()
      messageElement.textContent = `Erro ao atualizar o curso: ${errorMessage}`
      messageElement.classList.add('error')
      console.error('Erro ao atualizar o curso:', errorMessage)
    }
  })
  
  document.getElementById('deleteButton').addEventListener('click', async function() {
    const id = prompt('Digite o ID do curso que deseja deletar:')
  
    const response = await fetch(`http://localhost:8332/cursos/${id}`, {
      method: 'DELETE'
    })
  
    const messageElement = document.getElementById('message')
  
    if (response.ok) {
      const data = await response.json()
      messageElement.textContent = 'Curso deletado com sucesso!'
      messageElement.classList.remove('error')
      console.log('Curso deletado:', data)
    } else {
      const errorMessage = await response.text()
      messageElement.textContent = `Erro ao deletar o curso: ${errorMessage}`
      messageElement.classList.add('error')
      console.error('Erro ao deletar o curso:', errorMessage)
    }
})  

document.addEventListener("DOMContentLoaded", function () {
    const updateButton = document.getElementById("updateButton");
    const deleteButton = document.getElementById("deleteButton");
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const confirmButton = document.getElementById("confirmButton");
    const courseIdInput = document.getElementById("courseIdInput");
    let action = "";
  
    updateButton.addEventListener("click", function () {
      action = "update";
      openModal();
    });
  
    deleteButton.addEventListener("click", function () {
      action = "delete";
      openModal();
    });
  
    closeModal.addEventListener("click", function () {
      closeModalFunc();
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModalFunc();
      }
    });
  
    confirmButton.addEventListener("click", function () {
      const courseId = courseIdInput.value;
      if (courseId) {
        if (action === "update") {
          // Código para atualizar curso com o ID fornecido
          console.log("Atualizar curso com ID:", courseId);
        } else if (action === "delete") {
          // Código para deletar curso com o ID fornecido
          console.log("Deletar curso com ID:", courseId);
        }
        closeModalFunc();
      } else {
        alert("Por favor, insira um ID válido.");
      }
    });
  
    function openModal() {
      modal.style.display = "flex";
    }
  
    function closeModalFunc() {
      modal.style.display = "none";
      courseIdInput.value = "";
    }
  });
  