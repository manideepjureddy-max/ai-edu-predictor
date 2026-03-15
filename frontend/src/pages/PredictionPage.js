import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { predAPI, testsAPI } from '../utils/api';
import toast from 'react-hot-toast';

var EDU_LEVELS = [
  { value: '10th', label: '10th Class', emoji: '📖', desc: 'Find your Intermediate stream' },
  { value: 'intermediate', label: 'Intermediate', emoji: '🎒', desc: 'Find your B.Tech branch' },
  { value: 'btech', label: 'B.Tech', emoji: '🎓', desc: 'Find your career path' }
];

var DOMAINS = {
  '10th': [{ value: 'general', label: 'General', emoji: '🎯' }],
  intermediate: [
    { value: 'MPC', label: 'MPC', emoji: '⚡' },
    { value: 'BiPC', label: 'BiPC', emoji: '🧬' },
    { value: 'MEC', label: 'MEC', emoji: '📈' },
    { value: 'CEC', label: 'CEC', emoji: '⚖️' }
  ],
  btech: [
    { value: 'CSE', label: 'CSE', emoji: '💻' },
    { value: 'CSE-AI', label: 'CSE-AI', emoji: '🤖' },
    { value: 'ECE', label: 'ECE', emoji: '📡' },
    { value: 'MECH', label: 'MECH', emoji: '⚙️' },
    { value: 'CE', label: 'Civil', emoji: '🏗️' }
  ]
};

export default function PredictionPage() {
  var auth = useAuth();
  var nav = useNavigate();
  var [step, setStep] = useState(1);
  var [level, setLevel] = useState(auth.user ? auth.user.educationLevel : '');
  var [domain, setDomain] = useState('');
  var [mode, setMode] = useState('');
  var [questions, setQuestions] = useState([]);
  var [answers, setAnswers] = useState({});
  var [loading, setLoading] = useState(false);

  function fetchQuestions() {
    setLoading(true);
    testsAPI.getQuestions({ educationLevel: level, domain: level === '10th' ? undefined : domain, testType: mode })
      .then(function(r) {
        setQuestions(r.data.questions || []);
        setAnswers({});
        setStep(4);
      })
      .catch(function() { toast.error('Failed to load questions'); })
      .finally(function() { setLoading(false); });
  }

  function handleSubmit() {
    setStep(5);
    setLoading(true);
    var qList = questions;

    function doPredict() {
      if (mode === 'interest') {
        var formatted = qList.map(function(q) {
          return { questionId: q.id, subject: q.subject, value: answers[q.id] !== undefined ? answers[q.id] : 1 };
        });
        return predAPI.fromInterests({ educationLevel: level, domain: domain, answers: formatted });
      } else {
        var fmt = qList.map(function(q) {
          return { questionId: q.id, selectedOption: answers[q.id] !== undefined ? answers[q.id] : -1 };
        });
        return testsAPI.submitTest({ educationLevel: level, domain: domain, answers: fmt, testType: 'aptitude' })
          .then(function(r) {
            return predAPI.fromAptitude({ educationLevel: level, domain: domain, testResults: fmt, scores: r.data.result ? r.data.result.subjectWise : {} });
          });
      }
    }

    doPredict()
      .then(function(r) {
        toast.success('🎯 Prediction generated!');
        nav('/result/' + r.data.prediction.id);
      })
      .catch(function() {
        toast.error('Prediction failed. Try again.');
        setStep(4);
      })
      .finally(function() { setLoading(false); });
  }

  var pct = (step / 5) * 100;

  function OptionBtn(props) {
    return React.createElement('button', {
      type: 'button',
      onClick: function() { setAnswers(function(p) { var n = Object.assign({}, p); n[props.qid] = props.val; return n; }); },
      style: {
        padding: props.block ? '0.6rem 1rem' : '0.55rem 0.8rem',
        borderRadius: '10px', border: 'none', cursor: 'pointer', width: props.block ? '100%' : 'auto',
        textAlign: props.block ? 'left' : 'center',
        background: answers[props.qid] === props.val ? 'rgba(108,99,255,0.2)' : 'var(--glass)',
        color: answers[props.qid] === props.val ? 'var(--purple-light)' : 'var(--text2)',
        border: answers[props.qid] === props.val ? '2px solid rgba(108,99,255,0.4)' : '1px solid var(--border)',
        fontWeight: answers[props.qid] === props.val ? 700 : 500,
        transition: 'all 0.2s', fontFamily: 'var(--font2)', fontSize: '0.88rem',
        marginBottom: props.block ? '6px' : 0
      }
    }, props.label);
  }

  return (
    React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '5rem 1.5rem 2rem' } },
      React.createElement('div', { style: { maxWidth: '680px', margin: '0 auto' } },

        React.createElement('div', { style: { textAlign: 'center', marginBottom: '2rem' } },
          React.createElement('span', { className: 'badge badge-p', style: { marginBottom: '0.75rem' } }, '🎯 AI Prediction Wizard'),
          React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.8rem', marginBottom: '6px' } },
            'Find Your ', React.createElement('span', { className: 'gt' }, 'Perfect Stream')
          ),
          React.createElement('p', { style: { color: 'var(--text2)' } }, 'Answer a few questions and our AI predicts the best path for you')
        ),

        React.createElement('div', { className: 'pbar', style: { marginBottom: '2rem' } },
          React.createElement('div', { className: 'pfill', style: { width: pct + '%' } })
        ),

        /* STEP 1: Level */
        step === 1 && React.createElement('div', { className: 'afu' },
          React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '1.15rem' } }, 'What is your current education level?'),
          EDU_LEVELS.map(function(opt) {
            var active = level === opt.value;
            return React.createElement('div', {
              key: opt.value,
              onClick: function() { setLevel(opt.value); },
              style: { padding: '1.2rem 1.5rem', borderRadius: 'var(--r3)', border: '2px solid ' + (active ? '#6C63FF' : 'var(--border)'), background: active ? 'rgba(108,99,255,0.1)' : 'var(--bg-card)', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }
            },
              React.createElement('span', { style: { fontSize: '2rem' } }, opt.emoji),
              React.createElement('div', { style: { flex: 1 } },
                React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', fontSize: '1.05rem' } }, opt.label),
                React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.85rem' } }, opt.desc)
              ),
              active && React.createElement('span', { style: { color: '#6C63FF', fontSize: '1.3rem' } }, '✓')
            );
          }),
          React.createElement('button', {
            onClick: function() {
              if (!level) { toast.error('Select a level'); return; }
              if (level === '10th') { setDomain('general'); setStep(3); } else { setStep(2); }
            },
            className: 'btn btn-p', style: { width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.9rem' }
          }, 'Continue →')
        ),

        /* STEP 2: Domain */
        step === 2 && React.createElement('div', { className: 'afu' },
          React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '1.15rem' } }, 'Select your current stream / domain'),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '0.75rem', marginBottom: '1.5rem' } },
            (DOMAINS[level] || []).map(function(d) {
              var active = domain === d.value;
              return React.createElement('div', {
                key: d.value,
                onClick: function() { setDomain(d.value); },
                style: { padding: '1.25rem', borderRadius: 'var(--r3)', textAlign: 'center', cursor: 'pointer', border: '2px solid ' + (active ? '#6C63FF' : 'var(--border)'), background: active ? 'rgba(108,99,255,0.1)' : 'var(--bg-card)', transition: 'all 0.2s' }
              },
                React.createElement('div', { style: { fontSize: '2rem', marginBottom: '6px' } }, d.emoji),
                React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', fontSize: '1rem' } }, d.label)
              );
            })
          ),
          React.createElement('div', { style: { display: 'flex', gap: '0.75rem' } },
            React.createElement('button', { onClick: function() { setStep(1); }, className: 'btn btn-g', style: { flex: 1, justifyContent: 'center' } }, '← Back'),
            React.createElement('button', { onClick: function() { if (!domain) { toast.error('Select domain'); return; } setStep(3); }, className: 'btn btn-p', style: { flex: 2, justifyContent: 'center' } }, 'Continue →')
          )
        ),

        /* STEP 3: Mode */
        step === 3 && React.createElement('div', { className: 'afu' },
          React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.15rem' } }, 'How would you like to be assessed?'),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.25rem 0' } },
            [
              { value: 'interest', icon: '💭', title: 'Interest Based', desc: 'Rate your interest in topics. Takes ~5 min.', color: '#6C63FF' },
              { value: 'aptitude', icon: '🧪', title: 'Aptitude Test', desc: 'MCQ on relevant subjects. More accurate.', color: '#43E97B' }
            ].map(function(m) {
              var active = mode === m.value;
              return React.createElement('div', {
                key: m.value,
                onClick: function() { setMode(m.value); },
                style: { padding: '1.5rem', borderRadius: 'var(--r3)', cursor: 'pointer', border: '2px solid ' + (active ? m.color : 'var(--border)'), background: active ? m.color + '12' : 'var(--bg-card)', transition: 'all 0.2s', textAlign: 'center' }
              },
                React.createElement('div', { style: { fontSize: '2.5rem', marginBottom: '0.75rem' } }, m.icon),
                React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', color: active ? m.color : 'var(--text)', marginBottom: '6px' } }, m.title),
                React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.82rem', lineHeight: 1.5 } }, m.desc)
              );
            })
          ),
          React.createElement('div', { style: { display: 'flex', gap: '0.75rem' } },
            React.createElement('button', { onClick: function() { setStep(level === '10th' ? 1 : 2); }, className: 'btn btn-g', style: { flex: 1, justifyContent: 'center' } }, '← Back'),
            React.createElement('button', { onClick: function() { if (!mode) { toast.error('Select mode'); return; } fetchQuestions(); }, disabled: loading, className: 'btn btn-p', style: { flex: 2, justifyContent: 'center' } },
              loading ? '⏳ Loading...' : 'Load Questions →'
            )
          )
        ),

        /* STEP 4: Questions */
        step === 4 && React.createElement('div', { className: 'afu' },
          React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' } },
            React.createElement('div', null,
              React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, fontSize: '1.15rem' } }, mode === 'interest' ? '💭 Interest Assessment' : '🧪 Aptitude Test'),
              React.createElement('p', { style: { color: 'var(--text2)', fontSize: '0.82rem' } }, Object.keys(answers).length + ' / ' + questions.length + ' answered')
            ),
            React.createElement('span', { className: 'badge badge-p' }, (domain || level).toUpperCase())
          ),

          questions.map(function(q, i) {
            return React.createElement('div', { key: q.id, className: 'card', style: { marginBottom: '1rem' } },
              React.createElement('div', { style: { display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.75rem' } },
                React.createElement('span', { style: { background: answers[q.id] !== undefined ? 'rgba(67,233,123,0.18)' : 'var(--glass)', color: answers[q.id] !== undefined ? '#43E97B' : 'var(--text3)', padding: '0.18rem 0.55rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, flexShrink: 0, border: answers[q.id] !== undefined ? '1px solid rgba(67,233,123,0.3)' : '1px solid var(--border)' } }, 'Q' + (i + 1)),
                React.createElement('p', { style: { fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5, flex: 1 } }, q.text)
              ),
              mode === 'interest' ? (
                React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '6px' } },
                  (q.options || []).map(function(opt, oi) {
                    var vals = [3,2,1,0];
                    return React.createElement(OptionBtn, { key: oi, qid: q.id, val: vals[oi], label: opt });
                  })
                )
              ) : (
                React.createElement('div', null,
                  (q.options || []).map(function(opt, oi) {
                    return React.createElement(OptionBtn, { key: oi, qid: q.id, val: oi, label: ['A','B','C','D'][oi] + '. ' + opt, block: true });
                  })
                )
              )
            );
          }),

          React.createElement('div', { style: { display: 'flex', gap: '0.75rem', marginTop: '1rem' } },
            React.createElement('button', { onClick: function() { setStep(3); }, className: 'btn btn-g', style: { flex: 1, justifyContent: 'center' } }, '← Back'),
            React.createElement('button', { onClick: handleSubmit, className: 'btn btn-p', style: { flex: 2, justifyContent: 'center', padding: '0.9rem' } }, '⚡ Generate AI Prediction')
          )
        ),

        /* STEP 5: Processing */
        step === 5 && React.createElement('div', { style: { textAlign: 'center', padding: '4rem 2rem', animation: 'fadeUp 0.4s ease' } },
          React.createElement('div', { style: { width: '76px', height: '76px', borderRadius: '50%', margin: '0 auto 1.5rem', border: '4px solid rgba(108,99,255,0.2)', borderTopColor: '#6C63FF', animation: 'spin 1s linear infinite' } }),
          React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '8px' } }, 'AI is analyzing your responses...'),
          React.createElement('p', { style: { color: 'var(--text2)' } }, 'Gemini AI is generating your personalized prediction'),
          React.createElement('div', { style: { marginTop: '1.5rem' } },
            ['Analyzing responses...', 'Checking market trends...', 'Building career roadmap...', 'Preparing results...'].map(function(msg, i) {
              return React.createElement('div', { key: i, style: { display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', color: 'var(--text3)', fontSize: '0.85rem', marginBottom: '8px', animation: 'fadeUp 0.5s ease ' + (i * 0.3) + 's both' } },
                React.createElement('div', { style: { width: '6px', height: '6px', borderRadius: '50%', background: '#6C63FF', animation: 'pulse 1s infinite' } }),
                msg
              );
            })
          )
        )
      )
    )
  );
}
