const Aluno = require('../models/Aluno')

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
        let aluno = new Aluno(req.body)
        try{
            let doc = await aluno.save()
            res.send('aluno cadastrado')
        } catch(error){
            console.log('Error')
            res.send(error)
        }
    },
    
    mostrar: async(req, res)=>{
        let aluno = await  Aluno.find({})
        try{
            res.send(aluno)
        }catch(error){
            res.send(error)
        }
    },
    mostrarPorId: async (req, res)=>{
        let id = req.params.id
        let aluno= await Aluno.findById(id)
        try{
            res.send(aluno)
        }catch(error){
            res.send(error)
        }
    },
    editar: async(req, res)=>{
        let id = req.params.id
        let aluno = {}
        aluno.nomeAluno = req.body.nomeAluno
        aluno.raAluno = req.body.raAluno
        aluno.nascimentoAluno = req.body.nascimentoAluno
        aluno.dataMatriculaAluno = req.body.dataMatriculaAluno
        aluno.dataTransferenciaAluno = req.body.dataTransferenciaAluno
        aluno.turmaAluno = req.body.turmaAluno

        try{
            await Professor.findByIdAndUpdate(id, aluno)
            res.send('Editado com sucesso')
        }catch(error){
            console.log(error)
        }
    },
    deletar: async(req, res)=>{
        let id = req.params.id
        try{
            await Aluno.findByIdAndDelete(id)
            res.send('Aluno(a) excluido(a) com sucesso')
    
        }catch(error){
            res.send('Ocorreu algum erro')
        }
    }
}