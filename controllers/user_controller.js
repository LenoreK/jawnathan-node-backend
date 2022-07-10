// DEPENDENCIES
const users = require('express').Router()
const db = require('../models')
const { User } = db 
const { Op } = require('sequelize')

// FIND ALL Users
users.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll({
            where: {
                user_name: { [Op.like]: `%${req.query.user_name ? req.query.user_name : ''}%` }
            }
        })
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC User -check back on this one
users.get('/:name', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where: { user_name: req.params.user_name },
        })
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Venue
users.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new user',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Venue
users.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Venue
users.delete('/:id', async (req, res) => {
    try {
        const deletedUsers = await User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = users