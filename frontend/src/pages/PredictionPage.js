import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { predAPI, testsAPI } from '../utils/api';
import toast from 'react-hot-toast';

var EDU_LEVELS = [
  { value: '10th', label: '10th Class', emoji: '📖', desc: 'Find your Intermediate stream' },
  { value: 'intermediate', label: 'Intermediate', emoji: '🎒', desc: 'Find your B.Tech branch' },
  { value: 'btech', label: 'B.Tech', emoji: '🎓', desc: 'Find your career path' },
  { value: 'mbbs', label: 'MBBS', emoji: '⚕️', desc: 'Find your career path' },
  { value: 'barch', label: 'B.Arch', emoji: '🏛️', desc: 'Find your career path' }
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
    { value: 'DataScience', label: 'Data Science', emoji: '📊' },
    { value: 'CyberSecurity', label: 'Cyber Security', emoji: '🛡️' },
    { value: 'IT', label: 'IT', emoji: '🌐' },
    { value: 'AIDS', label: 'AI & Data Science', emoji: '🧠' },
    { value: 'ECM', label: 'Electronics & Computer', emoji: '⚡💻' },
    { value: 'ECE', label: 'ECE', emoji: '📡' },
    { value: 'EEE', label: 'EEE', emoji: '🔌' },
    { value: 'MECH', label: 'MECH', emoji: '⚙️' },
    { value: 'Civil', label: 'Civil', emoji: '🏗️' },
    { value: 'Chemical', label: 'Chemical', emoji: '🧪' },
    { value: 'Robotics', label: 'Robotics', emoji: '🦾' },
    { value: 'Aeronautical', label: 'Aeronautical', emoji: '✈️' },
    { value: 'Production', label: 'Production', emoji: '🏭' },
    { value: 'Instrumentation', label: 'Instrumentation', emoji: '🎛️' }
  ],
  mbbs: [
    { value: 'MBBS', label: 'MBBS', emoji: '⚕️' }
  ],
  barch: [
    { value: 'BArch', label: 'B.Arch', emoji: '🏛️' }
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
          return {
            id: q.id,
            question: q.text,
            subject: q.subject,
            answer: q.options[3 - (answers[q.id] !== undefined ? answers[q.id] : 1)], // reverse index for interest 0-3
            score: answers[q.id] !== undefined ? answers[q.id] : 1
          };
        });
        return predAPI.fromInterests({ educationLevel: level, domain: domain, answers: formatted });
      } else {
        var fmt = qList.map(function(q) {
          return {
            id: q.id,
            question: q.text,
            selectedOption: answers[q.id] !== undefined ? answers[q.id] : -1,
            answerText: answers[q.id] !== undefined ? q.options[answers[q.id]] : 'No answer'
          };
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
    var active = answers[props.qid] === props.val;
    return React.createElement('button', {
      type: 'button',
      onClick: function() { setAnswers(function(p) { var n = Object.assign({}, p); n[props.qid] = props.val; return n; }); },
      style: {
        padding: props.block ? '0.75rem 1rem' : '0.6rem 0.8rem',
        borderRadius: '10px', border: '1px solid ' + (active ? 'var(--brand)' : 'var(--border)'), cursor: 'pointer', width: props.block ? '100%' : 'auto',
        textAlign: props.block ? 'left' : 'center',
        background: active ? 'var(--brand-light)' : 'transparent',
        color: active ? 'var(--brand)' : 'var(--text2)',
        fontWeight: active ? 700 : 500,
        transition: 'all 0.2s', fontFamily: 'var(--font1)', fontSize: '0.875rem',
        marginBottom: props.block ? '8px' : 0
      }
    }, props.label);
  }

  return (
    React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '4rem 1.5rem 2rem' } },
      React.createElement('div', { style: { maxWidth: '720px', margin: '0 auto' } },

        React.createElement('div', { style: { textAlign: 'center', marginBottom: '2.5rem' } },
          React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '8px', color: 'var(--text)' } },
            'Find Your ', React.createElement('span', { className: 'gt' }, 'Perfect Stream')
          ),
          React.createElement('p', { style: { color: 'var(--text3)', fontSize: '1rem', fontWeight: 500 } }, 'Answer a few questions and our AI predicts the best path for you')
        ),

        React.createElement('div', { className: 'pbar', style: { marginBottom: '2.5rem', height: '6px' } },
          React.createElement('div', { className: 'pfill', style: { width: pct + '%', background: 'var(--brand)' } })
        ),

        /* STEP 1: Level */
        step === 1 && React.createElement('div', { className: 'afu' },
          React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '1.1rem', color: 'var(--text)' } }, 'Select your education level'),
          EDU_LEVELS.map(function(opt) {
            var active = level === opt.value;
            return React.createElement('div', {
              key: opt.value,
              onClick: function() { setLevel(opt.value); },
              style: { padding: '1.25rem', borderRadius: 'var(--r3)', border: '2px solid ' + (active ? 'var(--brand)' : 'var(--border)'), background: active ? 'var(--brand-light)' : 'var(--bg-card)', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }
            },
              React.createElement('span', { style: { fontSize: '1.75rem' } }, opt.emoji),
              React.createElement('div', { style: { flex: 1 } },
                React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', fontSize: '1rem', color: active ? 'var(--brand)' : 'var(--text)' } }, opt.label),
                React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.8rem' } }, opt.desc)
              ),
              active && React.createElement('span', { style: { color: 'var(--brand)', fontSize: '1.2rem' } }, '✓')
            );
          }),
          React.createElement('button', {
            onClick: function() {
              if (!level) { toast.error('Select a level'); return; }
              if (level === '10th') { setDomain('general'); setStep(3); } else { setStep(2); }
            },
            className: 'btn btn-p', style: { width: '100%', justifyContent: 'center', marginTop: '0.75rem', padding: '0.9rem' }
          }, 'Continue →')
        ),

        /* STEP 2: Domain */
        step === 2 && React.createElement('div', { className: 'afu' },
          React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '1.1rem', color: 'var(--text)' } }, 'Select your current stream'),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '1rem', marginBottom: '1.5rem' } },
            (DOMAINS[level] || []).map(function(d) {
              var active = domain === d.value;
              return React.createElement('div', {
                key: d.value,
                onClick: function() { setDomain(d.value); },
                style: { padding: '1.25rem', borderRadius: 'var(--r3)', textAlign: 'center', cursor: 'pointer', border: '2px solid ' + (active ? 'var(--brand)' : 'var(--border)'), background: active ? 'var(--brand-light)' : 'var(--bg-card)', transition: 'all 0.2s' }
              },
                React.createElement('div', { style: { fontSize: '2rem', marginBottom: '8px' } }, d.emoji),
                React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', fontSize: '1rem', color: active ? 'var(--brand)' : 'var(--text)' } }, d.label)
              );
            })
          ),
          React.createElement('div', { style: { display: 'flex', gap: '12px' } },
            React.createElement('button', { onClick: function() { setStep(1); }, className: 'btn btn-o', style: { flex: 1, justifyContent: 'center' } }, 'Back'),
            React.createElement('button', { onClick: function() { if (!domain) { toast.error('Select domain'); return; } setStep(3); }, className: 'btn btn-p', style: { flex: 2, justifyContent: 'center' } }, 'Continue')
          )
        ),

        /* STEP 3: Mode */
        step === 3 && React.createElement('div', { className: 'afu' },
          React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '1.1rem', color: 'var(--text)', textAlign: 'center' } }, 'Choose Assessment Mode'),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', margin: '0 0 2rem' } },
            [
              { value: 'interest', icon: '💭', title: 'Interest Based', desc: 'Rate your interest in topics. Takes ~5 min.' },
              { value: 'aptitude', icon: '🧪', title: 'Aptitude Test', desc: 'MCQ on relevant subjects. Highly accurate.' }
            ].map(function(m) {
              var active = mode === m.value;
              return React.createElement('div', {
                key: m.value,
                onClick: function() { setMode(m.value); },
                style: { padding: '1.75rem 1.25rem', borderRadius: 'var(--r3)', cursor: 'pointer', border: '2px solid ' + (active ? 'var(--brand)' : 'var(--border)'), background: active ? 'var(--brand-light)' : 'var(--bg-card)', transition: 'all 0.2s', textAlign: 'center' }
              },
                React.createElement('div', { style: { fontSize: '2.5rem', marginBottom: '1rem' } }, m.icon),
                React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', color: active ? 'var(--brand)' : 'var(--text)', marginBottom: '8px', fontSize: '1.1rem' } }, m.title),
                React.createElement('div', { style: { color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.5 } }, m.desc)
              );
            })
          ),
          React.createElement('div', { style: { display: 'flex', gap: '12px' } },
            React.createElement('button', { onClick: function() { setStep(level === '10th' ? 1 : 2); }, className: 'btn btn-o', style: { flex: 1, justifyContent: 'center' } }, 'Back'),
            React.createElement('button', { onClick: function() { if (!mode) { toast.error('Select mode'); return; } fetchQuestions(); }, disabled: loading, className: 'btn btn-p', style: { flex: 2, justifyContent: 'center' } },
              loading ? 'Loading...' : 'Start Assessment'
            )
          )
        ),

        /* STEP 4: Questions */
        step === 4 && React.createElement('div', { className: 'afu' },
          React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' } },
            React.createElement('div', null,
              React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)' } }, mode === 'interest' ? '💭 Interest Score' : '🧪 Aptitude Quiz'),
              React.createElement('p', { style: { color: 'var(--text2)', fontSize: '0.875rem', marginTop: '4px' } }, Object.keys(answers).length + ' of ' + questions.length + ' answered')
            ),
            React.createElement('span', { className: 'badge', style: { background: 'var(--brand-light)', color: 'var(--brand)', fontWeight: 700 } }, (domain || level).toUpperCase())
          ),

          questions.map(function(q, i) {
            var answered = answers[q.id] !== undefined;
            return React.createElement('div', { key: q.id, className: 'card', style: { marginBottom: '1.25rem', padding: '1.5rem', borderColor: answered ? 'var(--border)' : 'var(--border)' } },
              React.createElement('div', { style: { display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' } },
                React.createElement('span', { style: { width: '28px', height: '28px', borderRadius: '8px', background: answered ? 'var(--brand)' : 'var(--bg)', color: answered ? 'white' : 'var(--text3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0, border: '1px solid ' + (answered ? 'var(--brand)' : 'var(--border)') } }, i + 1),
                React.createElement('p', { style: { fontWeight: 600, fontSize: '1rem', lineHeight: 1.5, flex: 1, color: 'var(--text)' } }, q.text)
              ),
              mode === 'interest' ? (
                React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' } },
                  (q.options || []).map(function(opt, oi) {
                    var vals = [3,2,1,0];
                    return React.createElement(OptionBtn, { key: oi, qid: q.id, val: vals[oi], label: opt });
                  })
                )
              ) : (
                React.createElement('div', { style: { display: 'grid', gap: '8px' } },
                  (q.options || []).map(function(opt, oi) {
                    return React.createElement(OptionBtn, { key: oi, qid: q.id, val: oi, label: ['A','B','C','D'][oi] + '. ' + opt, block: true });
                  })
                )
              )
            );
          }),

          React.createElement('div', { style: { display: 'flex', gap: '12px', marginTop: '1.5rem' } },
            React.createElement('button', { onClick: function() { setStep(3); }, className: 'btn btn-o', style: { flex: 1, justifyContent: 'center' } }, 'Back'),
            React.createElement('button', { onClick: handleSubmit, className: 'btn btn-p', style: { flex: 2, justifyContent: 'center', padding: '0.95rem' } }, 'Get AI Results →')
          )
        ),

        /* STEP 5: Processing */
        step === 5 && React.createElement('div', { style: { textAlign: 'center', padding: '4rem 1.5rem' } },
          React.createElement('div', { style: { width: '64px', height: '64px', borderRadius: '50%', margin: '0 auto 2rem', border: '4px solid var(--brand-light)', borderTopColor: 'var(--brand)', animation: 'spin 1s linear infinite' } }),
          React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '12px', color: 'var(--text)' } }, 'AI is analyzing your profile...'),
          React.createElement('p', { style: { color: 'var(--text3)', fontSize: '1.1rem', marginBottom: '2.5rem' } }, 'Generating your personalized education roadmap'),
          React.createElement('div', { style: { maxWidth: '300px', margin: '0 auto' } },
            ['Analyzing preferences...', 'Predicting best streams...', 'Building career path...', 'Fine-tuning results...'].map(function(msg, i) {
              return React.createElement('div', { key: i, style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--text2)', fontSize: '0.9rem', animation: 'fadeUp 0.5s ease ' + (i * 0.4) + 's both' } },
                React.createElement('div', { style: { width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand)', animation: 'pulse 1.5s infinite' } }),
                msg
              );
            })
          )
        )
      )
    )
  );
}
