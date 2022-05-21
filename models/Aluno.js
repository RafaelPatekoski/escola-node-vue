const mongoose = require('mongoose')

const alunoSchema = new mongoose.Schema({
    nomeAluno: {type: String, required: true},
    raAluno: {type: String, required: true},
    nascimentoAluno: {type: Date, required:true},
    dataMatriculaAluno: {type: Date, required: true},
    dataTransferenciaAluno: {type: Date, default: "0000-01-01"},
    turmaAluno: {type: String, required: true}
})

const Aluno = mongoose.model('Aluno', alunoSchema)

module.exports = Aluno