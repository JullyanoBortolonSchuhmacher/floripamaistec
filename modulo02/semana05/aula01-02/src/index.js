const express = require("express")

const petRoutes = require('./routes/pets.routes')
const instrumentosRoutes = require("./routes/instrumentos.routes")

const port = 8000

const app = express()
app.use(express.json()) // Habilita o servidor a receber JSON

app.use('/pets', petRoutes)
app.use('/instrumentos', instrumentosRoutes)

app.listen(port, () => {
    console.log("Servidor Online")
})
