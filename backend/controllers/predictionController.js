const { GoogleGenerativeAI } = require('@google/generative-ai');
const db        = require('../config/db');
const roadmaps  = require('../utils/roadmapsData');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/* ── helpers ──────────────────────────────────────────────── */
/* ── helpers ──────────────────────────────────────────────── */

const getAIRecommendation = async (educationLevel, domain, answers, rawKeys) => {
  let roadmapKeys = rawKeys;
  if (educationLevel === '10th') roadmapKeys = rawKeys.filter(k => k.startsWith('10th_to_'));
  else if (educationLevel === 'intermediate') roadmapKeys = rawKeys.filter(k => k.startsWith('Inter_to_'));
  else if (educationLevel === 'mbbs') roadmapKeys = rawKeys.filter(k => k.startsWith('MBBS_to_'));
  else if (educationLevel === 'barch') roadmapKeys = rawKeys.filter(k => k.startsWith('Degree_to_'));
  else roadmapKeys = rawKeys.filter(k => k.startsWith('BTech_to_'));

  try {

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
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
1. Analyze the answers to understand the student's highest strengths and specific interests.
2. Select the most relevant roadmap key from the list above. 
CRITICAL RULE: Do NOT default to AI (Artificial Intelligence) or CSE just because it is popular. If their highest scores/positive answers are in Mechanical/Physics, strictly choose the MECH roadmap. If Civil/Architecture, choose Civil/BArch. If Electronics, choose ECE. ONLY predict AI, Data Science, or CSE if they specifically answered positively about AI or Coding!
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
      const parsed = JSON.parse(match[0]);
      if (!roadmapKeys.includes(parsed.roadmapKey)) {
        console.warn('AI hallucinated invalid key:', parsed.roadmapKey, 'forcing heuristic fallback.');
        throw new Error('AI hallucinated invalid key');
      }
      return parsed;
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
        BTech_IT:0, BTech_EEE:0, BTech_AIDS:0, BTech_ECM:0, BTech_Biotech:0,
        Med_MBBS:0, BSc_Ag:0, BPharm:0, BSc_Nursing:0, Med_BDS:0,
        BBA:0, BCom_Comp:0, Law_LLB:0, BCA:0, BHM:0
      };
      
      answers.forEach(a => {
        const s = a.score || 1;
        const sub = (a.subject || '').toLowerCase();
        
        if (sub === 'coding') { scores.BTech_CSE += s*4; scores.BTech_IT += s*3; scores.BCA += s*2; scores.BTech_AI += s*1; }
        if (sub === 'ai') { scores.BTech_AI += s*4; scores.BTech_AIDS += s*3; scores.BTech_DataScience += s*1; }
        if (sub === 'data') { scores.BTech_DataScience += s*4; scores.BTech_AIDS += s*2; }
        if (sub === 'electronics') { scores.BTech_ECE += s*4; scores.BTech_ECM += s*2; scores.BTech_EEE += s*2; }
        if (sub === 'electrical' || sub === 'power') { scores.BTech_EEE += s*4; }
        if (sub === 'mechanical' || sub === 'machines' || sub === 'physics') { scores.BTech_MECH += s*4; }
        if (sub === 'civil' || sub === 'construction') { scores.BTech_Civil += s*4; scores.BArch += s*2; }
        if (sub === 'security') { scores.BTech_CyberSecurity += s*4; }
        if (sub === 'hardware' || sub === 'embedded') { scores.BTech_ECM += s*4; scores.BTech_ECE += s*2; }
        
        if (sub === 'biology' || sub === 'anatomy' || sub === 'medical') { scores.Med_MBBS += s*3; scores.BPharm += s*2; scores.BSc_Ag += s; scores.BSc_Nursing += s*2; scores.Med_BDS += s*2; scores.BTech_Biotech += s*2;}
        if (sub === 'biotech' || sub === 'research') { scores.BTech_Biotech += s*3; }
        if (sub === 'business' || sub === 'finance' || sub === 'commerce') { scores.BBA += s*3; scores.BCom_Comp += s*2; }
        if (sub === 'law' || sub === 'ethics') { scores.Law_LLB += s*3; }
      });

      let sorted = [];
      if (domain === 'BiPC') {
        sorted = ['Med_MBBS', 'BSc_Ag', 'BPharm', 'BSc_Nursing', 'Med_BDS', 'BTech_Biotech'].sort((a,b) => scores[b] - scores[a]);
      } else if (domain === 'MEC' || domain === 'CEC') {
        sorted = ['BBA', 'BCom_Comp', 'Law_LLB', 'BCA', 'BHM'].sort((a,b) => scores[b] - scores[a]);
      } else {
        // Default MPC
        sorted = ['BTech_CSE', 'BTech_AI', 'BTech_AIDS', 'BTech_DataScience', 'BTech_ECE', 'BTech_EEE', 'BTech_IT', 'BTech_MECH', 'BTech_Civil', 'BTech_CyberSecurity', 'BTech_ECM', 'BArch'].sort((a,b) => scores[b] - scores[a]);
      }

      recommendedStream = sorted[0].replace(/_/g, ' ');
      roadmapKey = `Inter_to_${sorted[0]}`;
      alternatives = [`Inter_to_${sorted[1]}`, `Inter_to_${sorted[2]}`];
      
    } else {
      // B.Tech to Career
      const scores = {
          SoftwareDeveloper: 0, DataScientist: 0, CyberSecurity: 0, CloudArchitect: 0, ProductManager: 0,
          MechanicalEngineer: 0, CivilEngineer: 0, EmbeddedEngineer: 0, AI_Engineer: 0, VLSI_Engineer: 0,
          PowerSystemsEngineer: 0, ChemicalEngineer: 0, AerospaceEngineer: 0, BiotechResearcher: 0, RoboticsEngineer: 0,
          DesignEngineer: 0, ProductionEngineer: 0, MaintenanceEngineer: 0, QualityEngineer: 0, ThermalEngineer: 0,
          EV_Engineer: 0, Mech_GovtJobs: 0, Mech_Entrepreneurship: 0,
          StructuralEngineer: 0, SiteEngineer: 0, ProjectEngineer: 0, QuantitySurveyor: 0, GeotechnicalEngineer: 0,
          EnvironmentalEngineer: 0, TransportationEngineer: 0, WaterResourcesEngineer: 0, SmartCities_Planner: 0,
          Civil_GovtJobs: 0, Civil_Entrepreneurship: 0, GeneralPhysician: 0, Surgeon: 0, Architect: 0, UrbanPlanner: 0
      };
      
      answers.forEach(assessment => {
          const sub = (assessment.subject || assessment.topic || '').toLowerCase();
          const s = assessment.score || 1;
          if (sub.includes('program') || sub.includes('code') || sub.includes('web')) { scores.SoftwareDeveloper += s; scores.CloudArchitect += s; }
          if (sub.includes('data') || sub.includes('statistics') || sub.includes('math')) { scores.DataScientist += s; scores.AI_Engineer += s; }
          if (sub.includes('security') || sub.includes('hack') || sub.includes('network')) { scores.CyberSecurity += s; }
          if (sub.includes('design') || sub.includes('drawing') || sub.includes('cad')) { scores.DesignEngineer += s*2; scores.StructuralEngineer += s; scores.Architect += s*2; scores.UrbanPlanner += s; }
          if (sub.includes('machine') || sub.includes('robot') || sub.includes('mechanic')) { scores.MechanicalEngineer += s; scores.RoboticsEngineer += s; scores.ProductionEngineer += s; }
          if (sub.includes('ev') || sub.includes('electric vehicle') || sub.includes('battery')) { scores.EV_Engineer += s*3; }
          if (sub.includes('govt') || sub.includes('ies') || sub.includes('psu') || sub.includes('exam')) { scores.Mech_GovtJobs += s*2; scores.Civil_GovtJobs += s*2; }
          if (sub.includes('business') || sub.includes('startup') || sub.includes('own')) { scores.Mech_Entrepreneurship += s*2; scores.Civil_Entrepreneurship += s*2; }
          if (sub.includes('building') || sub.includes('infrastructure') || sub.includes('site')) { scores.CivilEngineer += s; scores.SiteEngineer += s*2; }
          if (sub.includes('water') || sub.includes('river') || sub.includes('environment')) { scores.WaterResourcesEngineer += s*2; scores.EnvironmentalEngineer += s*2; }
          if (sub.includes('city') || sub.includes('urban') || sub.includes('smart')) { scores.SmartCities_Planner += s*3; scores.UrbanPlanner += s*3; }
          if (sub.includes('embedded') || sub.includes('circuits') || sub.includes('electronics')) { scores.EmbeddedEngineer += s*3; scores.VLSI_Engineer += s; }
          if (sub.includes('health') || sub.includes('medical') || sub.includes('biology')) { scores.GeneralPhysician += s; scores.Surgeon += s; }
          if (sub.includes('surgery') || sub.includes('anatomy')) { scores.Surgeon += s*2; }
          if (sub.includes('architecture')) { scores.Architect += s*3; }
          if (sub.includes('aero') || sub.includes('aircraft') || sub.includes('flight')) { scores.AerospaceEngineer += s*3; }
          if (sub.includes('chemical') || sub.includes('chemistry')) { scores.ChemicalEngineer += s*3; }
          if (sub.includes('electrical') || sub.includes('power')) { scores.PowerSystemsEngineer += s*3; }
      });
      
      let validKeys = ['SoftwareDeveloper', 'DataScientist', 'CyberSecurity', 'CloudArchitect', 'ProductManager', 'MechanicalEngineer', 'CivilEngineer', 'EmbeddedEngineer', 'AI_Engineer', 'VLSI_Engineer', 'PowerSystemsEngineer', 'ChemicalEngineer', 'AerospaceEngineer', 'BiotechResearcher', 'RoboticsEngineer', 'DesignEngineer', 'ProductionEngineer', 'MaintenanceEngineer', 'QualityEngineer', 'EV_Engineer', 'Mech_GovtJobs', 'Mech_Entrepreneurship', 'StructuralEngineer', 'SiteEngineer', 'ProjectEngineer', 'QuantitySurveyor', 'GeotechnicalEngineer', 'EnvironmentalEngineer', 'TransportationEngineer', 'WaterResourcesEngineer', 'SmartCities_Planner', 'Civil_GovtJobs', 'Civil_Entrepreneurship'];
      
      // Filter the valid career paths heavily based on their current B.Tech branch
      if (educationLevel === 'mbbs') validKeys = ['GeneralPhysician', 'Surgeon'];
      else if (educationLevel === 'barch') validKeys = ['Architect', 'UrbanPlanner'];
      else if (domain === 'MECH' || domain === 'Production') validKeys = ['MechanicalEngineer', 'DesignEngineer', 'ProductionEngineer', 'MaintenanceEngineer', 'QualityEngineer', 'EV_Engineer', 'RoboticsEngineer', 'AerospaceEngineer', 'Mech_GovtJobs', 'Mech_Entrepreneurship', 'ProductManager', 'SoftwareDeveloper'];
      else if (domain === 'CE' || domain === 'Civil') validKeys = ['CivilEngineer', 'StructuralEngineer', 'SiteEngineer', 'ProjectEngineer', 'QuantitySurveyor', 'GeotechnicalEngineer', 'EnvironmentalEngineer', 'TransportationEngineer', 'WaterResourcesEngineer', 'SmartCities_Planner', 'Civil_GovtJobs', 'Civil_Entrepreneurship', 'ProductManager', 'SoftwareDeveloper'];
      else if (domain === 'ECE' || domain === 'EEE' || domain === 'ECM' || domain === 'Instrumentation') {
        validKeys = ['EmbeddedEngineer', 'CloudArchitect', 'SoftwareDeveloper', 'VLSI_Engineer', 'PowerSystemsEngineer', 'RoboticsEngineer'];
        if (domain === 'EEE') validKeys = ['PowerSystemsEngineer', 'EmbeddedEngineer', 'SoftwareDeveloper'];
      }
      else if (domain === 'CSE-AI' || domain === 'CSE-DS' || domain === 'AIDS' || domain === 'AI' || domain === 'DataScience') validKeys = ['DataScientist', 'SoftwareDeveloper', 'ProductManager', 'AI_Engineer', 'RoboticsEngineer'];
      else if (domain === 'CSE' || domain === 'IT' || domain === 'CyberSecurity' || domain === 'CSE-Cyber') validKeys = ['SoftwareDeveloper', 'CloudArchitect', 'CyberSecurity', 'ProductManager', 'DataScientist'];
      else if (domain === 'Chem' || domain === 'Chemical') validKeys = ['ChemicalEngineer', 'ProductManager', 'SoftwareDeveloper'];
      else if (domain === 'Biotech') validKeys = ['BiotechResearcher', 'ProductManager', 'SoftwareDeveloper'];
      else if (domain === 'Aero' || domain === 'Aeronautical') validKeys = ['AerospaceEngineer', 'MechanicalEngineer', 'ProductManager'];
      else if (domain === 'Robotics') validKeys = ['RoboticsEngineer', 'AI_Engineer', 'EmbeddedEngineer', 'SoftwareDeveloper'];
      
      const sorted = validKeys.sort((a,b) => scores[b] - scores[a]);
      
      recommendedStream = sorted[0].replace(/([A-Z])/g, ' $1').trim();
      let prefix = 'BTech_to_';
      if (educationLevel === 'mbbs') prefix = 'MBBS_to_';
      else if (educationLevel === 'barch') prefix = 'Degree_to_';
      
      roadmapKey = `${prefix}${sorted[0]}`;
      alternatives = [`${prefix}${sorted[1]}`];
    }

    // Level-aware default fallback to prevent "Inter student getting 10th roadmap"
    let finalKey = roadmapKeys.includes(roadmapKey) ? roadmapKey : null;
    if (!finalKey) {
      if (educationLevel === '10th') finalKey = '10th_to_MPC';
      else if (educationLevel === 'intermediate') finalKey = 'Inter_to_BTech_CSE';
      else if (educationLevel === 'mbbs') finalKey = 'MBBS_to_GeneralPhysician';
      else if (educationLevel === 'barch') finalKey = 'Degree_to_Architect';
      else finalKey = 'BTech_to_SoftwareDeveloper';
    }

    return {
      recommendedStream,
      roadmapKey: finalKey,
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
    
    const roadmapKeys = Object.keys(roadmaps);
    
    // Convert aptitude percentages (0-100) to scores (0-5) for AI/fallback logic
    const answersForPrediction = Object.keys(scores || {}).map(subject => ({
      subject: subject,
      score: scores[subject] / 20
    }));

    if (answersForPrediction.length === 0) {
      answersForPrediction.push({ subject: domain, score: 5 });
    }

    const recommendation = await getAIRecommendation(educationLevel, domain, answersForPrediction, roadmapKeys);
    const { recommendedStream, roadmapKey, explanation, confidence, alternatives } = recommendation;

    const { rows } = await db.query(
      `INSERT INTO predictions
         (user_id, education_level, prediction_mode, domain, input_data,
          recommended_stream, confidence_score, alternative_options, ai_analysis, roadmap)
       VALUES ($1,$2,'aptitude',$3,$4,$5,$6,$7,$8,$9)
       RETURNING id`,
      [
        req.user.id, educationLevel, domain || 'general',
        JSON.stringify({ scores }), recommendedStream, confidence,
        alternatives, explanation,
        roadmapKey && roadmaps[roadmapKey] ? JSON.stringify(roadmaps[roadmapKey]) : null
      ]
    );

    res.json({
      success: true,
      prediction: { 
        id: rows[0].id, 
        recommendedStream: recommendedStream,
        confidenceScore: confidence,
        alternatives: alternatives,
        aiAnalysis: explanation,
        roadmap: roadmapKey && roadmaps[roadmapKey] ? roadmaps[roadmapKey] : null
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
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
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
    const parsedRows = rows.map(r => ({
      ...r,
      roadmap: typeof r.roadmap === 'string' ? JSON.parse(r.roadmap) : r.roadmap
    }));
    res.json({ success: true, predictions: parsedRows });
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
          roadmap:            typeof p.roadmap === 'string' ? JSON.parse(p.roadmap) : p.roadmap,
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
    const model  = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
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
