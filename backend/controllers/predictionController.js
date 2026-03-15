const { GoogleGenerativeAI } = require('@google/generative-ai');
const db        = require('../config/db');
const roadmaps  = require('../utils/roadmapsData');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/* ── helpers ──────────────────────────────────────────────── */
const scoreInterests = (answers, educationLevel) => {
  const s = {
    MPC:0, BiPC:0, MEC:0, CEC:0,
    CSE:0, 'CSE-AI':0, 'CSE-DS':0, 'CSE-Cyber':0,
    ECE:0, EEE:0, MECH:0, CE:0, ECM:0, AIDS:0,
    SoftwareDev:0, DataScientist:0, AIEngineer:0,
    CyberEngineer:0, CloudEngineer:0, EmbeddedEngineer:0,
  };

  answers.forEach(a => {
    const v = typeof a.value === 'number' ? a.value : 1;
    if (educationLevel === '10th') {
      if (a.subject === 'math')     { s.MPC += v*2; s.MEC += v; }
      if (a.subject === 'biology')  { s.BiPC += v*2; }
      if (a.subject === 'science')  { s.MPC += v;  s.BiPC += v; }
      if (a.subject === 'business') { s.MEC += v*2; s.CEC += v*2; }
      if (a.subject === 'tech')     { s.MPC += v; }
      if (a.subject === 'medical')  { s.BiPC += v*2; }
      if (a.subject === 'logic')    { s.MPC += v; s.MEC += v; }
      if (a.subject === 'social')   { s.CEC += v*2; }
    } else if (educationLevel === 'intermediate') {
      if (a.subject === 'coding')     { s.CSE += v*3; s['CSE-AI'] += v*2; }
      if (a.subject === 'ai')         { s['CSE-AI'] += v*3; s.AIDS += v*3; }
      if (a.subject === 'data')       { s['CSE-DS'] += v*3; }
      if (a.subject === 'electronics'){ s.ECE += v*3; s.EEE += v*2; s.ECM += v*2; }
      if (a.subject === 'mechanical') { s.MECH += v*3; }
      if (a.subject === 'civil')      { s.CE += v*3; }
      if (a.subject === 'security')   { s['CSE-Cyber'] += v*3; }
    } else {
      if (a.subject === 'webdev' || a.subject === 'coding')   { s.SoftwareDev += v*2; }
      if (a.subject === 'ai' || a.subject === 'deeplearning') { s.AIEngineer += v*3; s.DataScientist += v*2; }
      if (a.subject === 'datascience') { s.DataScientist += v*3; }
      if (a.subject === 'security')    { s.CyberEngineer += v*3; }
      if (a.subject === 'cloud')       { s.CloudEngineer += v*3; }
      if (a.subject === 'embedded' || a.subject === 'circuits') { s.EmbeddedEngineer += v*3; }
    }
  });
  return s;
};

const topPredictions = (scores, level) => {
  const relevant =
    level === '10th'          ? ['MPC','BiPC','MEC','CEC']
    : level === 'intermediate' ? ['CSE','CSE-AI','CSE-DS','CSE-Cyber','ECE','EEE','MECH','CE','ECM','AIDS']
    :                            ['SoftwareDev','DataScientist','AIEngineer','CyberEngineer','CloudEngineer','EmbeddedEngineer'];

  const sorted = relevant
    .map(k => ({ key: k, score: scores[k] || 0 }))
    .sort((a, b) => b.score - a.score);

  const max = sorted[0]?.score || 1;
  return {
    recommended: sorted[0]?.key,
    confidence:  Math.min(Math.round((max / (max + 5)) * 100), 95),
    alternatives: sorted.slice(1, 3).map(x => x.key),
  };
};

const geminiAnalysis = async (recommended, confidence, alternatives, educationLevel, domain) => {
  try {
    const model  = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(
      `You are an expert academic counselor for Indian students.
A ${educationLevel} student's assessment result:
  Recommended: ${recommended} (confidence ${confidence}%)
  Alternatives: ${alternatives.join(', ')}
  Domain: ${domain || 'General'}

Write 3–4 motivating sentences covering:
1. Why ${recommended} fits them based on India's 2024–2026 job market
2. Specific opportunity or salary range
3. One actionable first step
Keep it warm, practical, under 100 words.`
    );
    return result.response.text();
  } catch {
    return `Based on your responses, ${recommended} looks like an excellent fit. This field is growing rapidly in India with strong placement opportunities. We recommend starting with free online resources and connecting with professionals in this domain to begin your journey.`;
  }
};

/* ── POST /api/prediction/interests ──────────────────────── */
exports.predictFromInterests = async (req, res) => {
  try {
    const { educationLevel, domain, answers } = req.body;
    const scores = scoreInterests(answers, educationLevel);
    const top    = topPredictions(scores, educationLevel);
    const aiText = await geminiAnalysis(top.recommended, top.confidence, top.alternatives, educationLevel, domain);

    const roadmapKey = Object.keys(roadmaps).find(k =>
      k.includes(top.recommended) ||
      (educationLevel === '10th' && k.startsWith('10th_to_' + top.recommended))
    );

    const { rows } = await db.query(
      `INSERT INTO predictions
         (user_id, education_level, prediction_mode, domain, input_data,
          recommended_stream, confidence_score, alternative_options, ai_analysis, roadmap)
       VALUES ($1,$2,'interest',$3,$4,$5,$6,$7,$8,$9)
       RETURNING id, created_at`,
      [
        req.user.id, educationLevel, domain || 'general',
        JSON.stringify({ answers }), top.recommended, top.confidence,
        top.alternatives, aiText,
        roadmapKey ? JSON.stringify(roadmaps[roadmapKey]) : null,
      ]
    );
    const pred = rows[0];

    res.json({
      success: true,
      prediction: {
        id:               pred.id,
        recommendedStream: top.recommended,
        confidenceScore:   top.confidence,
        alternatives:      top.alternatives,
        aiAnalysis:        aiText,
        roadmap:           roadmapKey ? roadmaps[roadmapKey] : null,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

/* ── POST /api/prediction/aptitude ───────────────────────── */
exports.predictFromAptitude = async (req, res) => {
  try {
    const { educationLevel, domain, scores } = req.body;
    const aiText = await geminiAnalysis(domain, 80, [], educationLevel, domain);

    const { rows } = await db.query(
      `INSERT INTO predictions
         (user_id, education_level, prediction_mode, domain, input_data,
          recommended_stream, confidence_score, ai_analysis)
       VALUES ($1,$2,'aptitude',$3,$4,$5,$6,$7)
       RETURNING id`,
      [req.user.id, educationLevel, domain, JSON.stringify({ scores }),
       domain, 80, aiText]
    );

    res.json({
      success: true,
      prediction: { id: rows[0].id, recommendedStream: domain, confidenceScore: 80, aiAnalysis: aiText },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ── GET /api/prediction/saved ───────────────────────────── */
exports.getSavedPredictions = async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT id, education_level, prediction_mode, domain,
              recommended_stream, confidence_score, alternative_options,
              ai_analysis, roadmap, created_at
       FROM predictions WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20`,
      [req.user.id]
    );
    res.json({ success: true, predictions: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ── GET /api/prediction/:id ─────────────────────────────── */
exports.getPredictionById = async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM predictions WHERE id = $1 AND user_id = $2`,
      [req.params.id, req.user.id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Not found' });

    // shape into frontend-expected format
    const p = rows[0];
    res.json({
      success: true,
      prediction: {
        ...p,
        educationLevel:   p.education_level,
        predictionMode:   p.prediction_mode,
        result: {
          recommendedStream:  p.recommended_stream,
          confidenceScore:    p.confidence_score,
          alternativeOptions: p.alternative_options || [],
          aiAnalysis:         p.ai_analysis,
          roadmap:            p.roadmap,
        },
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ── POST /api/prediction/chat ───────────────────────────── */
exports.chatWithAI = async (req, res) => {
  try {
    const { message, context } = req.body;
    const model  = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(
      `You are EduBot, a friendly AI academic counselor for Indian students.
Context: ${JSON.stringify(context || {})}
Student: ${message}
Reply helpfully in under 180 words. Mention relevant Indian colleges, salaries, or entrance exams where useful.`
    );
    res.json({ success: true, reply: result.response.text() });
  } catch {
    res.json({ success: true, reply: "I'm having trouble connecting right now. Please try again in a moment!" });
  }
};
