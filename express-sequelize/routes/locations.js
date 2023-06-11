const express = require('express');
const router = express.Router();
const locations = require('../controllers/locationController');

router.get('/', locations.getAll);
router.get('/:id', locations.getOne);
router.post('/', locations.create);
router.put('/:id', locations.update);
router.delete('/:id', locations.delete);

module.exports = router;