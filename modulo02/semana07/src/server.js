const express = require("express")
const routes = require("./routes/routes")
const cors = require("cors")
const connection = require("./database/connection")
const APP_PORT = process.env.APP_PORT
const HOST = process.env.DB_HOST

class Server {
  constructor(server = express()) {
    this.database()
    server.use(cors())
    server.use(express.json())
    server.use(routes)
    this.startaServer(server)
  }

  async database() {
    try {
      await connection.authenticate()
      console.log("conectado ao banco de dados")
    } catch (error) {
      console.log("Erro ao conectar: ", error)
    }
  }

  async startaServer(server) {
    server.listen(APP_PORT, () => {
      console.log(`Servidor rodando em: \n  http://${HOST}:${APP_PORT}\n`)
    })
  }
}

module.exports = { Server }