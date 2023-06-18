const express = require('express');
const router = express.Router();
const cart = require('../controllers/cartController');
const product = require('../controllers/productController');

router.get('/:id', cart.getCart);
router.post('/:id', product.decrementQty, cart.addToCart);

module.exports = router;