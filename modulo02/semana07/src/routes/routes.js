const { Router } = require('express')
const cursosRoutes = require('./cursos.routes')
const profsRoutes = require('./professores.routes')

const routes = Router() 

routes.use('/cursos', cursosRoutes)
routes.use('/professores', profsRoutes)

module.exports = routes