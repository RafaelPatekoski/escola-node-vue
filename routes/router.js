const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const usuarioRouter = require('../routes/usuarioRouter')
router.use('/', usuarioController.verificarUsuario)

router.use('/usuario', usuarioRouter)
router.get('/', (req, res)=>{
    res.send({msg: 'Está funcionando', feitoPor: 'Rafael Patekoski'})
})

module.exports = router