const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /performances')
})

module.exports = router