const express = require('express')
const router = express.Router()
const professorController = require('../controllers/professorController')

router.get('/', professorController.mostrar)
router.get('/:id', professorController.mostrarPorId)
router.put('/', professorController.verificarAutorizacao, professorController.cadastro)
router.post('/editar/:id', professorController.verificarAutorizacao, professorController.editar)
router.delete('/deletar/:id', professorController.verificarAutorizacao, professorController.deletar)
module.exports = router