const gigs = require('express').Router()
const db = require('../models')
const { Gig, Venue } = db
const { Op } = require('sequelize')

// FIND ALL Gigs
gigs.get('/', async (req, res) => {
    try {
        const foundGigs = await Gig.findAll({
            order: [ [ 'date', 'start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundGigs)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Gig
gigs.get('/:name', async (req, res) => {
    try {
        const foundGig = await Gig.findOne({
            where: { name: req.params.name },
            include: [
                { 
                    model: Venue, 
                    as: "venue", 
                    attributes: { exclude: ["gig_id", "venue_id"] },
                    include: { 
                        model: Venue, 
                        as: "venue", 
                        where: { name: { [Op.like]: `%${req.query.venue_name ? req.query.venue_name : ''}%` } } 
                    }
                }
            ],
            order: [
                [{ model: Venue, as: "venue" }, { model: Gig, as: "gig" }, 'date', 'DESC'],
            ]
        })
        res.status(200).json(foundGig)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Gig
gigs.post('/', async (req, res) => {
    try {
        const newGig = await Gig.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Gig',
            data: newGig
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Gig
gigs.put('/:id', async (req, res) => {
    try {
        const updatedGigs = await Gig.update(req.body, {
            where: {
                gig_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedGigs} gig(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
gigs.delete('/:id', async (req, res) => {
    try {
        const deletedGigs = await Gig.destroy({
            where: {
                gig_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedGigs} gig(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = gigs