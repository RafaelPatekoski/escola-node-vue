const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')//vai se utilizado em todas as partes da API PARA VERIFICAR SE TEM ALGUM USUARIO LOGADO...
const usuarioRouter = require('./usuarioRouter')
const turmaRouter = require('./turmaRouter')
const professorRouter = require('./professorRouter')
router.use('/', usuarioController.verificarUsuario)
router.use('/professor', professorRouter)
router.use('/usuario', usuarioRouter)
router.use('/turma', turmaRouter)
router.get('/', (req, res)=>{
    res.send({msg: 'Está funcionando', feitoPor: 'Rafael Patekoski'})
})

module.exports = router