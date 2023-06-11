const express = require('express');
const router = express.Router();
const regions = require('../controllers/regionController');

router.get('/', regions.getAll);

module.exports = router;
