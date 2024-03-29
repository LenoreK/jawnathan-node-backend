// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
let cors = require('cors')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Jawnathan'
    })
})

//CONTROLLERS
const gigsController = require('./controllers/gig_controller')
app.use('/gig', gigsController)

const venuesController = require('./controllers/venue_controller')
app.use('/venue', venuesController)

const videosController = require('./controllers/video_controller')
const { sequelize } = require('./models')
app.use('/video', videosController)

const userController = require('./controllers/user_controller')
app.use('/user', userController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})