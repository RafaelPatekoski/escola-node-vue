const express = require('express')
const router = express.Router()
const turmaController = require('../controllers/turmaController')

router.get('/', turmaController.mostrar)
router.get('/:id', turmaController.verificarAutorizacao, turmaController.mostrarPorId)
router.put('/', turmaController.verificarAutorizacao, turmaController.cadastro)
router.post('/editar/:id', turmaController.verificarAutorizacao, turmaController.editar)
router.delete('/deletar/:id', turmaController.verificarAutorizacao, turmaController.deletar)
module.exports = router