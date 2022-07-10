// DEPENDENCIES
const venues = require('express').Router()
const db = require('../models')
const { Venue } = db 
const { Op } = require('sequelize')

// FIND ALL Venues
venues.get('/', async (req, res) => {
    try {
        const foundVenues = await Venue.findAll({
            where: {
                venue_name: { [Op.like]: `%${req.query.venue_name ? req.query.venue_name : ''}%` }
            }
        })
        res.status(200).json(foundVenues)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Venue - Check back on this part
venues.get('/:name', async (req, res) => {
    try {
        const foundVenue = await Venue.findOne({
            where: { venue_name: req.params.venue_name },
            include:{ 
                model: Venue, 
                as: "venue",
                through: { attributes: [] }
            },
            order: [
                [{ model: Venue, as: "venue" }, 'date', 'ASC'],
            ]
        })
        res.status(200).json(foundVenue)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Venue
venues.post('/', async (req, res) => {
    try {
        const newVenue = await Venue.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newVenue
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Venue
venues.put('/:id', async (req, res) => {
    try {
        const updatedVenues = await Venue.update(req.body, {
            where: {
                venue_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedVenues} venue(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Venue
venues.delete('/:id', async (req, res) => {
    try {
        const deletedVenues = await Venue.destroy({
            where: {
                venue_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedVenues} venue(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = venues