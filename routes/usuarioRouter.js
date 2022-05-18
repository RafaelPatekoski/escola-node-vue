const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')

router.get('/', (req, res)=>{
    res.send(typeof(req.usuario))
})
router.post('/login', usuarioController.login)
router.post('/', usuarioController.cadastro)
module.exports = router