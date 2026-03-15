const express = require('express');
const router = express.Router();
const roadmapsData = require('../utils/roadmapsData');
const { protect } = require('../middleware/auth');

router.get('/', protect, (req, res) => {
  const { stream, from, to } = req.query;
  const key = `${from}_to_${to || stream}`;
  const roadmap = roadmapsData[key];

  if (!roadmap) {
    // Return all available roadmaps
    return res.json({
      success: true,
      available: Object.keys(roadmapsData),
      roadmaps: roadmapsData
    });
  }

  res.json({ success: true, roadmap });
});

router.get('/all', protect, (req, res) => {
  res.json({ success: true, roadmaps: roadmapsData });
});

router.get('/:key', protect, (req, res) => {
  const roadmap = roadmapsData[req.params.key];
  if (!roadmap) {
    return res.status(404).json({ error: 'Roadmap not found' });
  }
  res.json({ success: true, roadmap });
});

module.exports = router;
