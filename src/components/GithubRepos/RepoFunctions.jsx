import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileCode, Code, ChevronDown, ChevronRight, Clock } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './RepoFunctions.css';

const LanguageBar = ({ languages }) => {
  if (!languages || languages.length === 0) return null;
  
  const getLangColor = (lang) => {
    const colors = {
      Python: '#3572A5',
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      'C++': '#f34b7d',
      C: '#555555',
      HTML: '#e34c26',
      CSS: '#563d7c',
      JupyterNotebook: '#DA5B0B',
      Shell: '#89e051',
      MATLAB: '#e16737',
      Dockerfile: '#384d54'
    };
    return colors[lang.replace(/\s+/g, '')] || '#ccc';
  };

  return (
    <div className="language-bar-container" style={{ width: '100%', marginTop: '1.2rem', marginBottom: '1rem' }}>
      <div className="language-progress" style={{ display: 'flex', height: '8px', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
        {languages.map((lang, idx) => (
          <div 
            key={idx} 
            title={`${lang.name} ${lang.percentage}%`}
            style={{ width: `${lang.percentage}%`, backgroundColor: getLangColor(lang.name) }}
          />
        ))}
      </div>
      <div className="language-legend" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        {languages.map((lang, idx) => (
          <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: getLangColor(lang.name) }}></span>
            {lang.name} <strong>{lang.percentage}%</strong>
          </span>
        ))}
      </div>
    </div>
  );
};

const Collapsible = ({ title, subtitle, children, defaultOpen = false, level = 1, icon = null }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const getStyleForLevel = () => {
    if (level === 1) return { padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' };
    if (level === 2) return { padding: '0.8rem', background: 'rgba(0,0,0,0.2)', borderRadius: '6px', marginBottom: '0.8rem', borderLeft: '3px solid var(--primary)' };
    if (level === 3) return { padding: '0.6rem', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', marginBottom: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' };
    return {};
  };

  const getHeaderStyle = () => {
    if (level === 1) return { fontSize: '1.5rem', fontWeight: 'bold' };
    if (level === 2) return { fontSize: '1.2rem', fontWeight: '600' };
    if (level === 3) return { fontSize: '1rem', fontWeight: '500', color: 'var(--primary)' };
    return {};
  };

  return (
    <div className={`collapsible-section level-${level}`} style={getStyleForLevel()}>
      <div 
        className="collapsible-header" 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none', gap: '8px' }}
      >
        <div style={{ color: 'var(--text-secondary)' }}>
          {isOpen ? <ChevronDown size={level === 1 ? 24 : 20}/> : <ChevronRight size={level === 1 ? 24 : 20}/>}
        </div>
        {icon && <div>{icon}</div>}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={getHeaderStyle()}>{title}</span>
            {subtitle && <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>{subtitle}</span>}
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="collapsible-content" style={{ marginTop: '1rem', paddingLeft: level === 3 ? '0' : '1rem' }}>
          {children}
        </div>
      )}
    </div>
  );
};

const RepoFunctions = () => {
  const { repoName } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/repos/${repoName}.json`);
        if (!response.ok) {
          throw new Error('Repository data not found or no functions extracted.');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [repoName]);

  if (loading) return <div className="loading-state">Loading API functions...</div>;
  if (error) return (
    <div className="error-state">
      <h3>Oops!</h3>
      <p>{error}</p>
      <Link to="/github" className="back-link mt-4"><ArrowLeft size={20} /> Back to Repositories</Link>
    </div>
  );

  const getLanguageFromPath = (filepath) => {
    const ext = filepath.split('.').pop().toLowerCase();
    const map = {
      'py': 'Python',
      'js': 'JavaScript',
      'jsx': 'JavaScript',
      'ts': 'TypeScript',
      'tsx': 'TypeScript',
      'cpp': 'C++',
      'c': 'C',
      'h': 'C/C++',
      'hpp': 'C++',
      'sh': 'Shell',
      'm': 'MATLAB',
      'ipynb': 'Jupyter Notebook',
      'html': 'HTML',
      'css': 'CSS'
    };
    return map[ext] || 'Other';
  };

  if (!data) return null;

  // Group by language
  const groupedByLang = {};
  const allFiles = data.all_files || {};
  const funcsExtracted = data.functions_extracted || {};
  const fileMetadata = data.file_metadata || {};

  Object.entries(allFiles).forEach(([filepath, fileData]) => {
    const lang = getLanguageFromPath(filepath);
    if (!groupedByLang[lang]) groupedByLang[lang] = [];
    
    // merge functions
    const functions = funcsExtracted[filepath] || [];
    groupedByLang[lang].push({ filepath, fileData, functions });
  });

  return (
    <div className="repo-functions-page section">
      <div className="container">
        <Link to="/github" className="back-link"><ArrowLeft size={20} /> Back to Repositories</Link>

        <div className="repo-header glass" style={{ display: 'grid', gridTemplateColumns: data.repo_insight ? 'repeat(auto-fit, minmax(350px, 1fr))' : '1fr', gap: '2rem', alignItems: 'stretch' }}>
          
          <div className="repo-info-col" style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className="repo-title">{data.name} API & File Reference</h1>
            {data.description && <p className="repo-desc mt-2 mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{data.description}</p>}
          
          {data.repo_insight && (
            <div className="repo-insight-col" style={{ display: 'flex' }}>
              <div className="repo-insight mt-4 mb-4" style={{ 
                flex: 1,
                padding: '1.5rem', 
                background: 'linear-gradient(145deg, rgba(30,50,90,0.3), rgba(10,20,40,0.2))', 
                borderLeft: '4px solid #ecc94b', 
                borderRadius: '0 8px 8px 0', 
                color: '#e2e8f0',
                lineHeight: '1.7'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#ecc94b', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  ✨ AI Repository Insight
                </div>
                <p style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: '1.05rem' }}>{data.repo_insight}</p>
              </div>
            </div>
          )}
          
          <div style={{ marginTop: 'auto' }}>
            {data.languages && <LanguageBar languages={data.languages} />}
            
            <div className="repo-meta" style={{ marginTop: '1rem', display: 'flex', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
              {data.updated_at && <span><Clock size={16} style={{display:'inline', verticalAlign:'sub', marginRight:'4px'}}/> Last Push: {new Date(data.updated_at).toLocaleDateString()}</span>}
            </div>
          </div>
        </div>
          
          {data.repo_insight && (
            <div className="repo-insight" style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0', fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
              <h3 style={{ marginBottom: '0.8rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Code size={20} /> Insight & Usage Guide
              </h3>
              {data.repo_insight}
            </div>
          )}
        </div>

        <div className="content-area mt-5">
          {Object.entries(groupedByLang).sort((a,b) => b[1].length - a[1].length).map(([lang, files]) => (
            <Collapsible 
              key={lang} 
              level={1} 
              title={lang} 
              defaultOpen={true}
              subtitle={`${files.length} files, ${files.reduce((a,c) => a + c.functions.length, 0)} functions`}
            >
              {files.map(({ filepath, fileData, functions }) => {
                const cleanFilepath = filepath.replace(/\\/g, '/');
                const meta = fileMetadata[filepath] || {};
                const summary = fileData.summary || meta.summary || '';
                const updatedAt = meta.updated_at || fileData.updated_at || '';
                
                const displayFilepath = cleanFilepath.split('/').pop().replace(/\.[^/.]+$/, "");
                const isGpu = fileData.is_gpu || meta.is_gpu || false;
                
                const fileSubtitle = (
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {updatedAt && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12}/> {new Date(updatedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                );

                return (
                  <Collapsible 
                    key={filepath} 
                    level={2} 
                    title={
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {displayFilepath}
                        {isGpu && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#ecc94b', backgroundColor: 'rgba(236,201,75,0.1)', padding: '2px 6px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                            ⚡ GPU
                          </span>
                        )}
                      </span>
                    }
                    icon={<FileCode size={20} color="var(--primary)" />}
                    subtitle={fileSubtitle}
                  >
                    {summary && (
                      <div style={{ marginBottom: '1rem', padding: '0.6rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                        {summary}
                      </div>
                    )}
                    
                    <div className="mt-2 mb-2">
                       <a 
                          href={`${data.url}/blob/master/${cleanFilepath}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-github"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.1)', color: 'white', textDecoration: 'none', borderRadius: '4px', fontSize: '0.85rem' }}
                        >
                          <FaGithub size={14} /> View File on GitHub
                        </a>
                    </div>
                  </Collapsible>
                );
              })}
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoFunctions;
