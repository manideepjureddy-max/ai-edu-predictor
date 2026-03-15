import React, { useState, useEffect } from 'react';
import { roadmapAPI } from '../utils/api';

var CATS = [
  { key: '10th', label: '10th → Intermediate', emoji: '📖', color: '#6C63FF' },
  { key: 'btech_branch', label: 'Intermediate → B.Tech', emoji: '🎒', color: '#FF6584' },
  { key: 'career', label: 'B.Tech → Career', emoji: '🎓', color: '#43E97B' }
];

function RoadmapCard(props) {
  var key = props.mapKey;
  var data = props.data;
  var [open, setOpen] = useState(false);

  var color = key.startsWith('10th') ? '#6C63FF' : (key.includes('to_Software') || key.includes('to_AI') || key.includes('to_Data')) ? '#43E97B' : '#FF6584';
  var steps = data.steps || data.roadmap || data.semesterPlan || [];

  return (
    React.createElement('div', { className: 'card', style: { marginBottom: '0.75rem', borderLeft: '3px solid ' + color } },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }, onClick: function() { setOpen(!open); } },
        React.createElement('div', { style: { flex: 1 } },
          React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', fontSize: '1rem', marginBottom: '4px' } },
            data.stream || data.career || key.replace(/_/g, ' → ')
          ),
          React.createElement('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap' } },
            data.duration && React.createElement('span', { className: 'badge badge-p', style: { fontSize: '0.7rem' } }, '⏱️ ' + data.duration),
            data.salaryRange && React.createElement('span', { className: 'badge badge-g', style: { fontSize: '0.7rem' } }, '💰 ' + data.salaryRange),
            data.careerPaths && React.createElement('span', { className: 'badge badge-y', style: { fontSize: '0.7rem' } }, '🎯 ' + data.careerPaths.length + ' careers')
          )
        ),
        React.createElement('span', { style: { color: 'var(--text3)', fontSize: '1.2rem', marginLeft: '12px' } }, open ? '▲' : '▼')
      ),

      open && React.createElement('div', { style: { marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' } },
        data.description && React.createElement('p', { style: { color: 'var(--text2)', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.6 } }, data.description),

        data.skills && React.createElement('div', { style: { marginBottom: '1rem' } },
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.82rem', color: 'var(--text3)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' } }, '🛠️ Skills'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
            data.skills.map(function(s) { return React.createElement('span', { key: s, className: 'badge badge-p', style: { fontSize: '0.76rem' } }, s); })
          )
        ),

        data.careerPaths && React.createElement('div', { style: { marginBottom: '1rem' } },
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.82rem', color: 'var(--text3)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' } }, '💼 Careers'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
            data.careerPaths.map(function(c) { return React.createElement('span', { key: c, className: 'badge badge-g', style: { fontSize: '0.76rem' } }, c); })
          )
        ),

        data.certifications && React.createElement('div', { style: { marginBottom: '1rem' } },
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.82rem', color: 'var(--text3)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' } }, '🏅 Certifications'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
            data.certifications.map(function(c) { return React.createElement('span', { key: c, className: 'badge badge-r', style: { fontSize: '0.76rem' } }, c); })
          )
        ),

        steps.length > 0 && React.createElement('div', null,
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.82rem', color: 'var(--text3)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' } }, '🗺️ Roadmap'),
          steps.map(function(step, i) {
            return React.createElement('div', { key: i, style: { display: 'flex', gap: '0.75rem', marginBottom: '0.5rem' } },
              React.createElement('div', { style: { width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0, background: color + '25', border: '1px solid ' + color + '50', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: color } }, i + 1),
              React.createElement('div', { style: { flex: 1 } },
                React.createElement('div', { style: { fontWeight: 700, fontSize: '0.88rem', marginBottom: '2px' } },
                  step.phase || step.sem || ('Step ' + (i + 1))
                ),
                step.tasks && React.createElement('ul', { style: { margin: 0, paddingLeft: '1rem', color: 'var(--text3)', fontSize: '0.82rem', lineHeight: 1.7 } },
                  step.tasks.map(function(t, j) { return React.createElement('li', { key: j }, t); })
                ),
                step.subjects && React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' } },
                  step.subjects.map(function(s) { return React.createElement('span', { key: s, className: 'badge', style: { fontSize: '0.7rem', background: 'var(--glass)', border: '1px solid var(--border)', color: 'var(--text2)' } }, s); })
                )
              )
            );
          })
        ),

        data.salaryProgression && React.createElement('div', { style: { marginTop: '1rem', padding: '0.75rem', background: 'rgba(67,233,123,0.06)', borderRadius: 'var(--r2)', border: '1px solid rgba(67,233,123,0.15)' } },
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.82rem', color: '#43E97B', marginBottom: '8px' } }, '💰 Salary Progression'),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px' } },
            Object.entries(data.salaryProgression).map(function(entry) {
              return React.createElement('div', { key: entry[0] },
                React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.75rem', textTransform: 'capitalize' } }, entry[0]),
                React.createElement('div', { style: { fontWeight: 700, color: '#43E97B', fontFamily: 'var(--font1)' } }, entry[1])
              );
            })
          )
        )
      )
    )
  );
}

export default function RoadmapPage() {
  var [roadmaps, setRoadmaps] = useState({});
  var [loading, setLoading] = useState(true);
  var [cat, setCat] = useState('10th');
  var [search, setSearch] = useState('');

  useEffect(function() {
    roadmapAPI.getAll().then(function(r) { setRoadmaps(r.data.roadmaps || {}); }).catch(function() {}).finally(function() { setLoading(false); });
  }, []);

  var filtered = Object.entries(roadmaps).filter(function(entry) {
    var k = entry[0];
    var d = entry[1];
    if (search) {
      var q = search.toLowerCase();
      return k.toLowerCase().includes(q) || (d.stream || '').toLowerCase().includes(q) || (d.career || '').toLowerCase().includes(q) || (d.fullName || '').toLowerCase().includes(q);
    }
    if (cat === '10th') return k.startsWith('10th');
    if (cat === 'btech_branch') return k.includes('MPC_to') || k.includes('BiPC') || k.includes('ECE') || k.includes('MECH') || k.includes('CE_to') || k.includes('MEC_to') || k.includes('CEC_to');
    return k.includes('_to_') && !k.startsWith('10th') && !k.includes('MPC_to') && !k.includes('BiPC') && !k.includes('ECE') && !k.includes('MECH') && !k.includes('CE_to') && !k.includes('MEC_to') && !k.includes('CEC_to');
  });

  return (
    React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '5rem 1.5rem 2rem' } },
      React.createElement('div', { style: { maxWidth: '780px', margin: '0 auto' } },
        React.createElement('div', { style: { textAlign: 'center', marginBottom: '2rem' } },
          React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '2rem', marginBottom: '8px' } }, '🗺️ Academic ', React.createElement('span', { className: 'gt' }, 'Roadmaps')),
          React.createElement('p', { style: { color: 'var(--text2)' } }, 'Detailed learning paths for every stream — school to career')
        ),

        React.createElement('input', { value: search, onChange: function(e) { setSearch(e.target.value); }, placeholder: '🔍 Search roadmaps (e.g. CSE, MBBS, AI Engineer)...', className: 'inp', style: { marginBottom: '1.25rem' } }),

        !search && React.createElement('div', { style: { display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' } },
          CATS.map(function(c) {
            return React.createElement('button', {
              key: c.key, type: 'button',
              onClick: function() { setCat(c.key); },
              style: { padding: '0.55rem 1.1rem', borderRadius: '999px', cursor: 'pointer', background: cat === c.key ? c.color + '20' : 'var(--glass)', color: cat === c.key ? c.color : 'var(--text2)', border: cat === c.key ? '1px solid ' + c.color + '50' : '1px solid var(--border)', fontWeight: 600, fontSize: '0.88rem', transition: 'all 0.2s' }
            }, c.emoji + ' ' + c.label);
          })
        ),

        loading
          ? [1,2,3,4].map(function(i) { return React.createElement('div', { key: i, className: 'skel', style: { height: '76px', marginBottom: '0.75rem' } }); })
          : filtered.length > 0
            ? filtered.map(function(entry) { return React.createElement(RoadmapCard, { key: entry[0], mapKey: entry[0], data: entry[1] }); })
            : React.createElement('div', { style: { textAlign: 'center', padding: '3rem', color: 'var(--text3)' } },
                React.createElement('div', { style: { fontSize: '3rem', marginBottom: '0.75rem' } }, '🔍'),
                React.createElement('div', { style: { fontWeight: 600 } }, 'No roadmaps found for "' + search + '"')
              )
      )
    )
  );
}
