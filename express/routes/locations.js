const express = require("express");
const router = express.Router();
const location = require('../controllers/locationController');

router.get('/', location.getAll);
router.get('/:id', location.getById);
router.post('/', location.post);
router.put('/:id', location.update);
router.delete('/:id', location.delete);

module.exports = router;
