import React, { useState } from 'react';
import { certsData } from './certsData';

export default function App() {
  const [activeTab, setActiveTab] = useState('certs');
  const [search, setSearch] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [activeModal, setActiveModal] = useState(null);
  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState([
    'Abdul Ghaffar Portfolio CLI v2.1.0 (Production Verified)',
    'Type "help" to see available terminal commands.'
  ]);

  const projectsData = [
    {
      id: 1,
      title: "YOLOv8 Computer Vision Analytics Engine",
      category: "ML/AI",
      desc: "Real-time object detection and spatial analytics system built with YOLOv8, OpenCV, and Python.",
      tech: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
      link: "#"
    },
    {
      id: 2,
      title: "Benchmark Classification & ML Pipeline",
      category: "ML/AI",
      desc: "End-to-end data preprocessing, model selection, and hyperparameter tuning pipeline for tabular datasets.",
      tech: ["Scikit-Learn", "Pandas", "NumPy", "MLflow"],
      link: "#"
    },
    {
      id: 3,
      title: "Full-Stack MERN Portfolio & Dashboards",
      category: "Web Dev",
      desc: "High-performance React web application with interactive shell CLI and responsive dashboard components.",
      tech: ["React.js", "Node.js", "Express", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 4,
      title: "Real Estate Price Prediction Engine",
      category: "Data Science",
      desc: "Statistical regression and EDA dashboard for predictive real estate modeling.",
      tech: ["Python", "Seaborn", "Scikit-Learn", "Flask"],
      link: "#"
    }
  ];

  const platformsList = [
    { key: "Datheon", title: "💼 Machine Learning Internships (2026)" },
    { key: "Cisco NetAcad", title: "🌐 Cisco Networking Academy (10 Certificates)" },
    { key: "DigiSkills (Virtual University)", title: "🎓 DigiSkills & Virtual University (8 Certificates)" },
    { key: "HP LIFE", title: "🏢 HP LIFE International (16 Certificates)" },
    { key: "Academic Qualifications", title: "📜 Formal Degrees & College Credentials" }
  ];

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = cliInput.trim().toLowerCase();
      let response = '';

      switch (cmd) {
        case 'help':
          response = 'Commands: bio, certs, projects, skills, contact, clear';
          break;
        case 'bio':
          response = 'Abdul Ghaffar | BSCS Student (Virtual University of Pakistan) | DAE CIT | ML & Full-Stack Engineer';
          break;
        case 'certs':
          response = `Total Verified Credentials: ${certsData.length} active credentials organized by platform.`;
          break;
        case 'projects':
          response = `Featured Projects: ${projectsData.map(p => p.title).join(' | ')}`;
          break;
        case 'skills':
          response = 'Python, Scikit-Learn, YOLOv8, MERN Stack, React.js, Node.js, SQL, Cisco Networking';
          break;
        case 'contact':
          response = 'Email: abdulghaffarturk7455@gmail.com | GitHub: github.com/abdulghaffar425';
          break;
        case 'clear':
          setCliLogs([]);
          setCliInput('');
          return;
        default:
          response = `Command not recognized: "${cmd}". Type "help" for options.`;
      }

      setCliLogs(prev => [...prev, `> ${cliInput}`, response]);
      setCliInput('');
    }
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif' }}>
      
      {/* Header & Quick Action Bar */}
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #334155', paddingBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#38bdf8', margin: 0 }}>ABDUL GHAFFAR</h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', margin: '0.5rem 0 0 0' }}>
            Machine Learning & Full-Stack Engineer | BSCS (Virtual University of Pakistan) | DAE CIT
          </p>
        </div>
        <div>
          <a
            href="/resume.pdf"
            download="Abdul_Ghaffar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#0284c7',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.2s'
            }}
          >
            📄 Download Resume (PDF)
          </a>
        </div>
      </header>

      {/* Interactive CLI Terminal */}
      <section style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '1rem', marginBottom: '2rem', fontFamily: 'monospace' }}>
        <div style={{ color: '#22c55e', marginBottom: '0.5rem', fontWeight: 'bold' }}>⚡ Interactive Shell CLI</div>
        <div style={{ height: '100px', overflowY: 'auto', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
          {cliLogs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#38bdf8', marginRight: '0.5rem' }}>$</span>
          <input
            type="text"
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type command (e.g. help, bio, certs, projects, skills, contact)..."
            style={{ backgroundColor: 'transparent', border: 'none', color: '#f8fafc', width: '100%', outline: 'none', fontFamily: 'monospace' }}
          />
        </div>
      </section>

      {/* Main Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '0.75rem' }}>
        <button
          onClick={() => setActiveTab('certs')}
          style={{
            padding: '0.6rem 1.2rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'certs' ? '#0284c7' : '#1e293b',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          📜 Verified Credentials ({certsData.length})
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          style={{
            padding: '0.6rem 1.2rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'projects' ? '#0284c7' : '#1e293b',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          🚀 Featured Projects ({projectsData.length})
        </button>
      </div>

      {activeTab === 'certs' && (
        <div style={{ marginBottom: '2rem' }}>
          {/* Platform Filter Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <button
              onClick={() => setSelectedPlatform('All')}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '0.375rem',
                border: '1px solid #0284c7',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                backgroundColor: selectedPlatform === 'All' ? '#0284c7' : '#0f172a',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              Show All Platforms
            </button>
            {platformsList.map(p => (
              <button
                key={p.key}
                onClick={() => setSelectedPlatform(p.key)}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #334155',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  backgroundColor: selectedPlatform === p.key ? '#0284c7' : '#1e293b',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                {p.key}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search credential title or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '0.5rem 1rem', borderRadius: '0.375rem', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#fff', outline: 'none', width: '100%', maxWidth: '400px' }}
          />
        </div>
      )}

      {/* Render Credentials by Strict Platform Groups */}
      {activeTab === 'certs' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {platformsList
            .filter(p => selectedPlatform === 'All' || selectedPlatform === p.key)
            .map(platform => {
              const platformCerts = certsData.filter(c => {
                const isPlatformMatch = c.issuer.includes(platform.key) || (platform.key === "Academic Qualifications" && (c.issuer.includes("Virtual University") || c.issuer.includes("PBTE")));
                const isSearchMatch = c.title.toLowerCase().includes(search.toLowerCase()) || c.code.toLowerCase().includes(search.toLowerCase());
                return isPlatformMatch && isSearchMatch;
              });

              if (platformCerts.length === 0) return null;

              return (
                <div key={platform.key} style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '1.25rem' }}>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '1rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem' }}>
                    {platform.title}
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                    {platformCerts.map(cert => (
                      <div key={cert.id} style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.75rem', backgroundColor: '#0369a1', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', color: '#e0f2fe' }}>
                              {cert.category}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 'bold' }}>
                              {cert.date}
                            </span>
                          </div>
                          <h3 style={{ fontSize: '1.05rem', margin: '0.5rem 0 0.25rem 0', color: '#f8fafc' }}>{cert.title}</h3>
                          <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>{cert.issuer}</p>
                          <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.5rem' }}>Code: {cert.code}</p>
                        </div>
                        
                        <button
                          onClick={() => setActiveModal(cert)}
                          style={{
                            marginTop: '1rem',
                            backgroundColor: '#0284c7',
                            color: '#fff',
                            border: 'none',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            alignSelf: 'flex-start'
                          }}
                        >
                          👁️ View Credential
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        /* Projects View */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {projectsData.map(proj => (
            <div key={proj.id} style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem', padding: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#15803d', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', color: '#dcfce7' }}>
                {proj.category}
              </span>
              <h3 style={{ fontSize: '1.2rem', margin: '0.75rem 0 0.5rem 0', color: '#f8fafc' }}>{proj.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.4', marginBottom: '1rem' }}>{proj.desc}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {proj.tech.map((t, idx) => (
                  <span key={idx} style={{ fontSize: '0.75rem', backgroundColor: '#0f172a', color: '#38bdf8', border: '1px solid #0284c7', padding: '0.15rem 0.4rem', borderRadius: '0.2rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certificate Detail Modal */}
      {activeModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '1rem' }}>
          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem', padding: '1.5rem', maxWidth: '500px', width: '100%', color: '#f8fafc' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: 0 }}>{activeModal.title}</h3>
            <p><strong>Issuing Body:</strong> {activeModal.issuer}</p>
            <p><strong>Credential ID / Code:</strong> {activeModal.code}</p>
            <p><strong>Year / Date:</strong> {activeModal.date}</p>
            <p><strong>Domain:</strong> {activeModal.category}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.5rem' }}>
              <button
                onClick={() => setActiveModal(null)}
                style={{ backgroundColor: '#64748b', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.25rem', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}