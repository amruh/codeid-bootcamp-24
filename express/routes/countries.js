const express = require("express");
const router = express.Router();
const countries = require('../controllers/countryController');

router.get('/', countries.getAll);
router.get('/:id', countries.getById);
router.post('/', countries.post);
router.put('/:id', countries.update);
router.delete('/:id', countries.delete);

module.exports = router;