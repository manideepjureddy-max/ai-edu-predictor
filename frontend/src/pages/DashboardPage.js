import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { dashAPI } from '../utils/api';

var LEVEL_LABEL = { '10th': '10th Class', intermediate: 'Intermediate', btech: 'B.Tech' };

var ACTIONS = [
  { icon: '🎯', title: 'AI Stream Prediction', desc: 'Interest or aptitude based', to: '/predict', color: '#6C63FF' },
  { icon: '📝', title: 'Take Aptitude Test', desc: 'Domain-specific mock test', to: '/test', color: '#43E97B' },
  { icon: '🗺️', title: 'Explore Roadmaps', desc: 'Detailed learning paths', to: '/roadmap', color: '#FF6584' }
];

function StatBox(props) {
  return (
    React.createElement('div', { className: 'card', style: { display: 'flex', alignItems: 'center', gap: '1rem' } },
      React.createElement('div', { style: { width: '50px', height: '50px', borderRadius: '14px', flexShrink: 0, background: props.color + '20', border: '1px solid ' + props.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' } }, props.icon),
      React.createElement('div', null,
        React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.5rem', color: props.color } }, props.value),
        React.createElement('div', { style: { color: 'var(--text2)', fontSize: '0.82rem' } }, props.label)
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
    React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '5rem 1.5rem 2rem' } },
      React.createElement('div', { style: { maxWidth: '1080px', margin: '0 auto' } },

        /* Header */
        React.createElement('div', { className: 'afu', style: { marginBottom: '2.5rem' } },
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' } },
            React.createElement('div', { style: { width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg,#6C63FF,#FF6584)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', fontWeight: 700, color: 'white', fontFamily: 'var(--font1)' } }, initial),
            React.createElement('div', null,
              React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.6rem' } },
                greeting() + ', ' + name.split(' ')[0] + '! 👋'
              ),
              React.createElement('p', { style: { color: 'var(--text2)', fontSize: '0.9rem' } }, level + stream)
            )
          )
        ),

        /* Stats */
        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '1rem', marginBottom: '2rem' } },
          React.createElement(StatBox, { icon: '🎯', label: 'Predictions Made', value: stats ? stats.totalPredictions : '—', color: '#6C63FF' }),
          React.createElement(StatBox, { icon: '📝', label: 'Tests Taken', value: stats ? stats.totalTests : '—', color: '#43E97B' }),
          React.createElement(StatBox, { icon: '📊', label: 'Avg Test Score', value: stats ? stats.averageTestScore + '%' : '—', color: '#FF6584' }),
          React.createElement(StatBox, { icon: '🏆', label: 'Level', value: level || '—', color: '#FFD93D' })
        ),

        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' } },

          /* Quick Actions */
          React.createElement('div', null,
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem', color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Quick Actions'),
            ACTIONS.map(function(a) {
              return React.createElement(Link, { key: a.to, to: a.to, style: { textDecoration: 'none', display: 'block', marginBottom: '0.75rem' } },
                React.createElement('div', { className: 'card', style: { display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between', cursor: 'pointer' } },
                  React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '1rem' } },
                    React.createElement('div', { style: { width: '42px', height: '42px', borderRadius: '12px', background: a.color + '20', border: '1px solid ' + a.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' } }, a.icon),
                    React.createElement('div', null,
                      React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', fontSize: '0.92rem' } }, a.title),
                      React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.78rem' } }, a.desc)
                    )
                  ),
                  React.createElement('span', { style: { color: 'var(--text3)' } }, '→')
                )
              );
            })
          ),

          /* Recent Predictions */
          React.createElement('div', null,
            React.createElement('h2', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem', color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Recent Predictions'),
            !stats ? (
              [1,2,3].map(function(i) { return React.createElement('div', { key: i, className: 'skel', style: { height: '68px', marginBottom: '0.75rem' } }); })
            ) : stats.recentPredictions && stats.recentPredictions.length > 0 ? (
              stats.recentPredictions.slice(0, 4).map(function(p, i) {
                return React.createElement(Link, { key: i, to: '/result/' + p.id, style: { textDecoration: 'none', display: 'block', marginBottom: '0.75rem' } },
                  React.createElement('div', { className: 'card', style: { padding: '0.9rem 1rem', cursor: 'pointer' } },
                    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                      React.createElement('div', null,
                        React.createElement('div', { style: { fontWeight: 700, fontSize: '0.92rem', fontFamily: 'var(--font1)' } }, p.recommended_stream || 'Unknown'),
                        React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.75rem', marginTop: '2px' } },
                          new Date(p.created_at).toLocaleDateString('en-IN') + ' • ' + (p.prediction_mode || '')
                        )
                      ),
                      React.createElement('div', { style: { textAlign: 'right' } },
                        React.createElement('div', { style: { fontWeight: 700, color: '#43E97B', fontFamily: 'var(--font1)' } }, (p.confidence_score || 0) + '%'),
                        React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.72rem' } }, 'confidence')
                      )
                    )
                  )
                );
              })
            ) : (
              React.createElement('div', { className: 'card', style: { textAlign: 'center', padding: '2rem', color: 'var(--text3)' } },
                React.createElement('div', { style: { fontSize: '2rem', marginBottom: '8px' } }, '🎯'),
                React.createElement('div', { style: { fontWeight: 600, marginBottom: '4px' } }, 'No predictions yet'),
                React.createElement(Link, { to: '/predict', className: 'btn btn-p', style: { fontSize: '0.85rem', padding: '0.5rem 1.2rem', marginTop: '0.75rem' } }, 'Start Prediction →')
              )
            )
          )
        ),

        /* Tip */
        React.createElement('div', { style: { marginTop: '2rem' } },
          React.createElement('div', { className: 'card', style: { background: 'var(--grad-card)', border: '1px solid var(--border2)', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' } },
            React.createElement('span', { style: { fontSize: '2rem' } }, '💡'),
            React.createElement('div', { style: { flex: 1, minWidth: '200px' } },
              React.createElement('div', { style: { fontFamily: 'var(--font1)', fontWeight: 700, marginBottom: '4px' } }, 'Pro Tip'),
              React.createElement('div', { style: { color: 'var(--text2)', fontSize: '0.9rem' } },
                auth.user && auth.user.educationLevel === '10th' ? 'Take both the interest and aptitude tests to get the most accurate stream prediction for Intermediate.' :
                auth.user && auth.user.educationLevel === 'intermediate' ? 'Your EAMCET/JEE performance combined with our AI analysis gives the clearest B.Tech branch recommendation.' :
                'Start building projects in your predicted career domain from 3rd year itself to stand out in placements.'
              )
            ),
            React.createElement(Link, { to: '/predict', className: 'btn btn-p', style: { fontSize: '0.9rem' } }, 'Predict Now →')
          )
        )
      )
    )
  );
}
