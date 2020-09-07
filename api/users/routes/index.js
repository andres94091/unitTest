const express = require('express');
const expressJoi = require('express-joi-validator');

const router = express.Router();

const controller = require('../controller');
const schemas = require('../schemas/shemaJoi');

router.post('/user', expressJoi(schemas.createUser), (req, res) => {
	controller.saveUser(req, res);
});

module.exports = router;
