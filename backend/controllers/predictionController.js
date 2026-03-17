const { GoogleGenerativeAI } = require('@google/generative-ai');
const db        = require('../config/db');
const roadmaps  = require('../utils/roadmapsData');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/* ── helpers ──────────────────────────────────────────────── */
/* ── helpers ──────────────────────────────────────────────── */

const getAIRecommendation = async (educationLevel, domain, answers, roadmapKeys) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `
You are an expert academic counselor for Indian students.
Based on the student's interest assessment, select the BEST educational/career roadmap from the provided list.

STUDENT PROFILE:
- Education Level: ${educationLevel}
- Current domain: ${domain || 'General'}
- Assessment Answers: ${JSON.stringify(answers)}

AVAILABLE ROADMAPS (Keys):
${roadmapKeys.join(', ')}

DIRECTIONS:
1. Analyze the answers to understand the student's strengths and interests.
2. Select the most relevant roadmap key from the list above.
3. Provide a friendly 3-4 sentence explanation for this recommendation.
4. Output your response ONLY as a JSON object with this exact structure:
{
  "recommendedStream": "A human-readable name for the stream",
  "roadmapKey": "The exact matching key from the list",
  "explanation": "Your 3-4 sentence explanation",
  "confidence": 85,
  "alternatives": ["AlternativeKey1", "AlternativeKey2"]
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      return JSON.parse(match[0]);
    }
    throw new Error('Invalid AI response');
  } catch (err) {
    console.error('AI Rec Error (using heuristic fallback):', err.message);
    
    // HEURISTIC FALLBACK: Reliable even if AI fails
    let recommendedStream = domain || 'General Stream';
    let roadmapKey = '';
    let alternatives = [];
    
    if (educationLevel === '10th') {
      const scores = { MPC:0, BiPC:0, MEC:0, CEC:0 };
      answers.forEach(a => {
        const s = a.score || 1;
        const sub = (a.subject || '').toLowerCase();
        if (sub === 'math' || sub === 'logic') { scores.MPC += s*2; scores.MEC += s; }
        if (sub === 'biology' || sub === 'medical') { scores.BiPC += s*3; }
        if (sub === 'science') { scores.MPC += s; scores.BiPC += s; }
        if (sub === 'business' || sub === 'commerce') { scores.MEC += s*2; scores.CEC += s*2; }
        if (sub === 'social' || sub === 'civics') { scores.CEC += s*3; }
      });
      const sorted = Object.keys(scores).sort((a,b) => scores[b] - scores[a]);
      recommendedStream = sorted[0];
      roadmapKey = `10th_to_${recommendedStream}`;
      alternatives = [`10th_to_${sorted[1]}`];
    } else if (educationLevel === 'intermediate') {
      const scores = { 
        BTech_CSE:0, BTech_AI:0, BTech_DataScience:0, BTech_CyberSecurity:0, BTech_ECE:0, BTech_MECH:0, BTech_Civil:0, BArch:0,
        Med_MBBS:0, BSc_Ag:0, BPharm:0, BSc_Nursing:0, Med_BDS:0,
        BBA:0, BCom_Comp:0, Law_LLB:0, BCA:0, BHM:0
      };
      
      answers.forEach(a => {
        const s = a.score || 1;
        const sub = (a.subject || '').toLowerCase();
        
        if (sub === 'coding') { scores.BTech_CSE += s*3; scores.BTech_AI += s*2; scores.BCA += s*2; }
        if (sub === 'ai') { scores.BTech_AI += s*3; scores.BTech_DataScience += s*2; }
        if (sub === 'data') { scores.BTech_DataScience += s*3; }
        if (sub === 'electronics') { scores.BTech_ECE += s*3; }
        if (sub === 'mechanical' || sub === 'machines') { scores.BTech_MECH += s*3; }
        if (sub === 'civil' || sub === 'construction') { scores.BTech_Civil += s*3; scores.BArch += s*2; }
        if (sub === 'security') { scores.BTech_CyberSecurity += s*3; }
        
        if (sub === 'biology' || sub === 'anatomy' || sub === 'medical') { scores.Med_MBBS += s*3; scores.BPharm += s*2; scores.BSc_Ag += s; scores.BSc_Nursing += s*2; scores.Med_BDS += s*2;}
        if (sub === 'business' || sub === 'finance' || sub === 'commerce') { scores.BBA += s*3; scores.BCom_Comp += s*2; }
        if (sub === 'law' || sub === 'ethics') { scores.Law_LLB += s*3; }
      });

      let sorted = [];
      if (domain === 'BiPC') {
        sorted = ['Med_MBBS', 'BSc_Ag', 'BPharm', 'BSc_Nursing', 'Med_BDS'].sort((a,b) => scores[b] - scores[a]);
      } else if (domain === 'MEC' || domain === 'CEC') {
        sorted = ['BBA', 'BCom_Comp', 'Law_LLB', 'BCA', 'BHM'].sort((a,b) => scores[b] - scores[a]);
      } else {
        // Default MPC
        sorted = ['BTech_CSE', 'BTech_AI', 'BTech_DataScience', 'BTech_ECE', 'BTech_MECH', 'BTech_Civil', 'BTech_CyberSecurity', 'BArch'].sort((a,b) => scores[b] - scores[a]);
      }

      recommendedStream = sorted[0].replace(/_/g, ' ');
      roadmapKey = `Inter_to_${sorted[0]}`;
      alternatives = [`Inter_to_${sorted[1]}`, `Inter_to_${sorted[2]}`];
      
    } else {
      // B.Tech to Career
      const scores = { SoftwareDeveloper:0, DataScientist:0, CyberSecurity:0, CloudArchitect:0, ProductManager:0, MechanicalEngineer:0, CivilEngineer:0, EmbeddedEngineer:0 };
      answers.forEach(a => {
          const s = a.score || 1;
          const sub = (a.subject || '').toLowerCase();
          
          if (sub === 'webdev' || sub === 'coding' || sub === 'software') { scores.SoftwareDeveloper += s*3; }
          if (sub === 'ai' || sub === 'deeplearning') { scores.DataScientist += s*3; }
          if (sub === 'datascience' || sub === 'data') { scores.DataScientist += s*3; }
          if (sub === 'security' || sub === 'cyber') { scores.CyberSecurity += s*3; }
          if (sub === 'cloud') { scores.CloudArchitect += s*3; }
          if (sub === 'management' || sub === 'business') { scores.ProductManager += s*3; }
          if (sub === 'mechanical' || sub === 'machines') { scores.MechanicalEngineer += s*3; }
          if (sub === 'civil' || sub === 'construction') { scores.CivilEngineer += s*3; }
          if (sub === 'embedded' || sub === 'circuits' || sub === 'electronics') { scores.EmbeddedEngineer += s*3; }
      });
      
      let validKeys = ['SoftwareDeveloper', 'DataScientist', 'CyberSecurity', 'CloudArchitect', 'ProductManager', 'MechanicalEngineer', 'CivilEngineer', 'EmbeddedEngineer'];
      
      // Filter the valid career paths heavily based on their current B.Tech branch
      if (domain === 'MECH') validKeys = ['MechanicalEngineer', 'ProductManager', 'SoftwareDeveloper'];
      else if (domain === 'CE' || domain === 'Civil') validKeys = ['CivilEngineer', 'ProductManager', 'SoftwareDeveloper'];
      else if (domain === 'ECE' || domain === 'EEE') validKeys = ['EmbeddedEngineer', 'CloudArchitect', 'SoftwareDeveloper'];
      else if (domain === 'CSE-AI' || domain === 'CSE-DS' || domain === 'AIDS') validKeys = ['DataScientist', 'SoftwareDeveloper', 'ProductManager'];
      else if (domain === 'CSE') validKeys = ['SoftwareDeveloper', 'CloudArchitect', 'CyberSecurity', 'ProductManager'];
      
      const sorted = validKeys.sort((a,b) => scores[b] - scores[a]);
      
      recommendedStream = sorted[0].replace(/([A-Z])/g, ' $1').trim();
      roadmapKey = `BTech_to_${sorted[0]}`;
      alternatives = [`BTech_to_${sorted[1]}`];
    }

    return {
      recommendedStream,
      roadmapKey: roadmapKeys.includes(roadmapKey) ? roadmapKey : roadmapKeys[0],
      explanation: "Our analysis suggests this path matches your strengths. We recommend exploring the detailed modules in the roadmap below to start your journey.",
      confidence: 80,
      alternatives: alternatives.slice(0, 2).filter(k => roadmapKeys.includes(k))
    };
  }
};

/* ── POST /api/prediction/interests ──────────────────────── */
exports.predictFromInterests = async (req, res) => {
  try {
    const { educationLevel, domain, answers } = req.body;
    const roadmapKeys = Object.keys(roadmaps);
    
    const recommendation = await getAIRecommendation(educationLevel, domain, answers, roadmapKeys);
    const { recommendedStream, roadmapKey, explanation, confidence, alternatives } = recommendation;

    const { rows } = await db.query(
      `INSERT INTO predictions
         (user_id, education_level, prediction_mode, domain, input_data,
          recommended_stream, confidence_score, alternative_options, ai_analysis, roadmap)
       VALUES ($1,$2,'interest',$3,$4,$5,$6,$7,$8,$9)
       RETURNING id, created_at`,
      [
        req.user.id, educationLevel, domain || 'general',
        JSON.stringify({ answers }), recommendedStream, confidence,
        alternatives, explanation,
        roadmaps[roadmapKey] ? JSON.stringify(roadmaps[roadmapKey]) : null,
      ]
    );
    const pred = rows[0];

    res.json({
      success: true,
      prediction: {
        id:               pred.id,
        recommendedStream: recommendedStream,
        confidenceScore:   confidence,
        alternatives:      alternatives,
        aiAnalysis:        explanation,
        roadmap:           roadmaps[roadmapKey] || null,
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
    
    // For aptitude, the domain IS the recommendation (the test was for that domain)
    const roadmapKeys = Object.keys(roadmaps);
    const roadmapKey = roadmapKeys.find(k => k === domain || k.includes(domain)) || 
                     roadmapKeys.find(k => k.toLowerCase().includes(domain.toLowerCase()));

    const aiText = await geminiAnalysis(domain, 85, [], educationLevel, domain);

    const { rows } = await db.query(
      `INSERT INTO predictions
         (user_id, education_level, prediction_mode, domain, input_data,
          recommended_stream, confidence_score, ai_analysis, roadmap)
       VALUES ($1,$2,'aptitude',$3,$4,$5,$6,$7,$8)
       RETURNING id`,
      [req.user.id, educationLevel, domain, JSON.stringify({ scores }),
       domain, 85, aiText, roadmapKey ? JSON.stringify(roadmaps[roadmapKey]) : null]
    );

    res.json({
      success: true,
      prediction: { 
        id: rows[0].id, 
        recommendedStream: domain, 
        confidenceScore: 85, 
        aiAnalysis: aiText,
        roadmap: roadmapKey ? roadmaps[roadmapKey] : null
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

/* ── AI Analysis helper (kept for aptitude or simple fallback) ── */
async function geminiAnalysis(recommended, confidence, alternatives, educationLevel, domain) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(
      `You are an expert academic counselor for Indian students.
A ${educationLevel} student's assessment result for ${domain}:
  Recommended: ${recommended} (confidence ${confidence}%)

Write 3–4 motivating sentences covering:
1. Why this fits them based on India's 2024–2026 job market
2. Specific opportunity or salary range
3. One actionable first step
Keep it warm, practical, under 100 words.`
    );
    return result.response.text();
  } catch {
    return `Based on your responses, ${recommended} looks like an excellent fit. This field is growing rapidly in India with strong placement opportunities. We recommend starting with free online resources and connecting with professionals in this domain to begin your journey.`;
  }
}

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
