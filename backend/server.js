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

// Local do arquivo (simula banco de dados)
const localUsuarios = path.join(__dirname, 'usuarios.js')

// Criando funcao para ler o arquivo usuario
const consultarUsuario = ()=>{
    const data = fs.readFileSync(localUsuarios, "utf-8")
    return JSON.parse(data)
}

app.listen(PORT, (req,res)=>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})

//Funcao para gravar dados no arquivo usuarios

const salvarUsuarios = (users)=>{
    fs.writeFileSync(localUsuarios,JSON.stringify(users,null,2))
        
    
}