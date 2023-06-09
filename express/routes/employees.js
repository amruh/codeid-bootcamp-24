const express = require("express");
const router = express.Router();
const employee = require('../controllers/employeeController');

router.get('/', employee.getAll);
router.get('/:id', employee.getById);
router.post('/', employee.post);
router.put('/:id', employee.update);
router.delete('/:id', employee.delete);

module.exports = router;