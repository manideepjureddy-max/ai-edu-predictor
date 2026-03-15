const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const db      = require('../config/db');

const genToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '30d' });

// POST /api/auth/register
exports.register = async (req, res) => {
  const { name, email, password, educationLevel, currentStream, school, city } = req.body;

  if (!name || !email || !password || !educationLevel)
    return res.status(400).json({ error: 'name, email, password, educationLevel are required' });

  try {
    // duplicate check
    const exists = await db.query('SELECT id FROM users WHERE email = $1', [email.toLowerCase()]);
    if (exists.rows.length)
      return res.status(400).json({ error: 'Email already registered' });

    const hash = await bcrypt.hash(password, 12);

    const { rows } = await db.query(
      `INSERT INTO users (name, email, password_hash, education_level, current_stream, school, city)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, name, email, education_level, current_stream, created_at`,
      [name.trim(), email.toLowerCase().trim(), hash, educationLevel, currentStream || null, school || null, city || null]
    );

    const user = rows[0];
    res.status(201).json({ success: true, token: genToken(user.id), user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// POST /api/auth/login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  try {
    const { rows } = await db.query(
      'SELECT id, name, email, password_hash, education_level, current_stream FROM users WHERE email = $1',
      [email.toLowerCase()]
    );
    const user = rows[0];
    if (!user || !(await bcrypt.compare(password, user.password_hash)))
      return res.status(401).json({ error: 'Invalid email or password' });

    res.json({
      success: true,
      token: genToken(user.id),
      user: { id: user.id, name: user.name, email: user.email, educationLevel: user.education_level, currentStream: user.current_stream },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/auth/me
exports.getMe = async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT id, name, email, education_level AS "educationLevel", current_stream AS "currentStream",
              school, city, created_at
       FROM users WHERE id = $1`,
      [req.user.id]
    );
    if (!rows.length) return res.status(404).json({ error: 'User not found' });

    // also pull saved prediction count
    const pCount = await db.query('SELECT COUNT(*) FROM predictions WHERE user_id = $1', [req.user.id]);
    const tCount = await db.query('SELECT COUNT(*) FROM test_results   WHERE user_id = $1', [req.user.id]);

    res.json({
      success: true,
      user: {
        ...rows[0],
        totalPredictions: parseInt(pCount.rows[0].count),
        totalTests:       parseInt(tCount.rows[0].count),
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/auth/profile
exports.updateProfile = async (req, res) => {
  const { name, school, city, educationLevel, currentStream } = req.body;
  try {
    const { rows } = await db.query(
      `UPDATE users SET name=$1, school=$2, city=$3, education_level=$4, current_stream=$5
       WHERE id=$6
       RETURNING id, name, email, education_level AS "educationLevel", current_stream AS "currentStream", school, city`,
      [name, school || null, city || null, educationLevel, currentStream || null, req.user.id]
    );
    res.json({ success: true, user: rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
