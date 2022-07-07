//Dependencies
const express = require('express')

//Configuration
require('dotenv').config()
const app = express()

//Routes
app.use('/performances', require('./controllers/performances'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page<h1>')
})

//Listen
app.listen(process.env.PORT)