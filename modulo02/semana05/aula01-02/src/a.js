const express = require("express")

const petRoutes = require('./routes/pets.routes')
const vacinasRoutes = require("./routes/vacinas.routes")

const app = express()
app.use(express.json()) // Habilita o servidor a receber JSON

app.use('/pets', petRoutes)
app.use('/vacinas', vacinasRoutes)

app.listen(3000, () => {
    console.log("Servidor Online")
})

// const express = require('express')
// const {Pool} = require('pg')

// const app = express() 
// app.use(express.json())

// const conexao = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'postgres',
//   password: '6535',
//   database: 'pets_bd'
// })

// /* Ação, path e da implementação  */

// app.get('/bemvindo', (request, response) => {
//   response.send("Bem vindo")
// })

// // vacinas
// app.post('/vacinas', async (request, response) => {
//   try{

//     const dados = request.body
  
//     if (!dados.nome || !dados.descricao || !dados.dose) {
//       return response.starus(400).json({mensagem: 'Nome, descricao e dose são obrigatórios!'})
//     }

//     await conxao.query(`
//     INSERT INTO vacinas
//     (
//       nome,
//       descricao,
//       dose
//     ) 
//     VALUES
//     (
//       $1,
//       $2,
//       $3
//     )
//     `, [dados.nome, dados.descricao, dados.dose])
//     response.status(200).json({mensagem: 'vacinas criadas'});
  
//   }  catch {
//     response.status(500).json({ mensagem: "Erro ao buscar as vacinas" });
//   } 
// })

// /* CRUD pets */
// app.post('/pets',  async (request, response) => {
//     const dados = request.query
//     console.log(dados)

//     const pets = await conexao.query("SELECT * from pets where nome=$1", [dados.nome])
//     response.status(200).json(pets.rows)

//     try {

//     const dados = request.body
    
//     if (!dados.nome || !dados.tipo || !dados.idade || !dados.raca) {
//       return response.send("Alguns campos não foram preenchidos corretamente! 💥")
//     }

//     await conexao.query(
//       `INSERT INTO pets 
//         (
//           nome,
//           idade,
//           raca,
//           tipo,
//           responsavel
//         )
//         values
//         (
//           $1,
//           $2,
//           $3,
//           $4,
//           $5
//         )
//       `, [dados.nome, dados.idade, dados.raca, dados.tipo, dados.responsavel]);

//       console.log(dados)

//       response.status(201).json({ mensagem: 'Criado com sucesso' })
//   } catch {
//      response.status(500).json({mensagem: 'Não possível cadastrar o pet'})
//   }
// })
// app.listen(8000, () => {
//   console.log("Servidor Online")
// }) 