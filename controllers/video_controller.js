// DEPENDENCIES
const videos = require('express').Router()
const db = require('../models')
const { Video } = db 
const { Op } = require('sequelize')

// FIND ALL Videos
videos.get('/', async (req, res) => {
    try {
        const foundVideos = await Video.findAll({
            where: {
                video_name: { [Op.like]: `%${req.query.video_name ? req.query.video_name : ''}%` }
            }
        })
        res.status(200).json(foundVideos)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Video
videos.get('/:name', async (req, res) => {
    try {
        const foundVideo = await Video.findOne({
            where: { video_name: req.params.name },
        })
        res.status(200).json(foundVideo)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Video
stages.post('/', async (req, res) => {
    try {
        const newVideo = await Video.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new video',
            data: newVideo
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A STAGE
videos.put('/:id', async (req, res) => {
    try {
        const updatedVideo = await Video.update(req.body, {
            where: {
                video_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedVideos} video(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A STAGE
videos.delete('/:id', async (req, res) => {
    try {
        const deletedVideo = await Video.destroy({
            where: {
                video_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedVideo} video(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = videos