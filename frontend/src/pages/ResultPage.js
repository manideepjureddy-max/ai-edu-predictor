import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { predAPI } from '../utils/api';

function Ring(props) {
  var score = props.score || 0;
  var r = 52;
  var circ = 2 * Math.PI * r;
  var offset = circ - (score / 100) * circ;
  var color = score >= 80 ? '#43E97B' : score >= 60 ? '#FFD93D' : '#FF6584';
  return React.createElement('div', { style: { position: 'relative', width: '130px', height: '130px' } },
    React.createElement('svg', { width: '130', height: '130', style: { transform: 'rotate(-90deg)' } },
      React.createElement('circle', { cx: '65', cy: '65', r: r, fill: 'none', stroke: 'rgba(255,255,255,0.05)', strokeWidth: '9' }),
      React.createElement('circle', { cx: '65', cy: '65', r: r, fill: 'none', stroke: color, strokeWidth: '9', strokeDasharray: circ, strokeDashoffset: offset, strokeLinecap: 'round', style: { transition: 'stroke-dashoffset 1.2s ease' } })
    ),
    React.createElement('div', { style: { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } },
      React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 900, fontSize: '1.7rem', color: color } }, score + '%'),
      React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.68rem' } }, 'confidence')
    )
  );
}

export default function ResultPage() {
  var params = useParams();
  var [pred, setPred] = useState(null);
  var [loading, setLoading] = useState(true);
  var [chatOpen, setChatOpen] = useState(false);
  var [msgs, setMsgs] = useState([{ role: 'bot', text: '👋 Hi! I\'m EduBot. Ask me anything about your prediction, career options or study tips!' }]);
  var [chatInput, setChatInput] = useState('');
  var [chatLoading, setChatLoading] = useState(false);

  useEffect(function() {
    predAPI.getById(params.id)
      .then(function(r) { setPred(r.data.prediction); })
      .catch(function() {})
      .finally(function() { setLoading(false); });
  }, [params.id]);

  function sendChat() {
    if (!chatInput.trim()) return;
    var msg = chatInput;
    setChatInput('');
    setMsgs(function(p) { return p.concat([{ role: 'user', text: msg }]); });
    setChatLoading(true);
    predAPI.chat({ message: msg, context: pred ? { recommendedStream: pred.result && pred.result.recommendedStream, educationLevel: pred.educationLevel } : {} })
      .then(function(r) { setMsgs(function(p) { return p.concat([{ role: 'bot', text: r.data.reply }]); }); })
      .catch(function() { setMsgs(function(p) { return p.concat([{ role: 'bot', text: "Sorry, I'm having trouble. Try again!" }]); }); })
      .finally(function() { setChatLoading(false); });
  }

  if (loading) {
    return React.createElement('div', { style: { paddingTop: '80px', padding: '5rem 1.5rem', textAlign: 'center' } },
      React.createElement('div', { style: { width: '54px', height: '54px', borderRadius: '50%', border: '3px solid rgba(108,99,255,0.2)', borderTopColor: '#6C63FF', animation: 'spin 1s linear infinite', margin: '0 auto' } }),
      React.createElement('p', { style: { color: 'var(--text3)', marginTop: '1rem' } }, 'Loading your prediction...')
    );
  }

  if (!pred) {
    return React.createElement('div', { style: { paddingTop: '80px', padding: '5rem 1.5rem', textAlign: 'center' } },
      React.createElement('div', { style: { fontSize: '3rem', marginBottom: '1rem' } }, '❌'),
      React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700 } }, 'Prediction not found'),
      React.createElement(Link, { to: '/predict', className: 'btn btn-p', style: { marginTop: '1rem', display: 'inline-flex' } }, 'New Prediction')
    );
  }

  var result = pred.result || {};
  var roadmap = result.roadmap || {};
  var steps = roadmap.steps || roadmap.roadmap || roadmap.semesterPlan || [];

  return React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '5rem 1.5rem 2rem' } },
    React.createElement('div', { style: { maxWidth: '860px', margin: '0 auto' } },

      /* Header */
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' } },
        React.createElement('div', null,
          React.createElement('div', { style: { display: 'flex', gap: '8px', marginBottom: '8px' } },
            React.createElement('span', { className: 'badge badge-g' }, '✅ Prediction Complete'),
            React.createElement('span', { className: 'badge badge-p' }, pred.educationLevel + ' Level')
          ),
          React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 900, fontSize: '2rem' } }, 'Your ', React.createElement('span', { className: 'gt' }, 'AI Prediction'))
        ),
        React.createElement('div', { style: { display: 'flex', gap: '8px' } },
          React.createElement(Link, { to: '/predict', className: 'btn btn-g' }, 'New Prediction'),
          React.createElement('button', { onClick: function() { setChatOpen(!chatOpen); }, className: 'btn btn-p' }, '💬 Ask EduBot')
        )
      ),

      /* Main result */
      React.createElement('div', { className: 'card', style: { background: 'var(--grad-card)', border: '1px solid var(--border2)', marginBottom: '1.5rem', padding: '2rem' } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' } },
          React.createElement(Ring, { score: result.confidenceScore || 0 }),
          React.createElement('div', { style: { flex: 1, minWidth: '180px' } },
            React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.82rem', marginBottom: '4px' } }, 'Recommended Stream / Career'),
            React.createElement('h2', { className: 'gt', style: { fontFamily: 'var(--font1)', fontWeight: 900, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '8px' } }, result.recommendedStream || 'Analyzing...'),
            result.alternativeOptions && result.alternativeOptions.length > 0 && React.createElement('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' } },
              React.createElement('span', { style: { color: 'var(--text3)', fontSize: '0.8rem' } }, 'Alternatives:'),
              result.alternativeOptions.map(function(a) { return React.createElement('span', { key: a, className: 'badge badge-y', style: { fontSize: '0.7rem' } }, a); })
            )
          )
        )
      ),

      /* AI Analysis */
      result.aiAnalysis && React.createElement('div', { className: 'card', style: { marginBottom: '1.5rem', border: '1px solid rgba(67,233,123,0.2)', background: 'rgba(67,233,123,0.04)' } },
        React.createElement('div', { style: { display: 'flex', gap: '1rem', alignItems: 'flex-start' } },
          React.createElement('div', { style: { fontSize: '2rem', flexShrink: 0 } }, '🤖'),
          React.createElement('div', null,
            React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', marginBottom: '8px', color: '#43E97B' } }, 'Gemini AI Analysis'),
            React.createElement('p', { style: { color: 'var(--text2)', lineHeight: 1.8, fontSize: '0.93rem' } }, result.aiAnalysis)
          )
        )
      ),

      /* Roadmap info */
      roadmap && (roadmap.salaryRange || roadmap.skills || roadmap.careerPaths) && React.createElement('div', { style: { marginBottom: '1.5rem' } },
        (roadmap.salaryRange || roadmap.duration || roadmap.demandTrend) && React.createElement('div', { className: 'card', style: { marginBottom: '0.75rem' } },
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '1rem' } },
            roadmap.salaryRange && React.createElement('div', null,
              React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.76rem', marginBottom: '4px' } }, '💰 Salary Range'),
              React.createElement('div', { style: { fontWeight: 700, color: '#43E97B', fontFamily: 'var(--font1)' } }, roadmap.salaryRange)
            ),
            roadmap.duration && React.createElement('div', null,
              React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.76rem', marginBottom: '4px' } }, '⏱️ Duration'),
              React.createElement('div', { style: { fontWeight: 700 } }, roadmap.duration)
            ),
            roadmap.demandTrend && React.createElement('div', null,
              React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.76rem', marginBottom: '4px' } }, '📈 Demand'),
              React.createElement('div', { style: { fontWeight: 600, fontSize: '0.88rem' } }, roadmap.demandTrend)
            )
          )
        ),

        roadmap.skills && React.createElement('div', { className: 'card', style: { marginBottom: '0.75rem' } },
          React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', marginBottom: '8px' } }, '🛠️ Key Skills'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
            roadmap.skills.map(function(s) { return React.createElement('span', { key: s, className: 'badge badge-p', style: { fontSize: '0.78rem' } }, s); })
          )
        ),

        roadmap.careerPaths && React.createElement('div', { className: 'card', style: { marginBottom: '0.75rem' } },
          React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', marginBottom: '8px' } }, '💼 Career Paths'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
            roadmap.careerPaths.map(function(c) { return React.createElement('span', { key: c, className: 'badge badge-g', style: { fontSize: '0.78rem' } }, c); })
          )
        ),

        steps.length > 0 && React.createElement('div', null,
          React.createElement('h3', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1rem', fontSize: '1.1rem' } }, '🗺️ Learning Roadmap'),
          steps.map(function(step, i) {
            return React.createElement('div', { key: i, style: { display: 'flex', gap: '1rem', marginBottom: '0.75rem' } },
              React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
                React.createElement('div', { style: { width: '34px', height: '34px', borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg,#6C63FF,#FF6584)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.82rem', color: 'white' } }, i + 1),
                i < steps.length - 1 && React.createElement('div', { style: { width: '2px', height: '100%', minHeight: '24px', background: 'rgba(108,99,255,0.2)', marginTop: '4px' } })
              ),
              React.createElement('div', { className: 'card', style: { flex: 1, marginBottom: '0' } },
                React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', marginBottom: '4px', color: 'var(--purple-light)' } },
                  step.phase || step.sem || ('Phase ' + (i + 1))
                ),
                step.tasks && React.createElement('ul', { style: { paddingLeft: '1rem', color: 'var(--text2)', fontSize: '0.86rem', lineHeight: 1.8 } },
                  step.tasks.map(function(t, j) { return React.createElement('li', { key: j }, t); })
                )
              )
            );
          })
        )
      ),

      /* Actions */
      React.createElement('div', { style: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' } },
        React.createElement(Link, { to: '/roadmap', className: 'btn btn-p' }, 'Explore All Roadmaps →'),
        React.createElement(Link, { to: '/predict', className: 'btn btn-g' }, 'Try Another Prediction'),
        React.createElement(Link, { to: '/dashboard', className: 'btn btn-g' }, 'Dashboard')
      )
    ),

    /* EduBot */
    chatOpen && React.createElement('div', { style: { position: 'fixed', bottom: '24px', right: '24px', width: '340px', zIndex: 1000, background: 'var(--bg-card)', border: '1px solid var(--border2)', borderRadius: 'var(--r4)', overflow: 'hidden', boxShadow: '0 0 40px rgba(108,99,255,0.2)', animation: 'scaleIn 0.3s ease' } },
      React.createElement('div', { style: { padding: '1rem', background: 'linear-gradient(135deg,#6C63FF,#FF6584)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', color: 'white' } }, '🤖 EduBot AI'),
        React.createElement('button', { onClick: function() { setChatOpen(false); }, style: { background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.3rem', lineHeight: 1 } }, '×')
      ),
      React.createElement('div', { style: { height: '270px', overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '8px' } },
        msgs.map(function(m, i) {
          return React.createElement('div', { key: i, style: { maxWidth: '86%', padding: '0.55rem 0.85rem', borderRadius: '12px', background: m.role === 'user' ? 'rgba(108,99,255,0.25)' : 'var(--glass)', alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', color: 'var(--text)', fontSize: '0.86rem', lineHeight: 1.5 } }, m.text);
        }),
        chatLoading && React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.82rem' } }, '⏳ Thinking...')
      ),
      React.createElement('div', { style: { padding: '0.75rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '6px' } },
        React.createElement('input', { value: chatInput, onChange: function(e) { setChatInput(e.target.value); }, onKeyDown: function(e) { if (e.key === 'Enter') sendChat(); }, placeholder: 'Ask about careers, streams...', className: 'inp', style: { flex: 1, padding: '0.58rem 0.85rem' } }),
        React.createElement('button', { onClick: sendChat, className: 'btn btn-p', style: { padding: '0.55rem 0.9rem', flexShrink: 0 } }, '→')
      )
    )
  );
}
