const express = require("express");
const router = express.Router();
const jobHistory = require('../controllers/jobHistoryController');

router.get('/', jobHistory.getAll);
router.get('/:id', jobHistory.getById);
router.post('/', jobHistory.post);
router.delete('/:id', jobHistory.delete);

module.exports = router;