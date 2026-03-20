import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { predAPI } from '../utils/api';

function Ring(props) {
  var score = props.score || 0;
  var r = 52;
  var circ = 2 * Math.PI * r;
  var offset = circ - (score / 100) * circ;
  var color = score >= 80 ? 'var(--green)' : score >= 60 ? 'var(--yellow)' : 'var(--red)';
  return React.createElement('div', { style: { position: 'relative', width: '135px', height: '135px' } },
    React.createElement('svg', { width: '135', height: '135', style: { transform: 'rotate(-90deg)' } },
      React.createElement('circle', { cx: '67.5', cy: '67.5', r: r, fill: 'none', stroke: 'var(--border)', strokeWidth: '10' }),
      React.createElement('circle', { cx: '67.5', cy: '67.5', r: r, fill: 'none', stroke: color, strokeWidth: '10', strokeDasharray: circ, strokeDashoffset: offset, strokeLinecap: 'round', style: { transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)' } })
    ),
    React.createElement('div', { style: { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } },
      React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.8rem', color: 'var(--text)' } }, score + '%'),
      React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Match')
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

  return React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '4rem 1.5rem 2rem' } },
    React.createElement('div', { style: { maxWidth: '880px', margin: '0 auto' } },

      /* Header */
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' } },
        React.createElement('div', null,
          React.createElement('div', { style: { display: 'flex', gap: '8px', marginBottom: '8px' } },
            React.createElement('span', { className: 'badge', style: { background: 'var(--green-light)', color: 'var(--green)', fontWeight: 700 } }, '✓ Success'),
            React.createElement('span', { className: 'badge', style: { background: 'var(--brand-light)', color: 'var(--brand)', fontWeight: 700 } }, pred.educationLevel.toUpperCase())
          ),
          React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text)' } }, 'Your ', React.createElement('span', { className: 'gt' }, 'AI Analysis'))
        ),
        React.createElement('div', { style: { display: 'flex', gap: '12px' } },
          React.createElement(Link, { to: '/predict', className: 'btn btn-o' }, 'New Test'),
          React.createElement('button', { onClick: function() { setChatOpen(!chatOpen); }, className: 'btn btn-p' }, '💬 AI Mentor')
        )
      ),

      /* Main result */
      React.createElement('div', { className: 'card', style: { background: 'var(--bg-card)', border: '1px solid var(--border)', marginBottom: '1.5rem', padding: '2.5rem', boxShadow: 'var(--shadow2)' } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' } },
          React.createElement(Ring, { score: result.confidenceScore || 0 }),
          React.createElement('div', { style: { flex: 1, minWidth: '220px' } },
            React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' } }, 'Recommended Direction'),
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.5rem)', marginBottom: '12px', color: 'var(--brand)' } }, result.recommendedStream || 'Generating...'),
            result.alternativeOptions && result.alternativeOptions.length > 0 && React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' } },
              React.createElement('span', { style: { color: 'var(--text3)', fontSize: '0.8rem', fontWeight: 600 } }, 'Alternatives:'),
              result.alternativeOptions.map(function(a) { return React.createElement('span', { key: a, className: 'badge', style: { fontSize: '0.75rem', background: 'var(--yellow-light)', color: 'var(--yellow)', border: 'none', fontWeight: 700 } }, a); })
            )
          )
        )
      ),

      /* AI Analysis */
      result.aiAnalysis && React.createElement('div', { className: 'card', style: { marginBottom: '2rem', background: 'var(--bg-card2)', borderColor: 'var(--border)' } },
        React.createElement('div', { style: { display: 'flex', gap: '1.25rem', alignItems: 'flex-start' } },
          React.createElement('div', { style: { fontSize: '2rem', flexShrink: 0 } }, '🤖'),
          React.createElement('div', null,
            React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', marginBottom: '6px', fontSize: '1rem', color: 'var(--text)' } }, 'AI Insights'),
            React.createElement('p', { style: { color: 'var(--text2)', lineHeight: 1.7, fontSize: '0.95rem' } }, result.aiAnalysis)
          )
        )
      ),

      /* Roadmap info */
      roadmap && (roadmap.salaryRange || roadmap.skills || roadmap.careerPaths) && React.createElement('div', { style: { marginBottom: '2rem' } },
        (roadmap.salaryRange || roadmap.duration || roadmap.demandTrend) && React.createElement('div', { className: 'card', style: { marginBottom: '1rem', padding: '1.5rem' } },
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1.5rem' } },
            roadmap.salaryRange && React.createElement('div', null,
              React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' } }, '💰 SALARY RANGE'),
              React.createElement('div', { style: { fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--font1)', fontSize: '1.1rem' } }, roadmap.salaryRange)
            ),
            roadmap.duration && React.createElement('div', null,
              React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' } }, '⏱️ DURATION'),
              React.createElement('div', { style: { fontWeight: 700, color: 'var(--text)', fontSize: '1.1rem' } }, roadmap.duration)
            ),
            roadmap.demandTrend && React.createElement('div', null,
              React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' } }, '📈 DEMAND'),
              React.createElement('div', { style: { fontWeight: 700, color: 'var(--text)', fontSize: '1rem' } }, roadmap.demandTrend)
            )
          )
        ),

        roadmap.skills && React.createElement('div', { className: 'card', style: { marginBottom: '1rem' } },
          React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', marginBottom: '12px', fontSize: '0.95rem', color: 'var(--text)' } }, '🛠️ Prerequisite Skills'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '8px' } },
            roadmap.skills.map(function(s) { return React.createElement('span', { key: s, className: 'badge', style: { fontSize: '0.8rem', background: 'var(--brand-light)', color: 'var(--brand)', fontWeight: 600 } }, s); })
          )
        ),

        roadmap.careerPaths && React.createElement('div', { className: 'card', style: { marginBottom: '2.5rem' } },
          React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', marginBottom: '12px', fontSize: '0.95rem', color: 'var(--text)' } }, '💼 Roles & Opportunities'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '8px' } },
            roadmap.careerPaths.map(function(c) { return React.createElement('span', { key: c, className: 'badge', style: { fontSize: '0.8rem', background: 'var(--bg)', color: 'var(--text2)', fontWeight: 600 } }, c); })
          )
        ),

        steps.length > 0 && React.createElement('div', null,
          React.createElement('h3', { style: { fontFamily: 'var(--font1)', fontWeight: 800, marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--text)', textAlign: 'center' } }, 'Learning Path Roadmap'),
          steps.map(function(step, i) {
            return React.createElement('div', { key: i, style: { display: 'flex', gap: '1.5rem', marginBottom: '1rem' } },
              React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
                React.createElement('div', { style: { width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0, background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', color: 'white' } }, i + 1),
                i < steps.length - 1 && React.createElement('div', { style: { width: '2px', height: '100%', minHeight: '30px', background: 'var(--border)', marginTop: '4px' } })
              ),
              React.createElement('div', { className: 'card', style: { flex: 1, marginBottom: '0', padding: '1.25rem' } },
                React.createElement('div', { style: { fontWeight: 800, fontFamily: 'var(--font1)', marginBottom: '8px', color: 'var(--brand)', fontSize: '1rem' } },
                  step.phase || step.sem || ('Phase ' + (i + 1))
                ),
                step.tasks && React.createElement('ul', { style: { paddingLeft: '1.2rem', color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.8 } },
                  step.tasks.map(function(t, j) { return React.createElement('li', { key: j }, t); })
                )
              )
            );
          })
        )
      ),

      /* Actions */
      React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '2rem', justifyContent: 'center' } },
        React.createElement(Link, { to: '/roadmap', className: 'btn btn-p', style: { padding: '0.9rem 1.5rem' } }, 'Detailed Roadmap'),
        React.createElement(Link, { to: '/dashboard', className: 'btn btn-o', style: { padding: '0.9rem 1.5rem' } }, 'Back to Dashboard')
      )
    ),

    /* EduBot */
    chatOpen && React.createElement('div', { style: { position: 'fixed', bottom: '24px', right: '24px', width: '360px', zIndex: 1000, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--r3)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', animation: 'fadeUp 0.3s ease' } },
      React.createElement('div', { style: { padding: '1.25rem', background: 'var(--brand)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' } },
          React.createElement('span', { style: { fontSize: '1.2rem' } }, '🤖'), 'EduBot Assistant'
        ),
        React.createElement('button', { onClick: function() { setChatOpen(false); }, style: { background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.5rem', lineHeight: 1 } }, '×')
      ),
      React.createElement('div', { style: { height: '300px', overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' } },
        msgs.map(function(m, i) {
          var isUser = m.role === 'user';
          return React.createElement('div', { key: i, style: { maxWidth: '85%', padding: '0.75rem 1rem', borderRadius: '15px', borderBottomRightRadius: isUser ? '2px' : '15px', borderBottomLeftRadius: !isUser ? '2px' : '15px', background: isUser ? 'var(--brand)' : 'var(--bg-card2)', alignSelf: isUser ? 'flex-end' : 'flex-start', color: isUser ? 'white' : 'var(--text)', fontSize: '0.9rem', lineHeight: 1.5, boxShadow: isUser ? 'none' : 'var(--shadow)' } }, m.text);
        }),
        chatLoading && React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.85rem', textAlign: 'center', marginTop: '10px' } }, 'Thinking...')
      ),
      React.createElement('div', { style: { padding: '1rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '8px' } },
        React.createElement('input', { value: chatInput, onChange: function(e) { setChatInput(e.target.value); }, onKeyDown: function(e) { if (e.key === 'Enter') sendChat(); }, placeholder: 'Ask EduBot anything...', className: 'inp', style: { flex: 1, padding: '0.75rem 1rem', fontSize: '0.9rem' } }),
        React.createElement('button', { onClick: sendChat, className: 'btn btn-p', style: { width: '42px', height: '42px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' } }, '→')
      )
    )
  );
}
