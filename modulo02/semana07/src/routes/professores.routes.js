const { Router } = require('express')
const ProfessorController = require('../controllers/professores')

const router = Router()

router.post('/', ProfessorController.cadastra)
router.get('/', ProfessorController.lista)
router.get('/:id', ProfessorController.listaId)
router.put('/:id', ProfessorController.atualizar)
router.delete('/:id', ProfessorController.deleta)

module.exports = router
