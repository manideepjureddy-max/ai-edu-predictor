import axios from 'axios';

var BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

var api = axios.create({ baseURL: BASE });

api.interceptors.request.use(function(config) {
  var t = localStorage.getItem('edu_token');
  if (t) config.headers['Authorization'] = 'Bearer ' + t;
  return config;
});

api.interceptors.response.use(
  function(res) { return res; },
  function(err) {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem('edu_token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export var authAPI = {
  login: function(d) { return api.post('/auth/login', d); },
  register: function(d) { return api.post('/auth/register', d); },
  getMe: function() { return api.get('/auth/me'); },
  updateProfile: function(d) { return api.put('/auth/profile', d); }
};

if (process.env.NODE_ENV === 'production' && !process.env.REACT_APP_API_URL) {
  console.warn('⚠️ REACT_APP_API_URL is not set. API calls will likely fail in production. Set it in your Render dashboard.');
}

export var predAPI = {
  fromInterests: function(d) { return api.post('/predict/interests', d); },
  fromAptitude: function(d) { return api.post('/predict/aptitude', d); },
  getSaved: function() { return api.get('/predict/saved'); },
  getById: function(id) { return api.get('/predict/' + id); },
  chat: function(d) { return api.post('/predict/chat', d); }
};

export var testsAPI = {
  getQuestions: function(p) { return api.get('/tests/questions', { params: p }); },
  submitTest: function(d) { return api.post('/tests/submit', d); },
  getHistory: function() { return api.get('/tests/history'); }
};

export var roadmapAPI = {
  getAll: function() { return api.get('/roadmap/all'); },
  getByKey: function(k) { return api.get('/roadmap/' + k); }
};

export var dashAPI = {
  getStats: function() { return api.get('/dashboard/stats'); }
};

export default api;
