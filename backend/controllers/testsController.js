const db            = require('../config/db');
const questionsBank = require('../utils/questionsBank');

/* ── GET /api/tests/questions ────────────────────────────── */
exports.getQuestions = (req, res) => {
  const { educationLevel, domain, testType } = req.query;

  if (!educationLevel)
    return res.status(400).json({ error: 'educationLevel is required' });

  let questions = [];

  if (testType === 'interest') {
    if (educationLevel === '10th') {
      questions = questionsBank['10th']?.interest || [];
    } else if (domain) {
      questions = questionsBank[educationLevel]?.[domain]?.interest || [];
    }
  } else {
    // aptitude
    if (educationLevel === '10th') {
      const bank = questionsBank['10th']?.aptitude || {};
      Object.values(bank).forEach(qs => questions.push(...qs));
    } else if (domain) {
      const bank = questionsBank[educationLevel]?.[domain]?.aptitude || {};
      Object.values(bank).forEach(qs => questions.push(...qs));
    }
  }

  // shuffle for variety
  const shuffled = questions.sort(() => Math.random() - 0.5).slice(0, 15);

  res.json({ success: true, questions: shuffled, total: shuffled.length, testType, domain, educationLevel });
};

/* ── POST /api/tests/submit ──────────────────────────────── */
exports.submitTest = async (req, res) => {
  const { educationLevel, domain, answers, testType, timeTaken } = req.body;

  if (testType === 'interest')
    return res.json({ success: true, message: 'Interest responses recorded', answers });

  // build lookup map
  const allQ = [];
  const bank = questionsBank[educationLevel]?.[domain]?.aptitude || {};
  Object.values(bank).forEach(qs => allQ.push(...qs));
  const qMap = {};
  allQ.forEach(q => { qMap[q.id] = q; });

  const subjectScores = {};
  let correct = 0;

  const processed = (answers || []).map(a => {
    const q = qMap[a.questionId];
    if (!q) return { ...a, isCorrect: false };
    const ok = a.selectedOption === q.correct;
    if (ok) correct++;
    const subj = q.subject;
    if (!subjectScores[subj]) subjectScores[subj] = { correct: 0, total: 0 };
    subjectScores[subj].total++;
    if (ok) subjectScores[subj].correct++;
    return { ...a, isCorrect: ok, subject: subj };
  });

  const pct = answers.length ? Math.round((correct / answers.length) * 100) : 0;
  const subjectWisePct = {};
  Object.entries(subjectScores).forEach(([k, v]) => {
    subjectWisePct[k] = Math.round((v.correct / v.total) * 100);
  });

  try {
    const { rows } = await db.query(
      `INSERT INTO test_results
         (user_id, domain, education_level, test_type, answers,
          total_correct, total_questions, percentage, subject_wise, time_taken_secs)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       RETURNING id`,
      [req.user.id, domain, educationLevel, testType || 'aptitude',
       JSON.stringify(processed), correct, answers.length,
       pct, JSON.stringify(subjectWisePct), timeTaken || 0]
    );

    res.json({
      success: true,
      result: {
        id: rows[0].id,
        totalCorrect: correct,
        totalQuestions: answers.length,
        percentage: pct,
        subjectWise: subjectWisePct,
        timeTaken: timeTaken || 0,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ── GET /api/tests/history ──────────────────────────────── */
exports.getTestHistory = async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT id, domain, education_level, test_type, total_correct, total_questions,
              percentage, subject_wise, time_taken_secs, completed_at
       FROM test_results WHERE user_id = $1 ORDER BY completed_at DESC LIMIT 20`,
      [req.user.id]
    );
    res.json({ success: true, history: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
