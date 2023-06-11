const express = require('express');
const router = express.Router();
const employees = require('../controllers/employeeController');

router.get('/', employees.getAll);
router.get('/:id', employees.getOne);
router.post('/', employees.create);
router.put('/:id', employees.update);
router.delete('/:id', employees.delete);

module.exports = router;