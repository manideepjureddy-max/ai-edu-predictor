import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';

export default function LoginPage() {
  var auth = useAuth();
  var nav = useNavigate();
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [showPass, setShowPass] = useState(false);
  var [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) { toast.error('Fill all fields'); return; }
    setLoading(true);
    auth.login(email, password)
      .then(function() {
        toast.success('Welcome back! 🎉');
        nav('/dashboard');
      })
      .catch(function(err) {
        var msg = err.response && err.response.data && err.response.data.error
          ? err.response.data.error : 'Login failed';
        toast.error(msg);
      })
      .finally(function() { setLoading(false); });
  }

  var floaters = ['📚','🎯','🚀','🧠','⚡','🎓'];

  return (
    React.createElement('div', {
      style: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: '2rem' }
    },
      React.createElement('div', { className: 'asi', style: { width: '100%', maxWidth: '400px', position: 'relative', zIndex: 1 } },
        React.createElement('div', { style: { textAlign: 'center', marginBottom: '2.5rem' } },
          React.createElement(Link, { to: '/', style: { textDecoration: 'none' } },
            React.createElement('div', {
              style: { width: '48px', height: '48px', borderRadius: '12px', margin: '0 auto 1.25rem', background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font1)', boxShadow: 'var(--shadow)' }
            }, 'E')
          ),
          React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '8px', color: 'var(--text)' } }, 'Welcome back! 👋'),
          React.createElement('p', { style: { color: 'var(--text3)', fontSize: '0.95rem', fontWeight: 500 } }, 'Log in to continue your journey')
        ),

        React.createElement('div', { style: { background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--r3)', padding: '2.5rem', boxShadow: 'var(--shadow2)' } },
          /* Google Login */
          React.createElement('div', { style: { marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' } },
            React.createElement(GoogleLogin, {
              onSuccess: function(credentialResponse) {
                auth.googleLogin(credentialResponse.credential)
                  .then(function() {
                    toast.success('Signed in with Google! 🎉');
                    nav('/dashboard');
                  })
                  .catch(function(err) {
                    toast.error('Google login failed');
                  });
              },
              onError: function() {
                toast.error('Google login failed');
              },
              useOneTap: true,
              theme: 'outline',
              width: '100%'
            })
          ),

          /* Divider */
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', margin: '1.5rem 0', color: 'var(--text3)', fontSize: '0.8rem', fontWeight: 600 } },
            React.createElement('div', { style: { flex: 1, height: '1px', background: 'var(--border)' } }),
            React.createElement('span', { style: { padding: '0 10px', textTransform: 'uppercase', letterSpacing: '0.1em' } }, 'OR'),
            React.createElement('div', { style: { flex: 1, height: '1px', background: 'var(--border)' } })
          ),

          React.createElement('form', {
            onSubmit: handleSubmit,
          },
          React.createElement('div', { style: { marginBottom: '1.25rem' } },
            React.createElement('label', { style: { display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text2)' } }, 'Email Address'),
            React.createElement('input', { type: 'email', placeholder: 'name@example.com', value: email, onChange: function(e) { setEmail(e.target.value); }, className: 'inp', required: true })
          ),

          React.createElement('div', { style: { marginBottom: '1.75rem' } },
            React.createElement('label', { style: { display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text2)' } }, 'Password'),
            React.createElement('div', { style: { position: 'relative' } },
              React.createElement('input', {
                type: showPass ? 'text' : 'password',
                placeholder: '••••••••', value: password,
                onChange: function(e) { setPassword(e.target.value); },
                className: 'inp', required: true
              }),
              React.createElement('button', {
                type: 'button', onClick: function() { setShowPass(!showPass); },
                style: { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text3)', fontSize: '16px' }
              }, showPass ? '🙈' : '👁️')
            )
          ),

          React.createElement('button', {
            type: 'submit', className: 'btn btn-p', disabled: loading,
            style: { width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '0.85rem' }
          },
            loading
              ? React.createElement('span', null, 'Logging in...')
              : React.createElement('span', null, 'Continue →')
          ),

          React.createElement('p', { style: { textAlign: 'center', marginTop: '1.75rem', color: 'var(--text2)', fontSize: '0.875rem', fontWeight: 500 } },
            "Don't have an account? ",
            React.createElement(Link, { to: '/register', style: { color: 'var(--brand)', textDecoration: 'none', fontWeight: 700 } }, 'Register')
          )
        )
        )
      )
    )
  );
}
