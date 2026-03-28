import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

var PHRASES = ['your future.', 'your stream.', 'your career.', 'your roadmap.'];

var FEATURES = [
  { icon: '🎯', title: 'AI Stream Prediction', desc: 'Gemini AI analyzes your interests and aptitude to suggest the perfect stream with high accuracy.', color: 'var(--brand)' },
  { icon: '🗺️', title: 'Personalized Roadmaps', desc: 'Step-by-step roadmaps from 10th class to your dream career — for every stream.', color: 'var(--brand)' },
  { icon: '📝', title: 'Smart Aptitude Tests', desc: 'Domain-specific MCQ tests for MPC, BiPC, CSE-AI, ECE, MECH and more.', color: 'var(--brand)' },
  { icon: '💼', title: 'Career Intelligence', desc: 'Real salary data, industry demand and growth projections for 2024-2026.', color: 'var(--brand)' },
  { icon: '💬', title: 'EduBot AI Chatbot', desc: 'Ask anything about streams, colleges and careers — powered by Google Gemini.', color: 'var(--brand)' },
  { icon: '📊', title: 'Progress Dashboard', desc: 'Track all predictions, test scores and saved roadmaps in one place.', color: 'var(--brand)' }
];

var STREAMS = [
  { name: 'MPC → B.Tech', emoji: '⚡', desc: 'Engineering & Technology', color: 'var(--brand)' },
  { name: 'BiPC → MBBS', emoji: '🧬', desc: 'Medical & Life Sciences', color: 'var(--brand)' },
  { name: 'MEC → Commerce', emoji: '📈', desc: 'Economics & Finance', color: 'var(--brand)' },
  { name: 'CEC → Law', emoji: '⚖️', desc: 'Business & Public Service', color: 'var(--brand)' },
  { name: 'CSE → AI', emoji: '🤖', desc: 'Artificial Intelligence', color: 'var(--brand)' },
  { name: 'CSE → Data Science', emoji: '📊', desc: 'Data & Analytics', color: 'var(--brand)' }
];

var STEPS = [
  { n: '01', icon: '🎓', title: 'Select Your Level', desc: '10th class, Intermediate or B.Tech — pick where you are now.', color: 'var(--brand)' },
  { n: '02', icon: '🧪', title: 'Take Assessment', desc: 'Interest survey or aptitude MCQ test. Both under 10 minutes.', color: 'var(--brand)' },
  { n: '03', icon: '🚀', title: 'Get AI Roadmap', desc: 'Receive your predicted stream, confidence score and full learning roadmap.', color: 'var(--brand)' }
];

export default function LandingPage() {
  var auth = useAuth();
  var nav = useNavigate();
  var [typed, setTyped] = useState('');
  var [phraseIdx, setPhraseIdx] = useState(0);
  var [deleting, setDeleting] = useState(false);

  useEffect(function () {
    var current = PHRASES[phraseIdx];
    var speed = deleting ? 50 : 100;
    var t = setTimeout(function () {
      if (!deleting && typed.length < current.length) {
        setTyped(current.slice(0, typed.length + 1));
      } else if (!deleting && typed.length === current.length) {
        setTimeout(function () { setDeleting(true); }, 1500);
      } else if (deleting && typed.length > 0) {
        setTyped(current.slice(0, typed.length - 1));
      } else if (deleting && typed.length === 0) {
        setDeleting(false);
        setPhraseIdx(function (p) { return (p + 1) % PHRASES.length; });
      }
    }, speed);
    return function () { clearTimeout(t); };
  }, [typed, deleting, phraseIdx]);

  var s = {
    page: { background: 'var(--bg)', minHeight: '100vh', overflow: 'hidden' },
    hero: { position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', borderBottom: '1px solid var(--border)' },
    orb1: { orb: true, width: '400px', height: '400px', top: '-100px', right: '-100px', background: 'rgba(79,70,229,0.06)', position: 'absolute' },
    orb2: { orb: true, width: '300px', height: '300px', bottom: '-50px', left: '-50px', background: 'rgba(79,70,229,0.04)', position: 'absolute' }
  };

  return (
    React.createElement('div', { style: s.page },
      /* ── HERO ── */
      React.createElement('section', { style: s.hero },
        React.createElement('div', { className: 'orb', style: s.orb1 }),
        React.createElement('div', { className: 'orb', style: s.orb2 }),

        React.createElement('div', { className: 'wrap', style: { position: 'relative', zIndex: 1 } },
          React.createElement('div', { style: { maxWidth: '660px', animation: 'fadeUp 0.8s ease both' } },

            React.createElement('div', { style: { display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' } },
              React.createElement('span', { className: 'badge badge-p' }, '⚡ ai powered'),
              React.createElement('span', { className: 'badge' }, '🇮🇳 made for Indian students')
            ),

            React.createElement('h1', {
              style: {
                fontFamily: 'var(--font1)', fontSize: 'clamp(2.2rem,5vw,3.5rem)',
                fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem', color: 'var(--text)'
              }
            },
              'Predict your ',
              React.createElement('span', { style: { display: 'block' } },
                React.createElement('span', { className: 'gt' }, typed),
                React.createElement('span', { style: { animation: 'blink 1s infinite', color: 'var(--brand)', marginLeft: '2px' } }, '|')
              )
            ),

            React.createElement('p', {
              style: { color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '520px' }
            },
              'Empowering students to make informed educational choices. Our AI analyzes your ',
              React.createElement('strong', { style: { color: 'var(--text)', fontWeight: 600 } }, 'interests'),
              ' and ',
              React.createElement('strong', { style: { color: 'var(--text)', fontWeight: 600 } }, 'aptitude'),
              ' to find your perfect path.'
            ),

            React.createElement('div', { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
              React.createElement(Link, { to: '/register', className: 'btn btn-p', style: { fontSize: '0.95rem', padding: '0.8rem 1.8rem' } }, 'Take Test →'),
              React.createElement(Link, { to: '/login', className: 'btn btn-o', style: { fontSize: '0.95rem', padding: '0.8rem 1.8rem' } }, 'Student Login'),
              React.createElement('div', { style: { height: '32px', width: '1px', background: 'var(--border)', margin: '0 8px' } }),
              React.createElement(GoogleLogin, {
                onSuccess: function (cred) {
                  auth.googleLogin(cred.credential)
                    .then(function () { toast.success('Signed in with Google! 🎉'); nav('/dashboard'); })
                    .catch(function () { toast.error('Google login failed'); });
                },
                onError: function () { toast.error('Google login failed'); },
                useOneTap: true,
                theme: 'filled_blue',
                shape: 'pill',
                size: 'large'
              })
            ),

            React.createElement('div', { style: { display: 'flex', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap' } },
              [['0', 'Students'], ['95%', 'Accuracy'], ['20+', 'Paths']].map(function (item) {
                return React.createElement('div', { key: item[1] },
                  React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text)' } }, item[0]),
                  React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' } }, item[1])
                );
              })
            )
          )
        )
      ),

      /* ── HOW IT WORKS ── */
      React.createElement('section', { className: 'sec', style: { background: 'var(--bg-card2)' } },
        React.createElement('div', { className: 'wrap' },
          React.createElement('div', { style: { textAlign: 'center', marginBottom: '3.5rem' } },
            React.createElement('span', { className: 'badge badge-p', style: { marginBottom: '0.75rem' } }, 'Simple Process'),
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800 } },
              'Your future in ',
              React.createElement('span', { className: 'gt' }, '3 simple steps')
            )
          ),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' } },
            STEPS.map(function (step) {
              return React.createElement('div', { key: step.n, className: 'card', style: { position: 'relative', overflow: 'hidden', padding: '2rem' } },
                React.createElement('div', {
                  style: { position: 'absolute', top: '10px', right: '20px', fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '3rem', color: 'var(--bg-card2)', lineHeight: 1 }
                }, step.n),
                React.createElement('div', { style: { fontSize: '2.5rem', marginBottom: '1.25rem' } }, step.icon),
                React.createElement('h3', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)', fontSize: '1.1rem' } }, step.title),
                React.createElement('p', { style: { color: 'var(--text2)', lineHeight: 1.6, fontSize: '0.9rem' } }, step.desc)
              );
            })
          )
        )
      ),

      /* ── FEATURES ── */
      React.createElement('section', { className: 'sec' },
        React.createElement('div', { className: 'wrap' },
          React.createElement('div', { style: { textAlign: 'center', marginBottom: '3.5rem' } },
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800 } },
              'Our ', React.createElement('span', { className: 'gt' }, 'Capabilities')
            )
          ),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.25rem' } },
            FEATURES.map(function (f) {
              return React.createElement('div', { key: f.title, className: 'card', style: { display: 'flex', gap: '1.25rem', alignItems: 'flex-start' } },
                React.createElement('div', {
                  style: { width: '48px', height: '48px', borderRadius: '12px', background: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }
                }, f.icon),
                React.createElement('div', null,
                  React.createElement('h3', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '6px', fontSize: '1rem', color: 'var(--text)' } }, f.title),
                  React.createElement('p', { style: { color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.5 } }, f.desc)
                )
              );
            })
          )
        )
      ),

      /* ── STREAMS ── */
      React.createElement('section', { className: 'sec', style: { background: 'var(--bg-card2)' } },
        React.createElement('div', { className: 'wrap' },
          React.createElement('div', { style: { textAlign: 'center', marginBottom: '3rem' } },
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800 } },
              'Supported ', React.createElement('span', { className: 'gt' }, 'Career Paths')
            )
          ),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.25rem' } },
            STREAMS.map(function (st) {
              return React.createElement('div', { key: st.name, className: 'card', style: { textAlign: 'center', padding: '2rem 1rem' } },
                React.createElement('div', {
                  className: 'afloat',
                  style: { width: '56px', height: '56px', borderRadius: '50%', background: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto 1.25rem' }
                }, st.emoji),
                React.createElement('div', { style: { fontWeight: 700, marginBottom: '6px', fontFamily: 'var(--font1)', color: 'var(--text)', fontSize: '0.95rem' } }, st.name),
                React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.8rem', fontWeight: 500 } }, st.desc)
              );
            })
          )
        )
      ),

      /* ── CTA ── */
      React.createElement('section', { className: 'sec' },
        React.createElement('div', { className: 'wrap', style: { textAlign: 'center' } },
          React.createElement('div', {
            style: { maxWidth: '700px', margin: '0 auto', padding: '4rem 2rem', background: 'var(--brand)', borderRadius: 'var(--r3)', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }
          },
            React.createElement('div', { style: { position: 'relative', zIndex: 1 } },
              React.createElement('div', { style: { fontSize: '2.5rem', marginBottom: '1.25rem' } }, '✨'),
              React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '2rem', marginBottom: '1rem' } },
                'Take the first step today'
              ),
              React.createElement('p', { style: { opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6, fontSize: '1rem' } },
                'Join thousands of students who found their ideal career path using EduPath AI.'
              ),
              React.createElement(Link, { to: '/register', className: 'btn', style: { background: 'white', color: 'var(--brand)', fontSize: '1rem', padding: '0.8rem 2rem' } }, 'Get Started for Free')
            )
          )
        )
      ),

      /* ── FOOTER ── */
      React.createElement('footer', { style: { borderTop: '1px solid var(--border)', padding: '2.5rem 1.5rem', textAlign: 'center', background: 'var(--bg-card)' } },
        React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '8px', fontSize: '1.1rem', color: 'var(--text)' } },
          'EduPath ', React.createElement('span', { className: 'gt' }, 'AI')
        ),
        React.createElement('div', { style: { marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' } },
          React.createElement(Link, { to: '/career-guide', style: { color: 'var(--brand)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 } }, 'Engineering Career Guide'),
          React.createElement(Link, { to: '/register', style: { color: 'var(--text3)', textDecoration: 'none', fontSize: '0.9rem' } }, 'Take Test'),
          React.createElement(Link, { to: '/login', style: { color: 'var(--text3)', textDecoration: 'none', fontSize: '0.9rem' } }, 'Login')
        ),
        React.createElement('p', { className: 'branding-text' },
          '© 2026 EduPath • Empowering student choices'
        )
      )
    )
  );
}
