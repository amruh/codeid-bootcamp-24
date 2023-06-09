const express = require("express");
const router = express.Router();
const jobs = require('../controllers/jobController');

router.get('/', jobs.getAll);
router.get('/:id', jobs.getById);
router.post('/', jobs.post);
router.put('/:id', jobs.update);
router.delete('/:id', jobs.delete);

module.exports = router;