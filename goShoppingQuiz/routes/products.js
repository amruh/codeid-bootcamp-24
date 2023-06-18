const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');

router.get('/', product.getAll);
router.get('/:id', product.getOne);
router.post('/', product.create);

module.exports = router;