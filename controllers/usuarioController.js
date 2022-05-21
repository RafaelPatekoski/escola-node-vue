const Usuario = require('../models/Usuario')

const verificarUsuario = async(req, res, next)=>{
    console.log(req.headers.token)
    try{
      req.usuario = await Usuario.findById(req.headers.token)
      console.log(req.usuario.autorizacao)
      console.log('---------')
      //Verificar se ta pegando o usuario certo
      if(req.usuario === undefined){req.usuario = null}
      else{}
    }catch(error){
        console.log('não registrado')
        req.usuario = null
    }
    
    next()
}

const cadastro = async(req, res)=>{
    if(req.usuario === null){return res.send('Não autenticado')}
    //Verificar se o usuario tem autorização para criar outro usuario
    else if(req.usuario.autorizacao === 'usuario'){
        return res.send('Não autorizado usuario')
    }
    else if(req.usuario.autorizacao === 'secretario'){
        return res.send('Não autorizado secretario')
    }
    else{
    let usuario = new Usuario(req.body)
    try{
        let doc = await usuario.save()
        res.send('cadastrado')
    } catch(error){
        console.log('Error')
        res.send(error)
    }
    }
}
const login = async (req, res)=>{
    let usuario = {}
    usuario.usuario = req.body.usuario
    usuario.senha = req.body.senha
    console.log(usuario)
    const selectedUser = await Usuario.findOne({usuario: usuario.usuario})
    if(!selectedUser){return res.status(400).send('Usuario! ou senha incorreto')}
    if(selectedUser.senha != usuario.senha){
        return res.status(400).send('Usuario ou senha! incorretos')
    }

    res.send({token: selectedUser.id});
}

module.exports = {verificarUsuario, cadastro, login}