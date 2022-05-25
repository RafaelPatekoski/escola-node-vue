const mongoose = require('mongoose')

const turmaSchema = new mongoose.Schema({
    anoTurma: {type: String, required: true},
    classeTurma: {type: String, required: true},
    professorTurma: {type: String},//ID  PROFESSOR
    salaTurma: {type: String, required: true}
})

const Turma = mongoose.model('Turma', turmaSchema)

module.exports = Turma