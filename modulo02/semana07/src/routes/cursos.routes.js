const { Router } = require('express')
const CursoController = require('../controllers/cursos')

const router = Router()

router.post('/', CursoController.cadastra)
router.get('/', CursoController.lista)
router.get('/:id', CursoController.listaId)
router.put('/:id', CursoController.atualizar)
router.delete('/:id', CursoController.deleta)

module.exports = router
