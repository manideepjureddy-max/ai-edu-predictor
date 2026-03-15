const express = require('express');
const router = express.Router();
const { getQuestions, submitTest, getTestHistory } = require('../controllers/testsController');
const { protect } = require('../middleware/auth');

router.get('/questions', protect, getQuestions);
router.post('/submit', protect, submitTest);
router.get('/history', protect, getTestHistory);

module.exports = router;
