import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { dashAPI } from '../utils/api';

var LEVEL_LABEL = { '10th': '10th Class', intermediate: 'Intermediate', btech: 'B.Tech' };

var ACTIONS = [
  { icon: '🎯', title: 'Stream Prediction', desc: 'Interest or aptitude based', to: '/predict', color: 'var(--brand)' },
  { icon: '🗺️', title: 'Explore Roadmaps', desc: 'Detailed learning paths', to: '/roadmap', color: 'var(--brand)' }
];

function StatBox(props) {
  return (
    React.createElement('div', { className: 'card', style: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' } },
      React.createElement('div', { style: { width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0, background: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' } }, props.icon),
      React.createElement('div', null,
        React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--brand)' } }, props.value),
        React.createElement('div', { style: { color: 'var(--text2)', fontSize: '0.8rem', fontWeight: 500 } }, props.label)
      )
    )
  );
}

export default function DashboardPage() {
  var auth = useAuth();
  var [stats, setStats] = useState(null);

  useEffect(function() {
    dashAPI.getStats().then(function(r) { setStats(r.data.stats); }).catch(function() {});
  }, []);

  function greeting() {
    var h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
  }

  var name = auth.user ? auth.user.name : '';
  var level = auth.user ? LEVEL_LABEL[auth.user.educationLevel] || '' : '';
  var stream = auth.user && auth.user.currentStream ? ' • ' + auth.user.currentStream : '';
  var initial = name ? name.charAt(0).toUpperCase() : 'U';

  return (
    React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '4rem 1.5rem 2rem' } },
      React.createElement('div', { style: { maxWidth: '1000px', margin: '0 auto' } },

        /* Header */
        React.createElement('div', { className: 'afu', style: { marginBottom: '2.5rem' } },
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' } },
            React.createElement('div', { style: { width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, color: 'white', fontFamily: 'var(--font1)' } }, initial),
            React.createElement('div', null,
              React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text)' } },
                greeting() + ', ' + name.split(' ')[0] + '! 👋'
              ),
              React.createElement('p', { style: { color: 'var(--text3)', fontSize: '0.875rem', fontWeight: 500 } }, level + stream)
            )
          )
        ),

        /* Stats */
        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '1rem', marginBottom: '2rem' } },
          React.createElement(StatBox, { icon: '🎯', label: 'Predictions Made', value: stats ? stats.totalPredictions : '—' }),
          React.createElement(StatBox, { icon: '📝', label: 'Tests Taken', value: stats ? stats.totalTests : '—' }),
          React.createElement(StatBox, { icon: '📊', label: 'Avg Test Score', value: stats ? stats.averageTestScore + '%' : '—' }),
          React.createElement(StatBox, { icon: '🏆', label: 'Level', value: level || '—' })
        ),

        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' } },

          /* Quick Actions */
          React.createElement('div', null,
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Quick Actions'),
            ACTIONS.map(function(a) {
              return React.createElement(Link, { key: a.to, to: a.to, style: { textDecoration: 'none', display: 'block', marginBottom: '0.75rem' } },
                React.createElement('div', { className: 'card', style: { display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between', cursor: 'pointer', padding: '1rem' } },
                  React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '1rem' } },
                    React.createElement('div', { style: { width: '40px', height: '40px', borderRadius: '10px', background: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' } }, a.icon),
                    React.createElement('div', null,
                      React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', fontSize: '0.9rem', color: 'var(--text)' } }, a.title),
                      React.createElement('div', { style: { color: 'var(--text2)', fontSize: '0.75rem' } }, a.desc)
                    )
                  ),
                  React.createElement('span', { style: { color: 'var(--text3)' } }, '→')
                )
              );
            })
          ),

          /* Recent Predictions */
          React.createElement('div', null,
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Recent Predictions'),
            !stats ? (
              [1,2,3].map(function(i) { return React.createElement('div', { key: i, className: 'skel', style: { height: '64px', marginBottom: '0.75rem' } }); })
            ) : stats.recentPredictions && stats.recentPredictions.length > 0 ? (
              stats.recentPredictions.slice(0, 4).map(function(p, i) {
                return React.createElement(Link, { key: i, to: '/result/' + p.id, style: { textDecoration: 'none', display: 'block', marginBottom: '0.75rem' } },
                  React.createElement('div', { className: 'card', style: { padding: '0.8rem 1rem', cursor: 'pointer' } },
                    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                      React.createElement('div', null,
                        React.createElement('div', { style: { fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font1)', color: 'var(--text)' } }, p.recommended_stream || 'Unknown'),
                        React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.72rem', marginTop: '2px' } },
                          new Date(p.created_at).toLocaleDateString('en-IN') + ' • ' + (p.prediction_mode || '')
                        )
                      ),
                      React.createElement('div', { style: { textAlign: 'right' } },
                        React.createElement('div', { style: { fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--font1)', fontSize: '0.9rem' } }, (p.confidence_score || 0) + '%'),
                        React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.02em' } }, 'confidence')
                      )
                    )
                  )
                );
              })
            ) : (
              React.createElement('div', { className: 'card', style: { textAlign: 'center', padding: '2rem', color: 'var(--text3)' } },
                React.createElement('div', { style: { fontSize: '2rem', marginBottom: '8px' } }, '🎯'),
                React.createElement('div', { style: { fontWeight: 600, marginBottom: '8px', fontSize: '0.9rem' } }, 'No predictions yet'),
                React.createElement(Link, { to: '/predict', className: 'btn btn-p', style: { fontSize: '0.8rem', padding: '0.5rem 1rem' } }, 'Predict Now')
              )
            )
          )
        ),

        /* Tip */
        React.createElement('div', { style: { marginTop: '2.5rem' } },
          React.createElement('div', { className: 'card', style: { background: 'var(--brand)', color: 'white', display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem', border: 'none', boxShadow: 'var(--shadow-lg)' } },
            React.createElement('span', { style: { fontSize: '2rem' } }, '💡'),
            React.createElement('div', { style: { flex: 1, minWidth: '200px' } },
              React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '2px', fontSize: '1rem' } }, 'Pro Tip'),
              React.createElement('div', { style: { opacity: 0.9, fontSize: '0.875rem', lineHeight: 1.5 } },
                auth.user && auth.user.educationLevel === '10th' ? 'Take both the interest and aptitude tests to get the most accurate stream prediction for Intermediate.' :
                auth.user && auth.user.educationLevel === 'intermediate' ? 'Your EAMCET/JEE performance combined with our AI analysis gives the clearest B.Tech branch recommendation.' :
                'Start building projects in your predicted career domain from 3rd year itself to stand out in placements.'
              )
            ),
            React.createElement(Link, { to: '/predict', className: 'btn', style: { background: 'white', color: 'var(--brand)', fontSize: '0.85rem' } }, 'Predict Now →')
          )
        )
      )
    )
  );
}
