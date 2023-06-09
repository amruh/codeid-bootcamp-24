const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController');

router.get('/', category.getAll);
router.get('/:id', category.getOne);
router.post('/', category.create);

module.exports = router;