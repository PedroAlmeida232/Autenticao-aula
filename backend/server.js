// Baixando dependencias
require('dotenv').config();
const express = require('express')
const fs = require("fs")
const path = require("path")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cors = require('cors')
const app = express()

const PORT = 5001

app.use(cors())
app.use(express.json())

const secret_key = process.env.SECRET_KEY

app.listen(PORT, (req,res)=>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})