const express = require('express');
const router = express.Router();
const {
  predictFromInterests,
  predictFromAptitude,
  getSavedPredictions,
  getPredictionById,
  chatWithAI
} = require('../controllers/predictionController');
const { protect } = require('../middleware/auth');

router.post('/interests', protect, predictFromInterests);
router.post('/aptitude', protect, predictFromAptitude);
router.get('/saved', protect, getSavedPredictions);
router.get('/:id', protect, getPredictionById);
router.post('/chat', protect, chatWithAI);

module.exports = router;
