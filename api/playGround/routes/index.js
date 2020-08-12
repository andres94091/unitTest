const express = require('express')
const router = express.Router()

const controller = require('../controller')

router.post('/average', (req, res) => {
    controller.averageResponse(req, res)
})

module.exports = router