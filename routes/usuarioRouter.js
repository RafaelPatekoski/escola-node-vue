const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')

router.get('/', (req, res)=>{
    res.send('usuarios')
})
router.post('/login', usuarioController.login)
router.post('/', usuarioController.cadastro)
module.exports = router