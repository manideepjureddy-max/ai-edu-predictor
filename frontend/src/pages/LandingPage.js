import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

var PHRASES = ['your future.', 'your stream.', 'your career.', 'your roadmap.'];

var FEATURES = [
  { icon: '🎯', title: 'AI Stream Prediction', desc: 'Gemini AI analyzes your interests and aptitude to suggest the perfect stream with high accuracy.', color: '#6C63FF' },
  { icon: '🗺️', title: 'Personalized Roadmaps', desc: 'Step-by-step roadmaps from 10th class to your dream career — for every stream.', color: '#FF6584' },
  { icon: '📝', title: 'Smart Aptitude Tests', desc: 'Domain-specific MCQ tests for MPC, BiPC, CSE-AI, ECE, MECH and more.', color: '#43E97B' },
  { icon: '💼', title: 'Career Intelligence', desc: 'Real salary data, industry demand and growth projections for 2024-2026.', color: '#FFD93D' },
  { icon: '💬', title: 'EduBot AI Chatbot', desc: 'Ask anything about streams, colleges and careers — powered by Google Gemini.', color: '#4ECDC4' },
  { icon: '📊', title: 'Progress Dashboard', desc: 'Track all predictions, test scores and saved roadmaps in one place.', color: '#A89CFF' }
];

var STREAMS = [
  { name: 'MPC → B.Tech', emoji: '⚡', desc: 'Engineering & Technology', color: '#6C63FF' },
  { name: 'BiPC → MBBS', emoji: '🧬', desc: 'Medical & Life Sciences', color: '#FF6584' },
  { name: 'MEC → Commerce', emoji: '📈', desc: 'Economics & Finance', color: '#43E97B' },
  { name: 'CEC → Law', emoji: '⚖️', desc: 'Business & Public Service', color: '#FFD93D' },
  { name: 'CSE → AI', emoji: '🤖', desc: 'Artificial Intelligence', color: '#4ECDC4' },
  { name: 'CSE → Data Science', emoji: '📊', desc: 'Data & Analytics', color: '#A89CFF' }
];

var STEPS = [
  { n: '01', icon: '🎓', title: 'Select Your Level', desc: '10th class, Intermediate or B.Tech — pick where you are now.', color: '#6C63FF' },
  { n: '02', icon: '🧪', title: 'Take Assessment', desc: 'Interest survey or aptitude MCQ test. Both under 10 minutes.', color: '#FF6584' },
  { n: '03', icon: '🚀', title: 'Get AI Roadmap', desc: 'Receive your predicted stream, confidence score and full learning roadmap.', color: '#43E97B' }
];

export default function LandingPage() {
  var [typed, setTyped] = useState('');
  var [phraseIdx, setPhraseIdx] = useState(0);
  var [deleting, setDeleting] = useState(false);

  useEffect(function() {
    var current = PHRASES[phraseIdx];
    var speed = deleting ? 50 : 100;
    var t = setTimeout(function() {
      if (!deleting && typed.length < current.length) {
        setTyped(current.slice(0, typed.length + 1));
      } else if (!deleting && typed.length === current.length) {
        setTimeout(function() { setDeleting(true); }, 1500);
      } else if (deleting && typed.length > 0) {
        setTyped(current.slice(0, typed.length - 1));
      } else if (deleting && typed.length === 0) {
        setDeleting(false);
        setPhraseIdx(function(p) { return (p + 1) % PHRASES.length; });
      }
    }, speed);
    return function() { clearTimeout(t); };
  }, [typed, deleting, phraseIdx]);

  var s = {
    page: { background: 'var(--bg)', minHeight: '100vh', overflow: 'hidden' },
    hero: { position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' },
    orb1: { orb: true, width: '600px', height: '600px', top: '-200px', right: '-200px', background: 'rgba(108,99,255,0.12)' },
    orb2: { orb: true, width: '400px', height: '400px', bottom: '-100px', left: '-100px', background: 'rgba(255,101,132,0.1)' }
  };

  return (
    React.createElement('div', { style: s.page },
      /* ── HERO ── */
      React.createElement('section', { style: s.hero },
        React.createElement('div', { className: 'orb', style: { width: '600px', height: '600px', top: '-200px', right: '-200px', background: 'rgba(108,99,255,0.12)', position: 'absolute' } }),
        React.createElement('div', { className: 'orb', style: { width: '400px', height: '400px', bottom: '-100px', left: '-100px', background: 'rgba(255,101,132,0.1)', position: 'absolute' } }),

        React.createElement('div', { className: 'wrap', style: { position: 'relative', zIndex: 1 } },
          React.createElement('div', { style: { maxWidth: '660px', animation: 'fadeUp 0.8s ease both' } },

            React.createElement('div', { style: { display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' } },
              React.createElement('span', { className: 'badge badge-p' }, '⚡ Powered by Google Gemini AI'),
              React.createElement('span', { className: 'badge badge-g' }, '🇮🇳 Made for Indian Students')
            ),

            React.createElement('h1', {
              style: {
                fontFamily: 'var(--font1)', fontSize: 'clamp(2.4rem,5vw,3.8rem)',
                fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem'
              }
            },
              'AI predicts',
              React.createElement('span', { style: { display: 'block' } },
                React.createElement('span', { className: 'gt' }, typed),
                React.createElement('span', { style: { animation: 'blink 1s infinite', color: '#6C63FF', marginLeft: '2px' } }, '|')
              )
            ),

            React.createElement('p', {
              style: { color: 'var(--text2)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '520px' }
            },
              'Stop guessing what to study. Our AI analyzes your ',
              React.createElement('strong', { style: { color: 'var(--text)' } }, 'interests, aptitude'),
              ' and ',
              React.createElement('strong', { style: { color: 'var(--text)' } }, 'career goals'),
              ' to predict the perfect stream — from 10th to B.Tech to your dream career.'
            ),

            React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
              React.createElement(Link, { to: '/register', className: 'btn btn-p', style: { fontSize: '1rem', padding: '0.9rem 2rem' } }, 'Start Free Prediction →'),
              React.createElement(Link, { to: '/login', className: 'btn btn-o', style: { fontSize: '1rem', padding: '0.9rem 2rem' } }, 'Student Login')
            ),

            React.createElement('div', { style: { display: 'flex', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' } },
              [['15,000+', 'Students guided'], ['95%', 'Prediction accuracy'], ['20+', 'Career paths']].map(function(item) {
                return React.createElement('div', { key: item[1] },
                  React.createElement('div', { className: 'gt', style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.4rem' } }, item[0]),
                  React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.8rem' } }, item[1])
                );
              })
            )
          )
        )
      ),

      /* ── HOW IT WORKS ── */
      React.createElement('section', { className: 'sec', style: { background: 'rgba(255,255,255,0.01)' } },
        React.createElement('div', { className: 'wrap' },
          React.createElement('div', { style: { textAlign: 'center', marginBottom: '3.5rem' } },
            React.createElement('span', { className: 'badge badge-p', style: { marginBottom: '1rem' } }, 'Simple Process'),
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800 } },
              'Get your prediction in ',
              React.createElement('span', { className: 'gt' }, '3 steps')
            )
          ),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.25rem' } },
            STEPS.map(function(step) {
              return React.createElement('div', { key: step.n, className: 'card', style: { position: 'relative', overflow: 'hidden' } },
                React.createElement('div', {
                  style: { position: 'absolute', top: '-10px', right: '-10px', fontFamily: 'var(--font1)', fontWeight: 900, fontSize: '4rem', color: step.color + '15', lineHeight: 1 }
                }, step.n),
                React.createElement('div', { style: { fontSize: '2.5rem', marginBottom: '1rem' } }, step.icon),
                React.createElement('h3', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '0.5rem', color: step.color } }, step.title),
                React.createElement('p', { style: { color: 'var(--text2)', lineHeight: 1.6, fontSize: '0.93rem' } }, step.desc)
              );
            })
          )
        )
      ),

      /* ── FEATURES ── */
      React.createElement('section', { className: 'sec' },
        React.createElement('div', { className: 'wrap' },
          React.createElement('div', { style: { textAlign: 'center', marginBottom: '3.5rem' } },
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800 } },
              'Everything to ', React.createElement('span', { className: 'gt' }, 'decide right')
            )
          ),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1rem' } },
            FEATURES.map(function(f) {
              return React.createElement('div', { key: f.title, className: 'card', style: { display: 'flex', gap: '1rem', alignItems: 'flex-start' } },
                React.createElement('div', {
                  style: { width: '46px', height: '46px', borderRadius: '12px', background: f.color + '20', border: '1px solid ' + f.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }
                }, f.icon),
                React.createElement('div', null,
                  React.createElement('h3', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '4px', fontSize: '1rem' } }, f.title),
                  React.createElement('p', { style: { color: 'var(--text2)', fontSize: '0.86rem', lineHeight: 1.6 } }, f.desc)
                )
              );
            })
          )
        )
      ),

      /* ── STREAMS ── */
      React.createElement('section', { className: 'sec', style: { background: 'rgba(255,255,255,0.01)' } },
        React.createElement('div', { className: 'wrap' },
          React.createElement('div', { style: { textAlign: 'center', marginBottom: '2.5rem' } },
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800 } },
              'Explore ', React.createElement('span', { className: 'gt' }, 'Stream Paths')
            )
          ),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' } },
            STREAMS.map(function(st) {
              return React.createElement('div', { key: st.name, className: 'card', style: { textAlign: 'center', padding: '1.5rem 1rem' } },
                React.createElement('div', {
                  className: 'afloat',
                  style: { width: '54px', height: '54px', borderRadius: '50%', background: st.color + '20', border: '2px solid ' + st.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto 1rem' }
                }, st.emoji),
                React.createElement('div', { style: { fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font1)', color: st.color } }, st.name),
                React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.82rem' } }, st.desc)
              );
            })
          )
        )
      ),

      /* ── CTA ── */
      React.createElement('section', { className: 'sec' },
        React.createElement('div', { className: 'wrap', style: { textAlign: 'center' } },
          React.createElement('div', {
            style: { maxWidth: '580px', margin: '0 auto', padding: '4rem 2rem', background: 'var(--grad-card)', borderRadius: 'var(--r4)', border: '1px solid var(--border2)', position: 'relative', overflow: 'hidden' }
          },
            React.createElement('div', { className: 'orb', style: { position: 'absolute', width: '300px', height: '300px', top: '-100px', left: '-100px', background: 'rgba(108,99,255,0.15)' } }),
            React.createElement('div', { style: { position: 'relative', zIndex: 1 } },
              React.createElement('div', { style: { fontSize: '3rem', marginBottom: '1rem' } }, '🎯'),
              React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 900, fontSize: '2rem', marginBottom: '1rem' } },
                'Ready to find your ', React.createElement('span', { className: 'gt' }, 'perfect stream?')
              ),
              React.createElement('p', { style: { color: 'var(--text2)', marginBottom: '2rem', lineHeight: 1.6 } },
                'Join 15,000+ Indian students who made the right academic choice with EduPath AI.'
              ),
              React.createElement(Link, { to: '/register', className: 'btn btn-p', style: { fontSize: '1rem', padding: '1rem 2.5rem' } }, 'Get Started Free →')
            )
          )
        )
      ),

      /* ── FOOTER ── */
      React.createElement('footer', { style: { borderTop: '1px solid var(--border)', padding: '2rem 1.5rem', textAlign: 'center' } },
        React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '8px' } },
          'EduPath ', React.createElement('span', { className: 'gt' }, 'AI')
        ),
        React.createElement('p', { style: { color: 'var(--text3)', fontSize: '0.85rem' } },
          'AI-powered academic guidance for Indian students • Built with ❤️ for India\'s future'
        )
      )
    )
  );
}
