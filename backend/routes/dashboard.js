const express = require('express');
const router  = express.Router();
const { protect } = require('../middleware/auth');
const db = require('../config/db');

router.get('/stats', protect, async (req, res) => {
  try {
    const uid = req.user.id;

    const [predTotal, testTotal, recentPreds, recentTests, avgRow] = await Promise.all([
      db.query('SELECT COUNT(*) FROM predictions  WHERE user_id = $1', [uid]),
      db.query('SELECT COUNT(*) FROM test_results WHERE user_id = $1', [uid]),
      db.query(
        `SELECT id, education_level, prediction_mode, domain,
                recommended_stream, confidence_score, created_at
         FROM predictions WHERE user_id = $1
         ORDER BY created_at DESC LIMIT 5`, [uid]
      ),
      db.query(
        `SELECT id, domain, education_level, percentage, completed_at
         FROM test_results WHERE user_id = $1
         ORDER BY completed_at DESC LIMIT 5`, [uid]
      ),
      db.query(
        'SELECT AVG(percentage)::int AS avg FROM test_results WHERE user_id = $1', [uid]
      ),
    ]);

    res.json({
      success: true,
      stats: {
        totalPredictions:  parseInt(predTotal.rows[0].count),
        totalTests:        parseInt(testTotal.rows[0].count),
        recentPredictions: recentPreds.rows,
        recentTests:       recentTests.rows,
        latestPrediction:  recentPreds.rows[0] || null,
        averageTestScore:  avgRow.rows[0].avg || 0,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
