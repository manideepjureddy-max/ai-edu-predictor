# 🎓 EduPath AI — AI-Powered Education Stream Predictor

> AI-powered academic guidance platform for Indian students, built with **React + Node.js + PostgreSQL + Google Gemini AI**.

---

## 🗄️ Database: PostgreSQL (zero MongoDB)

This project uses **plain PostgreSQL** via the `pg` driver — no ORM, clean raw SQL.

### Free PostgreSQL hosting options (pick any):

| Provider | Free Tier | URL format |
|----------|-----------|-----------|
| **[Neon.tech](https://neon.tech)** ⭐ | 512 MB, serverless | `postgresql://user:pass@ep-xxx.neon.tech/edupath?sslmode=require` |
| **[Supabase](https://supabase.com)** | 500 MB, 2 projects | `postgresql://postgres:pass@db.xxx.supabase.co:5432/postgres` |
| **[Render](https://render.com)** | 1 GB (90-day free) | auto-set when using Render Postgres add-on |
| **[Railway](https://railway.app)** | $5 credit/month | `postgresql://postgres:pass@containers-xxx.railway.app:port/railway` |
| **[ElephantSQL](https://elephantsql.com)** | 20 MB | `postgresql://user:pass@xxx.db.elephantsql.com/dbname` |

---

## 🚀 Features

- **AI Stream Prediction** — Gemini AI analyzes interests & aptitude
- **Smart MCQ Tests** — Domain-specific banks: MPC, BiPC, CSE-AI, ECE, MECH, CE, etc.
- **Personalized Roadmaps** — 10th → B.Tech → Career with salary info
- **EduBot AI Chatbot** — Powered by Gemini 1.5 Flash
- **Student Dashboard** — Predictions, test history, scores
- **Animated Landing Page** — Typewriter, floating nodes, particle effects

---

## 🏗️ Project Structure

```
ai-edu-predictor/
├── README.md
├── frontend/                    ← Deploy on Vercel
│   ├── public/index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.css            ← Full design system (CSS vars + animations)
│   │   ├── context/AuthContext.js
│   │   ├── utils/api.js
│   │   ├── components/ui/Navbar.js
│   │   └── pages/
│   │       ├── LandingPage.js
│   │       ├── LoginPage.js
│   │       ├── RegisterPage.js
│   │       ├── DashboardPage.js
│   │       ├── PredictionPage.js
│   │       ├── TestPage.js
│   │       ├── RoadmapPage.js
│   │       └── ResultPage.js
│   ├── package.json
│   └── vercel.json
│
└── backend/                     ← Deploy on Render / Railway
    ├── server.js
    ├── config/
    │   ├── db.js                ← pg Pool (PostgreSQL)
    │   └── initDB.js            ← Run once to create tables
    ├── controllers/
    │   ├── authController.js
    │   ├── predictionController.js
    │   └── testsController.js
    ├── middleware/auth.js
    ├── routes/
    │   ├── auth.js
    │   ├── prediction.js
    │   ├── tests.js
    │   ├── roadmap.js
    │   └── dashboard.js
    ├── utils/
    │   ├── questionsBank.js     ← MCQ banks for all domains
    │   └── roadmapsData.js      ← Roadmap JSON for all streams
    ├── package.json
    └── .env.example
```

---

## 🖥️ Run Locally

### Prerequisites
- Node.js 18+
- A free PostgreSQL database (Neon.tech recommended — takes 2 minutes)
- Google Gemini API key (free at [aistudio.google.com](https://aistudio.google.com))

---

### 1. Get a Free PostgreSQL Database (Neon.tech — easiest)

1. Go to [neon.tech](https://neon.tech) → Sign up free
2. Create a new project → name it `edupath`
3. Copy the **Connection String** (looks like `postgresql://user:pass@ep-xxx.neon.tech/edupath?sslmode=require`)
4. Paste it as `DATABASE_URL` in your `.env`

---

### 2. Clone & Install

```bash
git clone https://github.com/yourusername/ai-edu-predictor
cd ai-edu-predictor

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### 3. Configure Environment Variables

**`backend/.env`** (copy from `.env.example`):
```env
DATABASE_URL=postgresql://user:pass@ep-xxx.neon.tech/edupath?sslmode=require
JWT_SECRET=your_random_64_char_secret_here
JWT_EXPIRE=30d
GEMINI_API_KEY=AIzaSy_your_key_here
FRONTEND_URL=http://localhost:3000
PORT=5000
NODE_ENV=development
```

**`frontend/.env`**:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

### 4. Initialise Database Tables (run once)

```bash
cd backend
npm run db:init
```

Expected output:
```
🔧 Initialising database schema…
✅ All tables created (or already exist).

Tables:
 • predictions
 • test_results
 • users
```

---

### 5. Start Development Servers

```bash
# Terminal 1 — Backend
cd backend
npm run dev
# → http://localhost:5000

# Terminal 2 — Frontend
cd frontend
npm start
# → http://localhost:3000
```

---

## ☁️ Deploy to Production

### Backend on Render.com

1. Go to [render.com](https://render.com) → **New → Web Service**
2. Connect GitHub repo, set **Root Directory**: `backend`
3. **Build**: `npm install`  |  **Start**: `node server.js`
4. Add environment variables (from `.env.example`)
5. *(Optional)* Add a **Render PostgreSQL** database → the `DATABASE_URL` is auto-injected
6. After deploy: open the Render **Shell** tab and run:
   ```bash
   node config/initDB.js
   ```

### Frontend on Vercel

1. Go to [vercel.com](https://vercel.com) → **New Project** → import repo
2. **Root Directory**: `frontend`  |  **Framework**: Create React App
3. Environment variable:
   - `REACT_APP_API_URL` = `https://your-render-app.onrender.com/api`
4. Deploy → done!

---

## 🗂️ SQL Schema (auto-created by `npm run db:init`)

```sql
-- users
CREATE TABLE users (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name           VARCHAR(100) NOT NULL,
  email          VARCHAR(255) UNIQUE NOT NULL,
  password_hash  VARCHAR(255) NOT NULL,
  education_level VARCHAR(20) NOT NULL,
  current_stream VARCHAR(50),
  school         VARCHAR(200),
  city           VARCHAR(100),
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- predictions
CREATE TABLE predictions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID REFERENCES users(id) ON DELETE CASCADE,
  education_level     VARCHAR(20),
  prediction_mode     VARCHAR(20),
  domain              VARCHAR(50),
  input_data          JSONB,
  recommended_stream  VARCHAR(100),
  confidence_score    INTEGER,
  alternative_options TEXT[],
  ai_analysis         TEXT,
  roadmap             JSONB,
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- test_results
CREATE TABLE test_results (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID REFERENCES users(id) ON DELETE CASCADE,
  domain           VARCHAR(50),
  education_level  VARCHAR(20),
  test_type        VARCHAR(20),
  answers          JSONB,
  total_correct    INTEGER,
  total_questions  INTEGER,
  percentage       INTEGER,
  subject_wise     JSONB,
  time_taken_secs  INTEGER,
  completed_at     TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router v6 |
| Styling | Custom CSS with CSS Variables & Keyframe animations |
| Backend | Node.js + Express.js |
| **Database** | **PostgreSQL** via `pg` driver (no ORM) |
| Auth | JWT — bcryptjs password hashing |
| AI | Google Gemini 1.5 Flash (Free tier) |
| Security | Helmet, CORS, express-rate-limit |

---

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | ✗ | Register |
| POST | `/api/auth/login` | ✗ | Login |
| GET | `/api/auth/me` | ✓ | Current user |
| PUT | `/api/auth/profile` | ✓ | Update profile |
| GET | `/api/tests/questions` | ✓ | Get MCQs by domain |
| POST | `/api/tests/submit` | ✓ | Submit test |
| GET | `/api/tests/history` | ✓ | Test history |
| POST | `/api/prediction/interests` | ✓ | Predict from interests |
| POST | `/api/prediction/aptitude` | ✓ | Predict from test |
| GET | `/api/prediction/saved` | ✓ | Saved predictions |
| GET | `/api/prediction/:id` | ✓ | Single prediction |
| POST | `/api/prediction/chat` | ✓ | EduBot AI chat |
| GET | `/api/roadmap/all` | ✓ | All roadmaps |
| GET | `/api/roadmap/:key` | ✓ | Single roadmap |
| GET | `/api/dashboard/stats` | ✓ | Dashboard stats |
| GET | `/api/health` | ✗ | Health check |

---

## 📝 License

MIT — free to use and modify.

**Built with ❤️ for Indian students | Google Gemini AI + PostgreSQL**
