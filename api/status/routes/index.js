const express = require('express');

const router = express.Router();

const controller = require('../controller');

router.get('/', (req, res) => {
	controller.status(req, res);
});

module.exports = router;
