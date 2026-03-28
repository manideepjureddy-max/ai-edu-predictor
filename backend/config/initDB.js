/**
 * Run this once to create all tables:
 *   node config/initDB.js
 *
 * Works with: Supabase, Neon.tech, Render Postgres, ElephantSQL, Railway, any pg host
 */
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const { pool } = require('./db');

const schema = `
-- ─────────────────────────────────────────
--  USERS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name           VARCHAR(100) NOT NULL,
  email          VARCHAR(255) UNIQUE NOT NULL,
  password_hash  VARCHAR(255), -- becomes optional for google users
  google_id      VARCHAR(255) UNIQUE,
  is_email_verified BOOLEAN DEFAULT FALSE,
  education_level VARCHAR(20) CHECK (education_level IN ('10th','intermediate','btech')) NOT NULL,
  current_stream VARCHAR(50),
  school         VARCHAR(200),
  city           VARCHAR(100),
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- Migrations for existing tables
ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id VARCHAR(255) UNIQUE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_email_verified BOOLEAN DEFAULT FALSE;
ALTER TABLE users ALTER COLUMN password_hash DROP NOT NULL;

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- ─────────────────────────────────────────
--  PREDICTIONS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS predictions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  education_level     VARCHAR(20) NOT NULL,
  prediction_mode     VARCHAR(20) CHECK (prediction_mode IN ('interest','aptitude')) NOT NULL,
  domain              VARCHAR(50),
  input_data          JSONB,
  recommended_stream  VARCHAR(100),
  confidence_score    INTEGER,
  alternative_options TEXT[],
  career_opportunities TEXT[],
  ai_analysis         TEXT,
  roadmap             JSONB,
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_predictions_user ON predictions(user_id);
CREATE INDEX IF NOT EXISTS idx_predictions_created ON predictions(created_at DESC);

-- ─────────────────────────────────────────
--  TEST RESULTS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS test_results (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  domain           VARCHAR(50) NOT NULL,
  education_level  VARCHAR(20) NOT NULL,
  test_type        VARCHAR(20) DEFAULT 'aptitude',
  answers          JSONB,
  total_correct    INTEGER DEFAULT 0,
  total_questions  INTEGER DEFAULT 0,
  percentage       INTEGER DEFAULT 0,
  subject_wise     JSONB,
  time_taken_secs  INTEGER DEFAULT 0,
  completed_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_test_results_user ON test_results(user_id);
CREATE INDEX IF NOT EXISTS idx_test_results_domain ON test_results(domain);
`;

async function init() {
  const client = await pool.connect();
  try {
    console.log('🔧 Initialising database schema…');
    await client.query(schema);
    console.log('✅ All tables created (or already exist).');
    console.log('\nTables:');
    const { rows } = await client.query(
      "SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename"
    );
    rows.forEach(r => console.log(' •', r.tablename));
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

init();
