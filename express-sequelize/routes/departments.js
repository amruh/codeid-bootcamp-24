const express = require('express');
const router = express.Router();
const department = require('../controllers/departmentController');

router.get('/', department.getAll);
router.get('/:id', department.getOne);
router.post('/', department.create);
router.put('/:id', department.update);
router.delete('/:id', department.delete);

module.exports = router;