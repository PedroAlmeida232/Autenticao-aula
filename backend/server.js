const express = require('express')

const cors = require('cors')
const app = express()

PORT = 3000

app.listen(PORT, (req,res)=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})