const express = require('express')
const router = express.Router()
const alunoController = require('../controllers/alunoController')

router.get('/', alunoController.mostrar)
router.get('/:id', alunoController.mostrarPorId)
router.put('/', alunoController.verificarAutorizacao, alunoController.cadastro)
router.post('/editar/:id', alunoController.verificarAutorizacao, alunoController.editar)
router.delete('/deletar/:id', alunoController.verificarAutorizacao, alunoController.deletar)
module.exports = router