import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

var EDU_OPTIONS = [
  { value: '10th', label: '10th Class', emoji: '📖', desc: 'Choosing Intermediate stream' },
  { value: 'intermediate', label: 'Intermediate', emoji: '🎒', desc: 'Choosing B.Tech branch' },
  { value: 'btech', label: 'B.Tech', emoji: '🎓', desc: 'Choosing Career Path' }
];

var STREAMS = {
  intermediate: ['MPC','BiPC','MEC','CEC'],
  btech: ['CSE','ECE','EEE','MECH','CE','CSE-AI','CSE-DS','CSE-Cyber','AIDS','ECM']
};

export default function RegisterPage() {
  var auth = useAuth();
  var nav = useNavigate();
  var [step, setStep] = useState(1);
  var [loading, setLoading] = useState(false);
  var [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', educationLevel: '', currentStream: '', school: '', city: '' });

  function upd(k) {
    return function(e) { setForm(function(p) { var n = Object.assign({}, p); n[k] = e.target.value; return n; }); };
  }

  function nextStep() {
    if (step === 1) {
      if (!form.name || !form.email || !form.password) { toast.error('Fill all required fields'); return; }
      if (form.password !== form.confirm) { toast.error('Passwords do not match'); return; }
      if (form.password.length < 6) { toast.error('Password min 6 characters'); return; }
    }
    if (step === 2 && !form.educationLevel) { toast.error('Select your education level'); return; }
    setStep(function(s) { return s + 1; });
  }

  function handleSubmit() {
    setLoading(true);
    auth.register({ name: form.name, email: form.email, password: form.password, educationLevel: form.educationLevel, currentStream: form.currentStream || undefined, school: form.school || undefined, city: form.city || undefined })
      .then(function() {
        toast.success('Account created! Welcome 🎉');
        nav('/dashboard');
      })
      .catch(function(err) {
        var msg = err.response && err.response.data && err.response.data.error ? err.response.data.error : 'Registration failed';
        toast.error(msg);
      })
      .finally(function() { setLoading(false); });
  }

  var pct = ((step - 1) / 2) * 100;

  return (
    React.createElement('div', {
      style: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: '2rem' }
    },
      React.createElement('div', { className: 'asi', style: { width: '100%', maxWidth: '440px', position: 'relative', zIndex: 1 } },
        /* Header */
        React.createElement('div', { style: { textAlign: 'center', marginBottom: '1.5rem' } },
          React.createElement(Link, { to: '/', style: { textDecoration: 'none' } },
            React.createElement('div', { style: { width: '48px', height: '48px', borderRadius: '12px', margin: '0 auto 1rem', background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font1)', boxShadow: 'var(--shadow)' } }, 'E')
          ),
          React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '4px', color: 'var(--text)' } }, 'Join EduPath 🚀'),
          React.createElement('p', { style: { color: 'var(--text3)', fontSize: '0.9rem', fontWeight: 500 } }, 'Step ' + step + ' of 3 — ' + ['Account Info', 'Your Level', 'Review'][step - 1])
        ),

        /* Progress */
        React.createElement('div', { className: 'pbar', style: { marginBottom: '1.5rem', height: '6px' } },
          React.createElement('div', { className: 'pfill', style: { width: pct + '%', background: 'var(--brand)' } })
        ),

        React.createElement('div', { style: { background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--r3)', padding: '2rem', boxShadow: 'var(--shadow2)' } },

          /* STEP 1 */
          step === 1 && React.createElement('div', null,
            [
              ['name', 'text', 'Full Name *', 'John Doe'],
              ['email', 'email', 'Email Address *', 'john@example.com']
            ].map(function(f) {
              return React.createElement('div', { key: f[0], style: { marginBottom: '1.25rem' } },
                React.createElement('label', { style: { display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text2)' } }, f[2]),
                React.createElement('input', { type: f[1], placeholder: f[3], value: form[f[0]], onChange: upd(f[0]), className: 'inp' })
              );
            }),
            React.createElement('div', { style: { marginBottom: '1.25rem' } },
              React.createElement('label', { style: { display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text2)' } }, 'Password *'),
              React.createElement('input', { type: 'password', placeholder: '••••••••', value: form.password, onChange: upd('password'), className: 'inp' })
            ),
            React.createElement('div', { style: { marginBottom: '1.75rem' } },
              React.createElement('label', { style: { display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text2)' } }, 'Confirm Password *'),
              React.createElement('input', { type: 'password', placeholder: '••••••••', value: form.confirm, onChange: upd('confirm'), className: 'inp' })
            ),
            React.createElement('button', { onClick: nextStep, className: 'btn btn-p', style: { width: '100%', justifyContent: 'center', padding: '0.85rem' } }, 'Continue →')
          ),

          /* STEP 2 */
          step === 2 && React.createElement('div', null,
            React.createElement('p', { style: { color: 'var(--text2)', marginBottom: '1.25rem', fontSize: '0.9rem', textAlign: 'center' } }, 'Select your current education level'),
            EDU_OPTIONS.map(function(opt) {
              var active = form.educationLevel === opt.value;
              return React.createElement('div', {
                key: opt.value,
                onClick: function() { setForm(function(p) { return Object.assign({}, p, { educationLevel: opt.value }); }); },
                style: { padding: '1rem', borderRadius: 'var(--r2)', border: '2px solid ' + (active ? 'var(--brand)' : 'var(--border)'), background: active ? 'var(--brand-light)' : 'var(--bg-card)', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }
              },
                React.createElement('span', { style: { fontSize: '1.5rem' } }, opt.emoji),
                React.createElement('div', { style: { flex: 1 } },
                  React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', fontSize: '0.95rem', color: active ? 'var(--brand)' : 'var(--text)' } }, opt.label),
                  React.createElement('div', { style: { color: 'var(--text2)', fontSize: '0.75rem' } }, opt.desc)
                ),
                active && React.createElement('span', { style: { color: 'var(--brand)', fontSize: '1rem' } }, '✓')
              );
            }),
            (form.educationLevel === 'intermediate' || form.educationLevel === 'btech') && React.createElement('div', { style: { marginBottom: '1.5rem', marginTop: '1rem' } },
              React.createElement('label', { style: { display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text2)' } }, 'Current Stream'),
              React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '8px' } },
                (STREAMS[form.educationLevel] || []).map(function(s) {
                  var active = form.currentStream === s;
                  return React.createElement('button', {
                    key: s, type: 'button',
                    onClick: function() { setForm(function(p) { return Object.assign({}, p, { currentStream: s }); }); },
                    style: { padding: '0.4rem 0.8rem', borderRadius: 'var(--r)', border: '1px solid ' + (active ? 'var(--brand)' : 'var(--border)'), cursor: 'pointer', background: active ? 'var(--brand)' : 'transparent', color: active ? 'white' : 'var(--text2)', fontWeight: 600, fontSize: '0.8rem', transition: 'all 0.2s' }
                  }, s);
                })
              )
            ),
            React.createElement('div', { style: { display: 'flex', gap: '10px' } },
              React.createElement('button', { onClick: function() { setStep(1); }, className: 'btn btn-o', style: { flex: 1, padding: '0.8rem' } }, 'Back'),
              React.createElement('button', { onClick: nextStep, className: 'btn btn-p', style: { flex: 2, padding: '0.8rem' } }, 'Next')
            )
          ),

          /* STEP 3 */
          step === 3 && React.createElement('div', null,
            React.createElement('div', { style: { marginBottom: '1.25rem' } },
              React.createElement('label', { style: { display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text2)' } }, 'School / College Name'),
              React.createElement('input', { type: 'text', placeholder: 'Enter your school name', value: form.school, onChange: upd('school'), className: 'inp' })
            ),
            React.createElement('div', { style: { marginBottom: '1.75rem' } },
              React.createElement('label', { style: { display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text2)' } }, 'City'),
              React.createElement('input', { type: 'text', placeholder: 'Enter your city', value: form.city, onChange: upd('city'), className: 'inp' })
            ),
            React.createElement('div', { style: { padding: '1rem', background: 'var(--bg-card2)', borderRadius: 'var(--r2)', border: '1px solid var(--border)', marginBottom: '1.75rem' } },
              React.createElement('div', { style: { fontWeight: 700, marginBottom: '8px', color: 'var(--brand)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Summary'),
              React.createElement('div', { style: { color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.8 } },
                React.createElement('div', null, '👤 ' + form.name),
                React.createElement('div', null, '📧 ' + form.email),
                React.createElement('div', null, '🎓 ' + form.educationLevel + (form.currentStream ? ' • ' + form.currentStream : ''))
              )
            ),
            React.createElement('div', { style: { display: 'flex', gap: '10px' } },
              React.createElement('button', { onClick: function() { setStep(2); }, className: 'btn btn-o', style: { flex: 1, padding: '0.8rem' } }, 'Back'),
              React.createElement('button', { onClick: handleSubmit, className: 'btn btn-p', disabled: loading, style: { flex: 2, padding: '0.8rem' } },
                loading ? 'Creating...' : 'Create Account 🎉'
              )
            )
          ),

          React.createElement('p', { style: { textAlign: 'center', marginTop: '1.75rem', color: 'var(--text2)', fontSize: '0.875rem', fontWeight: 500 } },
            'Already have an account? ',
            React.createElement(Link, { to: '/login', style: { color: 'var(--brand)', textDecoration: 'none', fontWeight: 700 } }, 'Login')
          )
        )
      )
    )
  );
}
