import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

var links = [
  { path: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { path: '/predict', label: 'Predict', icon: '🎯' },
  { path: '/test', label: 'Test', icon: '📝' },
  { path: '/roadmap', label: 'Roadmaps', icon: '🗺️' },
  { path: '/career-guide', label: 'Career Guide', icon: '🎓' }
];

export default function Navbar() {
  var auth = useAuth();
  var loc = useLocation();
  var nav = useNavigate();
  var [scrolled, setScrolled] = useState(false);

  useEffect(function() {
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener('scroll', onScroll);
    return function() { window.removeEventListener('scroll', onScroll); };
  }, []);

  function handleLogout() {
    auth.logout();
    nav('/');
  }

  var navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0.6rem 1.5rem',
    background: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : 'none',
    transition: 'all 0.3s ease'
  };

  return (
    React.createElement('nav', { style: navStyle },
      React.createElement(Link, { to: '/dashboard', style: { textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' } },
        React.createElement('div', {
          style: {
            width: 32, height: 32, borderRadius: '8px',
            background: 'var(--brand)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px', fontWeight: 700, color: 'white',
            fontFamily: 'var(--font1)'
          }
        }, 'E'),
        React.createElement('span', {
          style: { fontFamily: 'var(--font1)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }
        }, 'EduPath ', React.createElement('span', { className: 'gt' }, 'AI'))
      ),

      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '2px' } },
        links.map(function(lk) {
          var active = loc.pathname === lk.path;
          return React.createElement(Link, {
            key: lk.path, to: lk.path,
            style: {
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '0.4rem 0.8rem', borderRadius: 'var(--r)',
              textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600,
              color: active ? 'var(--brand)' : 'var(--text2)',
              background: active ? 'var(--brand-light)' : 'transparent',
              transition: 'all 0.2s'
            }
          },
            React.createElement('span', { style: { fontSize: '14px' } }, lk.icon),
            lk.label
          );
        })
      ),

      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
        React.createElement('div', {
          style: {
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '0.3rem 0.6rem', borderRadius: 'var(--r)',
            background: 'var(--bg-card2)', border: '1px solid var(--border)'
          }
        },
          React.createElement('div', {
            style: {
              width: 24, height: 24, borderRadius: '50%',
              background: 'var(--brand)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', fontWeight: 700, color: 'white'
            }
          }, auth.user && auth.user.name ? auth.user.name.charAt(0).toUpperCase() : 'U'),
          React.createElement('span', {
            style: { fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', maxWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
          }, auth.user ? auth.user.name.split(' ')[0] : '')
        ),
        React.createElement('button', {
          onClick: handleLogout,
          className: 'btn btn-o',
          style: { padding: '0.4rem 0.75rem', fontSize: '0.8rem' }
        }, 'Logout')
      )
    )
  );
}
