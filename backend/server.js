const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// Test DB connection on startup
const { pool } = require('./config/db');
pool.query('SELECT 1').then(() => console.log('✅ PostgreSQL connected')).catch(e => {
  console.error('❌ PostgreSQL connection error:', e.message);
});

const authRoutes      = require('./routes/auth');
const predictionRoutes = require('./routes/prediction');
const testRoutes      = require('./routes/tests');
const roadmapRoutes   = require('./routes/roadmap');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

app.use(helmet());
app.use(cors({
  origin: function (origin, callback) {
    const allowed = !origin || 
                    origin === 'http://localhost:3000' || 
                    origin === process.env.FRONTEND_URL || 
                    origin.endsWith('onrender.com');
    if (allowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 150 });
app.use('/api/', limiter);

app.use(express.json({ limit: '10kb' }));

app.use('/api/auth',       authRoutes);
app.use('/api/prediction', predictionRoutes);
app.use('/api/predict',    predictionRoutes); // Alias for robustness
app.use('/api/tests',      testRoutes);
app.use('/api/roadmap',    roadmapRoutes);
app.use('/api/dashboard',  dashboardRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'OK', db: 'PostgreSQL' }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));

module.exports = app;
