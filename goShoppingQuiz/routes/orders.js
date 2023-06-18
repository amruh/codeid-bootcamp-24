const express = require('express');
const router = express.Router();
const order = require('../controllers/orderController');
const cart = require('../controllers/cartController');
const orderLineItem = require('../controllers/orderLineItemController');
const product = require('../controllers/productController');

// router.get('/:id', cart.getCart);
router.post('/:id', order.createOrder, orderLineItem.create);
router.post('/:id/close', order.closeOrder, cart.closeCart);
router.post('/:id/cancel', order.cancelOrder, product.incrementQty, cart.cancelCart);

module.exports = router;