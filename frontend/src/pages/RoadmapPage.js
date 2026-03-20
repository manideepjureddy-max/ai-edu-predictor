import React, { useState, useEffect } from 'react';
import { roadmapAPI } from '../utils/api';

var CATS = [
  { key: '10th', label: '10th → Next', emoji: '📖' },
  { key: 'inter', label: 'Inter → Degree', emoji: '🎒' },
  { key: 'btech', label: 'Degree → Career', emoji: '🎓' }
];

function RoadmapCard(props) {
  var key = props.mapKey;
  var data = props.data;
  var onNavigate = props.onNavigate;
  var [open, setOpen] = useState(false);

  var steps = data.steps || data.roadmap || data.semesterPlan || [];

  return (
    React.createElement('div', { className: 'card', style: { marginBottom: '1rem', border: '1px solid ' + (open ? 'var(--brand)' : 'var(--border)'), transition: 'all 0.3s ease' } },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '1rem' }, onClick: function() { setOpen(!open); } },
        React.createElement('div', { style: { flex: 1 } },
          React.createElement('div', { style: { fontWeight: 700, fontFamily: 'var(--font1)', fontSize: '1.05rem', marginBottom: '6px', color: open ? 'var(--brand)' : 'var(--text)' } },
            data.stream || data.career || key.replace(/_/g, ' → ')
          ),
          React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
            data.duration && React.createElement('span', { className: 'badge', style: { fontSize: '0.75rem', background: 'var(--bg)', color: 'var(--text2)', border: '1px solid var(--border)' } }, '⏱️ ' + data.duration),
            data.salaryRange && React.createElement('span', { className: 'badge', style: { fontSize: '0.75rem', background: 'var(--green-light)', color: 'var(--green)', border: 'none', fontWeight: 700 } }, '💰 ' + data.salaryRange),
            data.careerPaths && React.createElement('span', { className: 'badge', style: { fontSize: '0.75rem', background: 'var(--brand-light)', color: 'var(--brand)', border: 'none', fontWeight: 700 } }, '🎯 ' + data.careerPaths.length + ' Paths')
          )
        ),
        React.createElement('span', { style: { color: open ? 'var(--brand)' : 'var(--text3)', fontSize: '0.9rem', marginLeft: '12px', transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' } }, '▼')
      ),

      open && React.createElement('div', { style: { padding: '0 1rem 1.5rem', marginTop: '0.5rem' } },
        React.createElement('div', { style: { height: '1px', background: 'var(--border)', marginBottom: '1.25rem' } }),
        
        data.description && React.createElement('p', { style: { color: 'var(--text2)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.7 } }, data.description),

        data.skills && React.createElement('div', { style: { marginBottom: '1.25rem' } },
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.75rem', color: 'var(--text3)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Required Skills'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
            data.skills.map(function(s) { return React.createElement('span', { key: s, className: 'badge', style: { fontSize: '0.75rem', background: 'var(--brand-light)', color: 'var(--brand)', fontWeight: 600 } }, s); })
          )
        ),

        data.careerPaths && React.createElement('div', { style: { marginBottom: '1.25rem' } },
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.75rem', color: 'var(--text3)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Common Roles'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
            data.careerPaths.map(function(c) { return React.createElement('span', { key: c, className: 'badge', style: { fontSize: '0.75rem', background: 'var(--green-light)', color: 'var(--green)', fontWeight: 600 } }, c); })
          )
        ),

        steps.length > 0 && React.createElement('div', null,
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.75rem', color: 'var(--text3)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Learning Roadmap'),
          steps.map(function(step, i) {
            return React.createElement('div', { key: i, style: { display: 'flex', gap: '1rem', marginBottom: '1rem' } },
              React.createElement('div', { style: { width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0, background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, color: 'white' } }, i + 1),
              React.createElement('div', { style: { flex: 1 } },
                React.createElement('div', { style: { fontWeight: 700, fontSize: '0.92rem', marginBottom: '4px', color: 'var(--text)' } },
                  step.phase || step.sem || ('Step ' + (i + 1))
                ),
                step.tasks && React.createElement('ul', { style: { margin: 0, paddingLeft: '1.25rem', color: 'var(--text2)', fontSize: '0.85rem', lineHeight: 1.6 } },
                  step.tasks.map(function(t, j) { return React.createElement('li', { key: j }, t); })
                ),
                step.subjects && React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' } },
                  step.subjects.map(function(s) { return React.createElement('span', { key: s, className: 'badge', style: { fontSize: '0.7rem', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text2)', fontWeight: 500 } }, s); })
                )
              )
            );
          })
        ),

        data.salaryProgression && React.createElement('div', { style: { marginTop: '1.5rem', padding: '1rem', background: 'var(--green-light)', borderRadius: 'var(--r2)', border: '1px solid var(--green)15' } },
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.8rem', color: 'var(--green)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' } }, 'Salary Projection'),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '12px' } },
            Object.entries(data.salaryProgression).map(function(entry) {
              return React.createElement('div', { key: entry[0] },
                React.createElement('div', { style: { color: 'var(--text3)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase' } }, entry[0]),
                React.createElement('div', { style: { fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--font1)', fontSize: '1rem' } }, entry[1])
              );
            })
          )
        ),

        (data.relatedCareers || data.relatedDegrees) && React.createElement('div', { style: { marginTop: '1.5rem', padding: '1rem', background: 'var(--bg)', borderRadius: 'var(--r2)', border: '1px solid var(--border)' } },
          React.createElement('div', { style: { fontWeight: 700, fontSize: '0.85rem', color: 'var(--text)', marginBottom: '12px' } }, 
            data.relatedCareers ? 'Next Professional Steps' : 'Recommended Educational Path'
          ),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '8px' } },
            (data.relatedCareers || data.relatedDegrees).map(function(linkKey) {
              return React.createElement('button', {
                key: linkKey,
                onClick: function() { onNavigate(data.relatedCareers ? 'btech' : 'inter', linkKey); },
                style: { padding: '0.6rem 1rem', borderRadius: '8px', background: 'var(--brand)', color: 'white', border: 'none', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', boxShadow: 'var(--shadow)' },
                className: 'h-grow'
              }, linkKey.split('_to_')[1].replace(/_/g, ' '));
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

  function handleNavigate(newCat, searchKey) {
    setCat(newCat);
    setSearch(searchKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  var filtered = Object.entries(roadmaps).filter(function(entry) {
    var k = entry[0];
    var d = entry[1];
    if (search) {
      if (search === k) return true; 
      var q = search.toLowerCase();
      return k.toLowerCase().includes(q) || (d.stream || '').toLowerCase().includes(q) || (d.career || '').toLowerCase().includes(q) || (d.fullName || '').toLowerCase().includes(q);
    }
    if (cat === '10th') return k.startsWith('10th');
    if (cat === 'inter') return k.startsWith('Inter_to') || k.startsWith('MPC_');
    if (cat === 'btech') {
      var careerKeys = ['BTech_to', 'Med_to', 'Dental_to', 'BScAg_to', 'Nursing_to', 'BCom_to', 'BBA_to', 'BCA_to', 'Law_to', 'Pharm_to', 'Design_to', 'BHM_to'];
      return careerKeys.some(function(pk) { return k.startsWith(pk); });
    }
    return false;
  });

  return (
    React.createElement('div', { style: { paddingTop: '80px', minHeight: '100vh', padding: '4rem 1.5rem 2rem' } },
      React.createElement('div', { style: { maxWidth: '800px', margin: '0 auto' } },
        React.createElement('div', { style: { textAlign: 'center', marginBottom: '2.5rem' } },
          React.createElement('h1', { style: { fontFamily: 'var(--font1)', fontWeight: 800, fontSize: '1.8rem', marginBottom: '12px', color: 'var(--text)' } }, 'Learning ', React.createElement('span', { className: 'gt' }, 'Roadmaps')),
          React.createElement('p', { style: { color: 'var(--text3)', fontSize: '1rem' } }, 'Step-by-step paths from school to your dream career')
        ),

        React.createElement('div', { style: { position: 'relative', marginBottom: '2rem' } },
          React.createElement('input', { value: search, onChange: function(e) { setSearch(e.target.value); }, placeholder: 'Search careers (e.g. AI Engineer, Doctor)...', className: 'inp', style: { paddingRight: '3rem' } })
        ),

        !search && React.createElement('div', { style: { display: 'flex', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' } },
          CATS.map(function(c) {
            var active = cat === c.key;
            return React.createElement('button', {
              key: c.key, type: 'button',
              onClick: function() { setCat(c.key); },
              style: { padding: '0.65rem 1.25rem', borderRadius: '99px', cursor: 'pointer', background: active ? 'var(--brand)' : 'var(--bg-card)', color: active ? 'white' : 'var(--text2)', border: '1px solid ' + (active ? 'var(--brand)' : 'var(--border)'), fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.2s', boxShadow: active ? 'var(--shadow)' : 'none' }
            }, c.emoji + ' ' + c.label);
          })
        ),

        loading
          ? [1,2,3,4].map(function(i) { return React.createElement('div', { key: i, className: 'skel', style: { height: '80px', marginBottom: '1rem', borderRadius: 'var(--r3)' } }); })
          : filtered.length > 0
            ? filtered.map(function(entry) { return React.createElement(RoadmapCard, { key: entry[0], mapKey: entry[0], data: entry[1], onNavigate: handleNavigate }); })
            : React.createElement('div', { style: { textAlign: 'center', padding: '4rem 2rem' } },
                React.createElement('div', { style: { fontSize: '3.5rem', marginBottom: '1rem' } }, '🏮'),
                React.createElement('div', { style: { fontWeight: 700, color: 'var(--text)', fontSize: '1.1rem' } }, 'No matching paths found'),
                React.createElement('p', { style: { color: 'var(--text3)', marginTop: '8px' } }, 'Try a different search term')
              )
      )
    )
  );
}
