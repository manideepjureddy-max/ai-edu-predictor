import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { testsAPI } from '../utils/api';
import toast from 'react-hot-toast';

var DOMAINS_MAP = {
  '10th': [{ value: 'general', label: 'General Assessment', emoji: '🎯' }],
  intermediate: [
    { value: 'MPC', label: 'MPC - Math, Physics, Chemistry', emoji: '⚡' },
    { value: 'BiPC', label: 'BiPC - Biology, Physics, Chemistry', emoji: '🧬' },
    { value: 'MEC', label: 'MEC - Math, Economics, Commerce', emoji: '📈' },
    { value: 'CEC', label: 'CEC - Commerce, Economics, Civics', emoji: '⚖️' }
  ],
  btech: [
    { value: 'CSE', label: 'CSE - Computer Science', emoji: '💻' },
    { value: 'CSE-AI', label: 'CSE-AI - Artificial Intelligence', emoji: '🤖' },
    { value: 'ECE', label: 'ECE - Electronics & Communication', emoji: '📡' },
    { value: 'MECH', label: 'MECH - Mechanical Engineering', emoji: '⚙️' },
    { value: 'CE', label: 'CE - Civil Engineering', emoji: '🏗️' }
  ]
};

export default function TestPage() {
  var auth = useAuth();
  var [phase, setPhase] = useState('setup');
  var [edLevel, setEdLevel] = useState(auth.user ? auth.user.educationLevel : '10th');
  var [domain, setDomain] = useState('');
  var [testType, setTestType] = useState('aptitude');
  var [questions, setQuestions] = useState([]);
  var [answers, setAnswers] = useState({});
  var [timeLeft, setTimeLeft] = useState(600);
  var [result, setResult] = useState(null);
  var [loading, setLoading] = useState(false);
  var timerRef = useRef(null);
  var startRef = useRef(null);

  useEffect(function() {
    if (phase !== 'test') return;
    startRef.current = Date.now();
    timerRef.current = setInterval(function() {
      setTimeLeft(function(prev) {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return function() { clearInterval(timerRef.current); };
  }, [phase]);

  useEffect(function() {
    if (timeLeft === 0 && phase === 'test') {
      submitTest();
    }
  }, [timeLeft, phase]); // eslint-disable-line

  function startTest() {
    if (!domain) { toast.error('Select a domain'); return; }
    setLoading(true);
    testsAPI.getQuestions({ educationLevel: edLevel, domain: domain, testType: testType })
      .then(function(r) {
        if (!r.data.questions || r.data.questions.length === 0) {
          toast.error('No questions for this domain');
          return;
        }
        setQuestions(r.data.questions);
        setAnswers({});
        setTimeLeft(testType === 'aptitude' ? r.data.questions.length * 60 : 300);
        setPhase('test');
      })
      .catch(function() { toast.error('Failed to load test'); })
      .finally(function() { setLoading(false); });
  }

  function submitTest() {
    clearInterval(timerRef.current);
    var timeTaken = startRef.current ? Math.round((Date.now() - startRef.current) / 1000) : 0;
    setLoading(true);
    var formatted = questions.map(function(q) {
      return { questionId: q.id, selectedOption: answers[q.id] !== undefined ? answers[q.id] : -1 };
    });
    testsAPI.submitTest({ educationLevel: edLevel, domain: domain, answers: formatted, testType: testType, timeTaken: timeTaken })
      .then(function(r) {
        setResult(r.data.result);
        setPhase('result');
        toast.success('Test submitted!');
      })
      .catch(function() { toast.error('Submission failed'); })
      .finally(function() { setLoading(false); });
  }

  function fmt(s) { return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }

  /* SETUP */
  if (phase === 'setup') {
    return React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '4rem 1.5rem 2rem' } },
      React.createElement('div', { style: { maxWidth: '720px', margin: '0 auto' } },
        React.createElement('div', { style: { textAlign: 'center', marginBottom: '2.5rem' } },
          React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.8rem', marginBottom: '8px', color: 'var(--text)' } }, 'Test ', React.createElement('span', { className: 'gt' }, 'Center')),
          React.createElement('p', { style: { color: 'var(--text3)', fontSize: '1rem' } }, 'Assess your knowledge with specialized domain tests')
        ),

        React.createElement('div', { className: 'card', style: { marginBottom: '1.5rem', padding: '1.5rem' } },
          React.createElement('label', { style: { display: 'block', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font1)', color: 'var(--text)' } }, 'Select Education Level'),
          React.createElement('div', { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
            ['10th','intermediate','btech'].map(function(l) {
              var active = edLevel === l;
              return React.createElement('button', {
                key: l, type: 'button',
                onClick: function() { setEdLevel(l); setDomain(''); },
                style: { padding: '0.65rem 1.25rem', borderRadius: '99px', cursor: 'pointer', background: active ? 'var(--brand)' : 'var(--bg)', color: active ? 'white' : 'var(--text2)', border: '1px solid ' + (active ? 'var(--brand)' : 'var(--border)'), fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.2s', boxShadow: active ? 'var(--shadow)' : 'none' }
              }, l === '10th' ? '10th Class' : l === 'intermediate' ? 'Intermediate' : 'B.Tech');
            })
          )
        ),

        React.createElement('div', { className: 'card', style: { marginBottom: '1.5rem', padding: '1.5rem' } },
          React.createElement('label', { style: { display: 'block', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font1)', color: 'var(--text)' } }, 'Choose Assessment Domain'),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' } },
            (DOMAINS_MAP[edLevel] || []).map(function(d) {
              var active = domain === d.value;
              return React.createElement('div', {
                key: d.value,
                onClick: function() { setDomain(d.value); },
                style: { padding: '1rem 1.25rem', borderRadius: 'var(--r3)', cursor: 'pointer', border: '2px solid ' + (active ? 'var(--brand)' : 'var(--border)'), background: active ? 'var(--brand-light)' : 'var(--bg)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '1rem' }
              },
                React.createElement('span', { style: { fontSize: '1.5rem' } }, d.emoji),
                React.createElement('span', { style: { fontWeight: 700, fontSize: '0.95rem', color: active ? 'var(--brand)' : 'var(--text)' } }, d.label),
                active && React.createElement('span', { style: { marginLeft: 'auto', color: 'var(--brand)', fontWeight: 800 } }, '✓')
              );
            })
          )
        ),

        React.createElement('div', { className: 'card', style: { marginBottom: '2rem', padding: '1.5rem' } },
          React.createElement('label', { style: { display: 'block', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font1)', color: 'var(--text)' } }, 'Select Mode'),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' } },
            [
              { value: 'aptitude', icon: '🧪', label: 'Aptitude MCQ', desc: 'Standard scored test' },
              { value: 'interest', icon: '💭', label: 'Interest Quiz', desc: 'Rate your interests' }
            ].map(function(t) {
              var active = testType === t.value;
              return React.createElement('div', {
                key: t.value,
                onClick: function() { setTestType(t.value); },
                style: { padding: '1.5rem 1rem', borderRadius: 'var(--r3)', cursor: 'pointer', textAlign: 'center', border: '2px solid ' + (active ? 'var(--brand)' : 'var(--border)'), background: active ? 'var(--brand-light)' : 'var(--bg)', transition: 'all 0.2s' }
              },
                React.createElement('div', { style: { fontSize: '2rem', marginBottom: '8px' } }, t.icon),
                React.createElement('div', { style: { fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font1)', color: active ? 'var(--brand)' : 'var(--text)' } }, t.label),
                React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.8rem', marginTop: '4px' } }, t.desc)
              );
            })
          )
        ),

        React.createElement('button', { onClick: startTest, disabled: !domain || loading, className: 'btn btn-p', style: { width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem', boxShadow: 'var(--shadow-lg)' } },
          loading ? 'Loading Test...' : 'Begin Assessment →'
        )
      )
    );
  }

  /* TEST */
  if (phase === 'test') {
    return React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '4rem 1.5rem 2rem' } },
      React.createElement('div', { style: { maxWidth: '720px', margin: '0 auto' } },
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', position: 'sticky', top: '72px', background: 'var(--bg)', padding: '1rem 0', zIndex: 10, borderBottom: '1px solid var(--border)' } },
          React.createElement('div', null,
            React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 800, color: 'var(--text)', fontSize: '1.1rem' } }, domain.toUpperCase() + ' Assessment'),
            React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.875rem', fontWeight: 500 } }, Object.keys(answers).length + ' of ' + questions.length + ' tasks completed')
          ),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '0.6rem 1.1rem', background: timeLeft < 60 ? 'var(--red-light)' : 'var(--bg-card)', border: '1px solid ' + (timeLeft < 60 ? 'var(--red)' : 'var(--border)'), borderRadius: '12px', color: timeLeft < 60 ? 'var(--red)' : 'var(--text)', fontWeight: 800, fontFamily: 'monospace', fontSize: '1.1rem' } },
            '⏱️ ' + fmt(timeLeft)
          )
        ),

        React.createElement('div', { className: 'pbar', style: { marginBottom: '2rem', height: '8px' } },
          React.createElement('div', { className: 'pfill', style: { width: (Object.keys(answers).length / questions.length * 100) + '%', background: 'var(--brand)' } })
        ),

        questions.map(function(q, i) {
          var answered = answers[q.id] !== undefined;
          return React.createElement('div', { key: q.id, className: 'card', style: { marginBottom: '1.25rem', padding: '1.5rem', borderColor: answered ? 'var(--border)' : 'var(--border)' } },
            React.createElement('div', { style: { display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' } },
              React.createElement('span', { style: { width: '30px', height: '30px', borderRadius: '8px', background: answered ? 'var(--brand)' : 'var(--bg)', color: answered ? 'white' : 'var(--text3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800, flexShrink: 0, border: '1px solid ' + (answered ? 'var(--brand)' : 'var(--border)') } }, i + 1),
              React.createElement('p', { style: { fontWeight: 600, fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--text)' } }, q.text)
            ),
            testType === 'aptitude' ? (
              React.createElement('div', { style: { display: 'grid', gap: '10px' } },
                (q.options || []).map(function(opt, oi) {
                  var active = answers[q.id] === oi;
                  return React.createElement('button', {
                    key: oi, type: 'button',
                    onClick: function() { setAnswers(function(p) { var n = Object.assign({}, p); n[q.id] = oi; return n; }); },
                    style: { display: 'block', width: '100%', padding: '0.85rem 1.25rem', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', background: active ? 'var(--brand-light)' : 'transparent', color: active ? 'var(--brand)' : 'var(--text2)', border: '1px solid ' + (active ? 'var(--brand)' : 'var(--border)'), fontWeight: active ? 700 : 500, transition: 'all 0.2s', fontFamily: 'var(--font1)', fontSize: '0.95rem' }
                  }, ['A','B','C','D'][oi] + '. ' + opt);
                })
              )
            ) : (
              React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' } },
                (q.options || []).map(function(opt, oi) {
                  var vals = [3,2,1,0];
                  var active = answers[q.id] === vals[oi];
                  return React.createElement('button', {
                    key: oi, type: 'button',
                    onClick: function() { setAnswers(function(p) { var n = Object.assign({}, p); n[q.id] = vals[oi]; return n; }); },
                    style: { padding: '0.75rem', borderRadius: '12px', cursor: 'pointer', background: active ? 'var(--brand-light)' : 'transparent', color: active ? 'var(--brand)' : 'var(--text2)', border: '1px solid ' + (active ? 'var(--brand)' : 'var(--border)'), fontWeight: 700, transition: 'all 0.2s', fontFamily: 'var(--font1)', fontSize: '0.9rem', textAlign: 'center' }
                  }, opt);
                })
              )
            )
          );
        }),

        React.createElement('button', { onClick: submitTest, disabled: loading, className: 'btn btn-p', style: { width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', boxShadow: 'var(--shadow-lg)' } },
          loading ? 'Submitting Answers...' : 'Submit Assessment ✓'
        )
      )
    );
  }

  /* RESULT */
  return React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '100px 1.5rem 2rem' } },
    React.createElement('div', { style: { maxWidth: '640px', margin: '0 auto', textAlign: 'center' } },
      React.createElement('div', { style: { fontSize: '4.5rem', marginBottom: '1.5rem' } }, '🎯'),
      React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '2rem', marginBottom: '12px', color: 'var(--text)' } }, 'Test ', React.createElement('span', { className: 'gt' }, 'Complete!')),
      React.createElement('p', { style: { color: 'var(--text3)', fontSize: '1.1rem', marginBottom: '2.5rem' } }, 'Your performance has been evaluated by our AI'),

      result && React.createElement('div', { className: 'card', style: { margin: '0 0 2.5rem', padding: '3rem 2rem', background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow2)' } },
        React.createElement('div', { className: 'gt', style: { fontSize: '4.5rem', fontFamily: 'var(--font1)', fontWeight: 800, marginBottom: '8px' } }, result.percentage + '%'),
        React.createElement('div', { style: { color: 'var(--text2)', marginBottom: '2rem', fontWeight: 600, fontSize: '1.1rem' } }, result.totalCorrect + ' Correct / ' + result.totalQuestions + ' Total'),

        result.subjectWise && Object.keys(result.subjectWise).length > 0 && React.createElement('div', null,
          React.createElement('div', { style: { fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font1)', textAlign: 'left', color: 'var(--text)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Subject Performance'),
          Object.entries(result.subjectWise).map(function(entry) {
            var subj = entry[0];
            var score = entry[1];
            var color = score >= 75 ? 'var(--green)' : score >= 50 ? 'var(--yellow)' : 'var(--red)';
            var lightColor = score >= 75 ? 'var(--green-light)' : score >= 50 ? 'var(--yellow-light)' : 'var(--red-light)';
            return React.createElement('div', { key: subj, style: { marginBottom: '1.25rem' } },
              React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.95rem' } },
                React.createElement('span', { style: { color: 'var(--text)', fontWeight: 700, textTransform: 'capitalize' } }, subj),
                React.createElement('span', { style: { fontWeight: 800, color: color } }, score + '%')
              ),
              React.createElement('div', { className: 'pbar', style: { height: '10px', background: 'var(--bg)' } },
                React.createElement('div', { style: { height: '100%', width: score + '%', background: color, borderRadius: '10px', transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 0 10px ' + lightColor } })
              )
            );
          })
        )
      ),

      React.createElement('div', { style: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' } },
        React.createElement('button', {
          onClick: function() { setPhase('setup'); setResult(null); setAnswers({}); },
          className: 'btn btn-o', style: { padding: '0.9rem 1.5rem' }
        }, 'Try Another Domain'),
        React.createElement('a', { href: '/predict', className: 'btn btn-p', style: { padding: '0.9rem 1.5rem' } }, 'See AI Career Path →')
      )
    )
  );
}
