const express = require('express');
const router = express.Router();
const customer = require('../controllers/customerController');
const authentication = require('../auth/authentication');

router.get('/', authentication.checkToken, customer.getOne);
router.get('/orders', authentication.checkToken, customer.customerOrdet);


module.exports = router;