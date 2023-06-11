const express = require('express');
const router = express.Router();
const jobHistories = require('../controllers/jobHistoryController');

router.get('/', jobHistories.getAll);
router.get('/:id', jobHistories.getOne);
router.post('/', jobHistories.create);
router.delete('/:id', jobHistories.delete);

module.exports = router;