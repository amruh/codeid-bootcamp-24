const express = require('express');
const router = express.Router();
const productCategory = require('../controllers/productCategoryController');

router.get('/', productCategory.getAll);
router.get('/:id', productCategory.getOne);
router.post('/', productCategory.create);
router.put('/:id', productCategory.update);
router.delete('/:id', productCategory.delete);

module.exports = router;