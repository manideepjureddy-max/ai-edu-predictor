import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BTECH_BRANCHES = [
  { id: 'cse', icon: '💻', title: 'CSE', full: 'Computer Science Engineering', roles: 'Software Dev, SDE, AI Engineer, Backend Dev', govt: 'ISRO, DRDO, NIC, BARC, PSUs', private: 'Google, Amazon, Microsoft, TCS, Meta', emerging: 'Web3, Edge Computing, LLMs', salary: '₹6-50 LPA', skills: 'DSA, Coding (Java/Py/JS), Logic' },
  { id: 'it', icon: '🌐', title: 'IT', full: 'Information Technology', roles: 'Product Manager, IT Consultant, Cloud Analyst', govt: 'Banks, Railways, Ministry of IT', private: 'Infosys, Wipro, Accenture, Cognizant', emerging: 'Cloud Architecture, Salesforce, CRM', salary: '₹5-30 LPA', skills: 'Networking, DB Management, Web Tech' },
  { id: 'ece', icon: '📡', title: 'ECE', full: 'Electronics & Communication', roles: 'VLSI Engineer, Embedded Dev, Telecom Engg', govt: 'BSNL, ISRO, DRDO, BEL', private: 'Intel, Qualcomm, Samsung, NVIDIA', emerging: '5G/6G Tech, IoT, Semiconductor Design', salary: '₹5-35 LPA', skills: 'Digital Logic, Verilog, Circuit Design' },
  { id: 'eee', icon: '⚡', title: 'EEE', full: 'Electrical & Electronics', roles: 'Power Systems Engg, Control Systems, Maintenance', govt: 'BHEL, NTPC, PGCIL, State GENCOs', private: 'Siemens, Schneider, ABB, Tata Power', emerging: 'Smart Grids, Renewable Integration', salary: '₹4-25 LPA', skills: 'Circuit Analysis, Power Systems, MATLAB' },
  { id: 'mech', icon: '⚙️', title: 'Mechanical', full: 'Mechanical Engineering', roles: 'Design Engineer, Production Mgr, EV Expert, Maintenance, Quality Engg, Govt Jobs', govt: 'BHEL, ONGC, SAIL, Railways, ISRO', private: 'Tata Motors, Mahindra, Bosch, Airbus, Tesla', emerging: 'EV Battery Tech, 3D Printing, Robotics', salary: '₹3.5-30 LPA', skills: 'SolidWorks, Thermodynamics, GD&T' },
  { id: 'civil', icon: '🏗️', title: 'Civil', full: 'Civil Engineering', roles: 'Structural Engg, Site Mgr, Urban Planner, Geotech, Transportation, Govt Jobs', govt: 'IES, PWD, CPWD, NHAI, Railways', private: 'L&T, Tata Projects, GMR Group, AECOM', emerging: 'Smart Cities, Green Buildings, BIM 5D', salary: '₹3-25 LPA', skills: 'AutoCAD, Structural Design, GIS, Estimation' },
  { id: 'chem', icon: '🧪', title: 'Chemical', full: 'Chemical Engineering', roles: 'Process Engineer, Plant Manager, Safety Expert', govt: 'ONGC, BPCL, HPCL, IOCL', private: 'Reliance, HUL, Dr. Reddy’s, Asian Paints', emerging: 'Green Hydrogen, Nano-fluids, Bio-polymers', salary: '₹5-22 LPA', skills: 'ASPEN Plus, Mass Transfer, Reaction Engg' },
  { id: 'aero', icon: '🚀', title: 'Aerospace', full: 'Aerospace Engineering', roles: 'Aerodynamics Analyst, Rocket Propulsion Engg', govt: 'ISRO, DRDO, HAL, NAL', private: 'Boeing, Airbus, Lockheed Martin, SpaceX', emerging: 'Drone Tech, Hypersonic Flight, Satellites', salary: '₹6-40 LPA', skills: 'Aerodynamics, CFD, Propulsion Science' },
  { id: 'biotech', icon: '🧬', title: 'Biotech', full: 'Biotechnology Engineering', roles: 'Bioprocess Engg, Clinical Researcher, R&D', govt: 'ICMR, CSIR, DBT, Agri-Departments', private: 'Biocon, Pfizer, Serum Institute, Novartis', emerging: 'CRISPR Tools, Bioinformatics, Vaccines', salary: '₹4-25 LPA', skills: 'Molecular Bio, Genomics, HPLC' },
  { id: 'aids', icon: '🤖', title: 'AIDS', full: 'AI & Data Science', roles: 'Data Scientist, NLP Engineer, AI Architect', govt: 'MeitY projects, Defence Research', private: 'Google, OpenAI, Fractal Analytics', emerging: 'Generative AI, MLOps, Computer Vision', salary: '₹8-60 LPA', skills: 'Python, ML Algorithms, Statistics, SQL' },
  { id: 'cyber', icon: '🛡️', title: 'Cyber Sec', full: 'Cyber Security Engineering', roles: 'Ethical Hacker, SOC Analyst, Cryptographer', govt: 'CERT-In, RAW, Intelligence Bureau', private: 'IBM, CrowdStrike, Palo Alto, Cisco', emerging: 'Zero Trust Auth, Blockchain Security', salary: '₹6-45 LPA', skills: 'Networking, Linux, Pen Testing' },
  { id: 'robotics', icon: '🦾', title: 'Robotics', full: 'Robotics Engineering', roles: 'Robotics Dev, Automation Expert, Vision Engg', govt: 'Defence Robotics, ISRO Mars Mission', private: 'Tesla, Fanuc, ABB, Boston Dynamics', emerging: 'Humanoids, Swarm Robotics, Medical Bots', salary: '₹7-50 LPA', skills: 'Mechatronics, ROS (Robot OS), AI Control' }
];

export default function CareerGuidePage() {
  const [tab, setTab] = useState('btech');
  const [activeBranch, setActiveBranch] = useState(BTECH_BRANCHES[0]);

  const s = {
    container: { maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' },
    tabBar: { display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '3rem', background: 'var(--bg-card2)', padding: '6px', borderRadius: '12px', border: '1px solid var(--border)' },
    tabBtn: (active) => ({ flex: 1, padding: '0.8rem', borderRadius: '10px', border: 'none', background: active ? 'white' : 'transparent', color: active ? 'var(--brand)' : 'var(--text3)', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', boxShadow: active ? 'var(--shadow)' : 'none' }),
    branchGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '8px', marginBottom: '2rem' },
    branchBtn: (active) => ({ padding: '12px', borderRadius: '12px', border: '2px solid ' + (active ? 'var(--brand)' : 'var(--border)'), background: active ? 'var(--brand-light)' : 'white', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s' }),
    infoCard: { background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--r3)', padding: '2.5rem', boxShadow: 'var(--shadow)', marginBottom: '3rem' },
    title: { fontFamily: 'var(--font1)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' },
    sub: { color: 'var(--text2)', textAlign: 'center', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3rem' },
    detailGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' },
    detailLabel: { fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' },
    detailVal: { fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.5 },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '2rem', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' },
    th: { background: 'var(--bg-card2)', padding: '1rem', textAlign: 'left', fontWeight: 700, borderBottom: '2px solid var(--border)', fontSize: '0.85rem' },
    td: { padding: '1rem', borderBottom: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text2)' },
    summary: { background: 'var(--brand)', borderRadius: 'var(--r3)', padding: '3rem', color: 'white', textAlign: 'center', marginTop: '4rem' }
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={s.container}>
        <h1 style={s.title}>Career <span className="gt">Intelligence</span> Hub</h1>
        <p style={s.sub}>Expert analysis of India's most sought-after professional degrees to help you build a future that matters.</p>

        <div style={s.tabBar}>
          <button style={s.tabBtn(tab === 'btech')} onClick={() => setTab('btech')}>Engineering (B.Tech)</button>
          <button style={s.tabBtn(tab === 'barch')} onClick={() => setTab('barch')}>Architecture (B.Arch)</button>
          <button style={s.tabBtn(tab === 'mbbs')} onClick={() => setTab('mbbs')}>Medical (MBBS)</button>
        </div>

        {/* ── B.TECH SECTION ── */}
        {tab === 'btech' && (
          <div style={{ animation: 'fadeUp 0.5s ease both' }}>
            <div style={s.branchGrid}>
              {BTECH_BRANCHES.map(b => (
                <div key={b.id} onClick={() => setActiveBranch(b)} style={s.branchBtn(activeBranch.id === b.id)}>
                  <div style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{b.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.8rem', color: activeBranch.id === b.id ? 'var(--brand)' : 'var(--text)' }}>{b.title}</div>
                </div>
              ))}
            </div>

            <div style={s.infoCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{activeBranch.icon}</span>
                <div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{activeBranch.full}</h2>
                  <div style={{ color: 'var(--text3)', fontWeight: 600 }}>Suggested Path: B.Tech / B.E. (4 Years)</div>
                </div>
              </div>
              <p style={{ color: 'var(--text2)', lineHeight: 1.6, marginBottom: '2rem' }}>
                {activeBranch.full} remains a pillar of Indian higher education. In the 2024-2026 landscape, this branch offers exceptional 
                growth potential in both local and international markets with high starting pay for skilled candidates.
              </p>

              <div style={s.detailGrid}>
                {[
                  { l: 'Career Roles', v: activeBranch.roles },
                  { l: 'Top Govt Recruiters', v: activeBranch.govt },
                  { l: 'Top Private Recruiters', v: activeBranch.private },
                  { l: 'Emerging Fields', v: activeBranch.emerging },
                  { l: 'Salary (India)', v: activeBranch.salary },
                  { l: 'Skills Req.', v: activeBranch.skills }
                ].map((item, i) => (
                  <div key={i}>
                    <div style={s.detailLabel}>{item.l}</div>
                    <div style={s.detailVal}>{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── B.ARCH SECTION ── */}
        {tab === 'barch' && (
          <div style={{ animation: 'fadeUp 0.5s ease both' }}>
            <div style={s.infoCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🏛️</span>
                <div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Bachelor of Architecture (B.Arch)</h2>
                  <div style={{ color: 'var(--text3)', fontWeight: 600 }}>Suggested Path: B.Arch (5 Years)</div>
                </div>
              </div>
              <p style={{ color: 'var(--text2)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Architecture is a blend of creative design and engineering. India's rapid urbanization and the "Smart Cities Mission" 
                have created unique opportunities for architects to design sustainable, tech-integrated, and aesthetic habitats.
              </p>
              <div style={s.detailGrid}>
                {[
                  { l: 'Core Roles', v: 'Architect, Urban Planner, Interior Designer, Landscape Architect' },
                  { l: 'Govt Opportunities', v: 'Town Planning Dept, Smart City Projects, Railways, PWD' },
                  { l: 'Private Sector', v: 'Hafeez Contractor, DLF, Godrej Properties, Private Firms' },
                  { l: 'Modern Trends', v: 'Sustainable/Green Architecture, BIM, Smart City Design' },
                  { l: 'Salary (India)', v: '₹4-18 LPA (Highly variable for consultants)' },
                  { l: 'Key Skills', v: 'Creativity, Spatial Thinking, AutoCAD, Revit, SketchUp' }
                ].map((item, i) => (
                  <div key={i}>
                    <div style={s.detailLabel}>{item.l}</div>
                    <div style={s.detailVal}>{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── MBBS SECTION ── */}
        {tab === 'mbbs' && (
          <div style={{ animation: 'fadeUp 0.5s ease both' }}>
            <div style={s.infoCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🩺</span>
                <div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Medical (MBBS)</h2>
                  <div style={{ color: 'var(--text3)', fontWeight: 600 }}>Suggested Path: MBBS + Internship (5.5 Years)</div>
                </div>
              </div>
              <p style={{ color: 'var(--text2)', lineHeight: 1.6, marginBottom: '2rem' }}>
                MBBS remains India's most prestigious medical degree. With the rise of health-tech and a growing focus on preventive 
                healthcare, doctors today have career options beyond traditional practice, including research and management.
              </p>
              <div style={s.detailGrid}>
                {[
                  { l: 'Core Roles', v: 'General Physician, Surgeon, Specialist Doctor (MD/MS)' },
                  { l: 'Specializations', v: 'Cardiology, Neurology, Orthopedics, Pediatrics, OBG' },
                  { l: 'Primary Sector', v: 'Government Hospitals (AIIMS, JIPMER), Private Care (Apollo, Fortis)' },
                  { l: 'Alt Careers', v: 'Medical Research, Teaching, Hospital Admin, Health-Tech Consultant' },
                  { l: 'Salary (India)', v: '₹9-25 LPA (Starting); Highly lucrative post-specialization' },
                  { l: 'Key Skills', v: 'Patience, Dedication, Communication, Clinical Knowledge' }
                ].map((item, i) => (
                  <div key={i}>
                    <div style={s.detailLabel}>{item.l}</div>
                    <div style={s.detailVal}>{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── COMPARISON SECTION ── */}
        <section style={{ marginTop: '4rem' }}>
          <h2 style={{ ...s.secTitle, textAlign: 'center', fontSize: '1.75rem', fontFamily: 'var(--font1)', fontWeight: 800, marginBottom: '2rem' }}>📊 Quick Comparison</h2>
          <div style={{ overflowX: 'auto', background: 'white', borderRadius: '15px', border: '1px solid var(--border)' }}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Feature</th>
                  <th style={s.th}>B.Tech</th>
                  <th style={s.th}>B.Arch</th>
                  <th style={s.th}>MBBS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Duration', '4 Years', '5 Years', '5.5 Years'],
                  ['Entry Difficulty', 'Moderate to High', 'Moderate', 'Extremely High (NEET)'],
                  ['Avg. Study Cost', '₹4-20 Lakhs', '₹5-15 Lakhs', '₹10 Lakhs (Govt) to 1Cr (Pvt)'],
                  ['Work-Life Balance', 'Good (Depends on Role)', 'Moderate (Studio work)', 'Hectic (Clinics/IPD)'],
                  ['Fresh Salary', '₹5-15 LPA', '₹4-9 LPA', '₹8-12 LPA'],
                  ['Social Impact', 'High (Building future tech)', 'High (Building spaces)', 'Very High (Saving lives)']
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ ...s.td, fontWeight: 700, color: 'var(--text)' }}>{row[0]}</td>
                    <td style={s.td}>{row[1]}</td>
                    <td style={s.td}>{row[2]}</td>
                    <td style={s.td}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FUTURE TRENDS ── */}
        <section style={{ marginTop: '4rem' }}>
          <div style={{ background: 'var(--bg-card2)', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'var(--font1)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>🎯 Future Trends (2026-2030)</h2>
            <div style={s.detailGrid}>
              <div>
                <div style={s.detailLabel}>AI & Automation</div>
                <p style={s.detailVal}>Every engineering branch will require basic coding and AI literacy to optimize designs and automate processes.</p>
              </div>
              <div>
                <div style={s.detailLabel}>Green Technology</div>
                <p style={s.detailVal}>Construction and manufacturing are moving towards "Net Zero" targets, creating millions of green jobs.</p>
              </div>
              <div>
                <div style={s.detailLabel}>Personalized Care</div>
                <p style={s.detailVal}>Medical fields are adopting "Precision Medicine" using AI diagnostics and genomic data for treatment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <div style={s.summary}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Plan Your Future with AI</h2>
          <p style={{ opacity: 0.9, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Our career guide provides the roadmap, but our AI prediction tool analyzes your unique strengths to find the perfect fit.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/predict" className="btn" style={{ background: 'white', color: 'var(--brand)', padding: '0.9rem 2.5rem', fontWeight: 700 }}>
              Start AI Assessment →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
