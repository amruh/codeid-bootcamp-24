const express = require('express');
const router = express.Router();
const order = require('../controllers/orderController');
const orderDetail = require('../controllers/orderDetailController');
const product = require('../controllers/productController');
const authentication = require('../auth/authentication');

router.get('/', authentication.checkToken, order.getAll);
router.post('/', authentication.checkToken, order.create, product.updateQty, orderDetail.create);

module.exports = router;