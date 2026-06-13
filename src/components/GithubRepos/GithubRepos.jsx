import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, GitFork, ArrowRight, ArrowDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { githubProjects } from '../../data/projectsData';
import './GithubRepos.css';

const GithubRepos = () => {
  const excludedRepos = new Set(['myBio', 'neetcode-gpt', 'DM_Lucas', 'makemore_Samik', 'neetcode-submissions-samik1986']);
  const validProjects = githubProjects.filter(p => !excludedRepos.has(p.name));

  // 1. Group the repos logically WITH overlapping categories
  const bionformatics = validProjects.filter(p => {
    const text = ((p.name || '') + ' ' + (p.description || '')).toLowerCase();
    return text.includes('brain') || text.includes('cell') || text.includes('bio') || text.includes('tissue') || text.includes('muscle');
  });
  
  const imaging3D = validProjects.filter(p => {
    if (p.name === 'myBio') return false;
    const text = ((p.name || '') + ' ' + (p.description || '')).toLowerCase();
    return text.includes('3d') || text.includes('volume') || text.includes('dm_');
  });
  
  const imageProcessing = validProjects.filter(p => {
    if (p.name === 'myBio') return false;
    const text = ((p.name || '') + ' ' + (p.description || '')).toLowerCase();
    return text.includes('seg') || text.includes('crop') || text.includes('detect') || text.includes('image') || text.includes('registration') || text.includes('alignment') || text.includes('skeleton');
  });
  
  const deepLearning = validProjects.filter(p => {
    if (p.name === 'myBio') return false;
    const text = ((p.name || '') + ' ' + (p.description || '')).toLowerCase();
    return text.includes('gan') || text.includes('tcnn') || text.includes('ml_') || text.includes('net') || text.includes('deep learning') || text.includes('yolo') || text.includes('model');
  });
  
  const webPlatforms = validProjects.filter(p => {
    if (p.name === 'myBio') return false;
    const text = ((p.name || '') + ' ' + (p.description || '')).toLowerCase();
    const lang = (p.language || '').toLowerCase();
    return lang.includes('javascript') || lang.includes('typescript') || text.includes('app') || text.includes('browser') || text.includes('editor');
  });
  
  const misc = validProjects.filter(p => 
    p.name === 'myBio' || (
      !bionformatics.includes(p) && 
      !imaging3D.includes(p) && 
      !imageProcessing.includes(p) && 
      !deepLearning.includes(p) && 
      !webPlatforms.includes(p)
    )
  );

  const groups = [
    { title: "Bioinformatics & Neuroscience", repos: bionformatics },
    { title: "3D Imaging", repos: imaging3D },
    { title: "Image Processing", repos: imageProcessing },
    { title: "Deep Learning & Vision", repos: deepLearning },
    { title: "Web Platforms", repos: webPlatforms },
    { title: "Miscellaneous", repos: misc }
  ];

  // Pre-calculate highlights to avoid duplicates
  const highlightedRepoIds = new Set();
  const processedGroups = groups.map(group => {
    // Exclude 'neetcode-submissions-samik1986', 'twardlab', and 'MitraLab' repos from being highlighted
    const availableRepos = group.repos.filter(r => 
      !highlightedRepoIds.has(r.id) && 
      r.name !== 'neetcode-submissions-samik1986' &&
      !(r.githubUrl || '').toLowerCase().includes('twardlab') &&
      !(r.githubUrl || '').toLowerCase().includes('mitralab')
    );
    
    // Sort available by recency and stars
    const recentAvailable = [...availableRepos].sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
    const starredAvailable = [...availableRepos].sort((a, b) => b.stars - a.stars);
    
    const topRepos = [];
    
    // 1. Pick the most recently updated
    if (recentAvailable.length > 0) {
      const mostRecent = recentAvailable[0];
      topRepos.push(mostRecent);
      highlightedRepoIds.add(mostRecent.id);
    }
    
    // 2. Pick the highest starred from the remaining available
    const remainingForStar = starredAvailable.filter(r => !highlightedRepoIds.has(r.id));
    if (remainingForStar.length > 0) {
      const topStarred = remainingForStar[0];
      topRepos.push(topStarred);
      highlightedRepoIds.add(topStarred.id);
    }
    
    // The rest of the repos in the group (excluding the ones highlighted for THIS group)
    const remainingRepos = group.repos.filter(r => !topRepos.some(tr => tr.id === r.id));
    remainingRepos.sort((a, b) => b.stars - a.stars);
    
    return { ...group, topRepos, remainingRepos };
  });

  return (
    <div className="github-repos-page section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Open Source Repositories</h2>
          <p className="section-subtitle">Categorized collection of {validProjects.length} GitHub repositories</p>
        </div>
        
        {processedGroups.map((group, index) => (
          <RepoGroup key={index} title={group.title} repos={group.repos} topRepos={group.topRepos} remainingRepos={group.remainingRepos} />
        ))}
      </div>
    </div>
  );
};

const RepoGroup = ({ title, repos, topRepos, remainingRepos }) => {
  const [expanded, setExpanded] = useState(false);
  
  if (!repos || repos.length === 0) return null;

  return (
    <div className="repo-group-container">
      <h3 className="repo-group-title">{title} <span className="repo-count">({repos.length})</span></h3>
      
      <div className="repo-grid featured">
        {topRepos.map(repo => <RepoCard key={repo.id} repo={repo} featured={true} />)}
      </div>

      {remainingRepos.length > 0 && (
        <div className="expand-section">
          <div className={`repo-grid remaining ${expanded ? 'expanded' : ''}`}>
            {remainingRepos.map(repo => <RepoCard key={repo.id} repo={repo} featured={false} />)}
          </div>
          
          <button className="btn-expand" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <>Hide Projects <ArrowRight size={16} style={{transform: 'rotate(-90deg)', marginLeft: '8px'}}/></>
            ) : (
              <>View All {remainingRepos.length} More <ArrowDown size={16} style={{marginLeft: '8px'}} /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
};


const LanguageBar = ({ languages }) => {
  if (!languages || languages.length === 0) return null;
  
  // Define colors for common languages
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
    <div className="language-bar-container" style={{ width: '100%', marginTop: '0.8rem' }}>
      <div className="language-progress" style={{ display: 'flex', height: '6px', width: '100%', borderRadius: '3px', overflow: 'hidden' }}>
        {languages.map((lang, idx) => (
          <div 
            key={idx} 
            title={`${lang.name} ${lang.percentage}%`}
            style={{ width: `${lang.percentage}%`, backgroundColor: getLangColor(lang.name) }}
          />
        ))}
      </div>
      <div className="language-legend" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.4rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
        {languages.slice(0, 3).map((lang, idx) => (
          <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: getLangColor(lang.name) }}></span>
            {lang.name} {lang.percentage}%
          </span>
        ))}
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  if (!dateString) return 'Unknown';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const RepoCard = ({ repo, featured }) => {
  const [expanded, setExpanded] = useState(false);
  const text = repo.repo_insight || repo.gist || repo.description || 'No description available';
  const isLong = text.length > 180;

  return (
    <div className={`glass project-card repo-card ${featured ? 'repo-featured' : 'repo-standard'}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
      <Link to={repo.hasApiData ? `/repo/${repo.name}/functions` : '#'} style={{textDecoration: 'none', color: 'inherit', flexGrow: 1, cursor: repo.hasApiData ? 'pointer' : 'default', display: 'flex', flexDirection: 'column'}}>
        <div className="project-header">
          <FaGithub size={featured ? 28 : 20} className="project-icon" />
          <div className="project-links">
            {(!repo.githubUrl || repo.githubUrl === '#' || repo.isPrivate) ? (
              <a href={`mailto:samik.banerjee.howrah@gmail.com?subject=Inquiry regarding repository: ${repo.name}`} onClick={(e) => e.stopPropagation()} style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Contact Author
              </a>
            ) : (
              <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ color: 'inherit' }}>
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="project-title">{repo.name}</h3>
        
        <div className="repo-desc-container" style={{ position: 'relative', paddingBottom: isLong ? '1.8rem' : '0.5rem' }}>
          <p className="repo-desc" style={{ 
             display: expanded ? 'block' : '-webkit-box', 
             WebkitLineClamp: expanded ? 'unset' : 4, 
             WebkitBoxOrient: 'vertical', 
             overflow: 'hidden',
             margin: 0,
             lineHeight: '1.5'
          }}>
            {text}
          </p>
          {isLong && (
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(!expanded); }}
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                background: 'transparent',
                border: 'none',
                color: 'var(--primary)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                padding: '0'
              }}
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>
        
        <div style={{ flexGrow: 1 }}></div>
        
        <LanguageBar languages={repo.languages} />
        
        <div className="project-footer mt-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.85rem' }}>
            <span className="project-updated">
              Updated on {formatDate(repo.updatedAt)}
            </span>
            <div className="project-stats">
              <span><Star size={14} /> {repo.stars}</span>
              <span><GitFork size={14} /> {repo.forks}</span>
            </div>
          </div>
          
          {repo.hasApiData && (
            <div className="view-functions-badge" style={{ alignSelf: 'flex-start', fontSize: '0.8rem', background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontWeight: '500', marginTop: 'auto' }}>
              View API / Functions <ArrowRight size={14} style={{verticalAlign: 'middle', marginLeft: '4px'}}/>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default GithubRepos;
