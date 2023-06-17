const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');
const { upload } = require('../controllers/uploadController');

router.get('/', product.getAll);
router.get('/:id', product.getOne);
router.post('/', upload, product.create);
router.put('/:id', product.update);
router.delete('/:id', product.delete);

module.exports = router;