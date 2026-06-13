import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileCode, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './RepoFunctions.css';

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
  Object.entries(data.functions_extracted || {}).forEach(([filepath, functions]) => {
    if (!functions || functions.length === 0) return;
    const lang = getLanguageFromPath(filepath);
    if (!groupedByLang[lang]) groupedByLang[lang] = [];
    groupedByLang[lang].push({ filepath, functions });
  });

  return (
    <div className="repo-functions-page section">
      <div className="container">
        <Link to="/github" className="back-link"><ArrowLeft size={20} /> Back to Repositories</Link>

        <div className="repo-header glass">
          <h1 className="repo-title">{data.name} API Reference</h1>
          {data.description && <p className="repo-desc mt-2 mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>{data.description}</p>}
          <div className="repo-meta">
            {data.updated_at && <span>Last Updated: {new Date(data.updated_at).toLocaleDateString()}</span>}
            <span>Extracted Functions: {Object.values(data.functions_extracted || {}).reduce((acc, curr) => acc + curr.length, 0)}</span>
          </div>
        </div>

        {Object.entries(groupedByLang).sort((a,b) => b[1].length - a[1].length).map(([lang, files]) => (
          <div key={lang} className="language-group mb-5">
            <h2 className="language-header" style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              {lang} <span style={{fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal'}}>({files.reduce((a,c) => a + c.functions.length, 0)} functions)</span>
            </h2>
            
            {files.map(({ filepath, functions }) => {
              const cleanFilepath = filepath.replace(/\\/g, '/');

              return (
                <div key={filepath} className="file-group">
                  <h3 className="file-header"><FileCode size={20} /> {cleanFilepath}</h3>
                  <div className="functions-grid">
                    {functions.map((fn, idx) => (
                      <div key={idx} className="function-card glass">
                        <div className="function-header">
                          <h4 className="function-name"><Code size={18} style={{marginRight: '8px'}} />{fn.name}</h4>
                          <span className="function-type">{fn.type || 'function'}</span>
                        </div>
                        
                        {fn.docstring && (
                          <div className="function-docstring">
                            {fn.docstring}
                          </div>
                        )}

                        {fn.args && fn.args.length > 0 && (
                          <div className="function-params">
                            <div className="function-section-title">Parameters</div>
                            <ul className="param-list">
                              {fn.args.map((arg, i) => (
                                <li key={i} className="param-item">{arg}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {fn.returns && fn.returns.length > 0 && (
                          <div className="function-params">
                            <div className="function-section-title">Returns</div>
                            <ul className="param-list">
                              {fn.returns.map((ret, i) => (
                                <li key={i} className="param-item">{ret}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="function-actions mt-3">
                          <a 
                            href={`${data.url}/blob/master/${cleanFilepath}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-github"
                          >
                            <FaGithub size={16} /> View Source Code
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoFunctions;
