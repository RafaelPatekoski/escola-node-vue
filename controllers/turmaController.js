const Turma = require('../models/Turma')

module.exports = {
    verificarAutorizacao: async(req, res, next)=>{
        if(req.usuario === null){return res.send('Não autenticado')}
        //Verificar se o usuario tem autorização para criar outro usuario
        //Apenas admins e secretarios podem criar turma
        else if(req.usuario.autorizacao === 'usuario'){
            return res.send('Não autorizado')
        }
        else{
            next()
        }
    },
    cadastro: async(req, res)=>{
        let turma = new Turma(req.body)
        try{
            let doc = await turma.save()
            res.send('turma cadastrada')
        } catch(error){
            console.log('Error')
            res.send(error)
        }
    },
    mostrar: async(req, res)=>{
        let turmas = await Turma.find({})
        try{
            res.send(turmas)
        }catch(error){
            res.send(error)
        }
    },
    mostrarPorId: async (req, res)=>{
        let id = req.params.id
        let turma = await Turma.findById(id)
        try{
            res.send(turma)
        }catch(error){
            res.send(error)
        }
    },
    editar: async(req, res)=>{
        let id = req.params.id
        let turma = {}
        turma.anoTurma = req.body.anoTurma
        turma.classeTurma = req.body.classeTurma
        turma.professorTurma = req.body.professorTurma
        turma.salaTurma = req.body.salaTurma
        try{
            await Turma.findByIdAndUpdate(id, turma)
            res.send('Editado com sucesso')
        }catch(error){
            console.log(error)
        }
    },
    deletar: async(req, res)=>{
        let id = req.params.id
        try{
            await Turma.findByIdAndDelete(id)
            res.send('Turma excluida')
    
        }catch(error){
            res.send('Ocorreu algum erro')
        }
    }
    

}