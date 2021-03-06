const Professor = require('../models/Professor')
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
        console.log(req.body)
        let professor = new Professor(req.body)
        try{
            let doc = await professor.save()
            res.send('professor cadastrado')
        } catch(error){
            console.log('Error aqui')
            res.send(error)
        }
    },
    mostrar: async(req, res)=>{
        let professores = await  Professor.find({})
        try{
            console.log('aqui chefinho')
            res.send(professores)
        }catch(error){
            res.send(error)
        }
    },
    mostrarPorId: async (req, res)=>{
        let id = req.params.id
        let professor= await Professor.findById(id)
        try{
            res.send(professor)
        }catch(error){
            console.log(error)
            res.send(error)
        }
    },
    editar: async(req, res)=>{
        let id = req.params.id
        let professor = {}
        professor.nomeProfessor = req.body.nomeProfessor
        professor.nascimentoProfessor = req.body.nascimentoProfessor
        professor.enderecoProfessor = req.body.enderecoProfessor
        professor.formacaoProfessor = req.body.formacaoProfessor
        professor.generoProfessor = req.body.formacaoProfessor
        try{
            await Professor.findByIdAndUpdate(id, professor)
            res.send('Editado com sucesso')
        }catch(error){
            console.log(error)
        }
    },
    deletar: async(req, res)=>{
        let id = req.params.id
        try{
            await Professor.findByIdAndDelete(id)
            await Turma.findOneAndUpdate({professorTurma: id}, {professorTurma: "semprofessor"})
            res.send('Professor(a) excluido(a) com sucesso')
            //precisa atualizar as turmas
    
        }catch(error){
            res.send('Ocorreu algum erro')
        }
    }
}