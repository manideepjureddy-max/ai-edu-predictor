# 🚀 Render Deployment Guide — EduPath AI

If your frontend build is failing on Render, ensure your **Static Site** settings exactly match the following:

## Frontend (Static Site) Settings
- **Root Directory:** `frontend`  <-- [CRITICAL]
- **Build Command:** `CI=false npm run build`
- **Publish Directory:** `build`

### Environment Variables (Frontend)
- `REACT_APP_API_URL`: `https://your-backend-url.onrender.com/api`
- `NODE_VERSION`: `20`

---

## Backend (Web Service) Settings
- **Root Directory:** `backend`
- **Build Command:** `npm install`
- **Start Command:** `node server.js`

### Environment Variables (Backend)
- `DATABASE_URL`: Your PostgreSQL string (Neon/Render DB)
- `JWT_SECRET`: A random string
- `GEMINI_API_KEY`: Your Gemini API key
- `FRONTEND_URL`: `https://your-frontend-url.onrender.com`
- `NODE_ENV`: `production`

---

## Troubleshooting
1. **Root Directory:** If you didn't set "Root Directory" to `frontend`, Render will fail to find `npm`.
2. **PostgreSQL:** If using Render's database, ensure the "Internal Database URL" is used or add the IP to the allow-list.
