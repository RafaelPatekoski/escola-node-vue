const mongoose = require('mongoose')

// A SALA DO PROFESSOR NÃO VAI FICAR SALVO NELE, E SIM NO BANCO DE TURMAS
const professorSchema = new mongoose.Schema({
    nomeProfessor: {type: String, required: true},
    nascimentoProfessor: {type: Date, required: true},
    enderecoProfessor: {type: String, required: true},
    formacaoProfessor: {type: String, required: true},
    generoProfessor: {type: String, required: true},
})

const Professor = mongoose.model('Professor', professorSchema)

module.exports = Professor