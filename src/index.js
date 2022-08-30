const express = require('express')
const { Pool } = require('pg')
const PORT = 5432
require ('dotenv').config
const routes = require('./routes')

const app = express()
const pool = new Pool({
    connectionstring: process.env.POSTGRES_URL
})
app.use(express.json())
app.use( routes )

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: erros.message})
})

//app.listen(3333, () => console.log('server está rodando 3'))
app.listen(process.env.PORT || 5432 , () => console.log('O server está rodando na porta 5432'))