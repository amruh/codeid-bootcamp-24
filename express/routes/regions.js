const express = require("express");
const router = express.Router();
const region = require('../controllers/regionController');

router.get('/', region.getAll);
router.get('/:id', region.getById);
router.post('/', region.post);
router.put('/:id', region.update);
router.delete('/:id', region.delete);

module.exports = router;
