require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')

mongoose.connect('mongodb://localhost:27017/bd-escola')
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', express.json())
app.use('/', router)
app.listen(process.env.PORT, ()=>{
    console.log('Servidor Rodando na porta', process.env.PORT)
})