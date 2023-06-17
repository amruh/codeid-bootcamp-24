const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const customer = require('../controllers/customerController');
const authentication = require('../auth/authentication');

router.post('/signup', user.createUser, customer.create);
router.post('/signin', authentication.userLogin);

module.exports = router;