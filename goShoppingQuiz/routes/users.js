const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.get('/', user.getAll);
router.get('/:id', user.getOne);
router.post('/', user.create);

module.exports = router;