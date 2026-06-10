import React, { useState } from 'react';
import { ExternalLink, Star, GitFork, ArrowRight, ArrowDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { githubProjects } from '../../data/projectsData';
import './GithubRepos.css';

const GithubRepos = () => {
  // 1. Group the repos logically
  const dlVision = githubProjects.filter(p => ['Python', 'Jupyter Notebook'].includes(p.language) || (p.name && (p.name.includes('GAN') || p.name.includes('Seg') || p.name.includes('ML_'))));
  const coreAlgo = githubProjects.filter(p => ['C++', 'MATLAB'].includes(p.language) && !dlVision.includes(p));
  const webPlatforms = githubProjects.filter(p => (['JavaScript', 'TypeScript'].includes(p.language) || (p.name && (p.name.includes('app') || p.name.includes('Bio')))) && !dlVision.includes(p) && !coreAlgo.includes(p));
  
  const misc = githubProjects.filter(p => !dlVision.includes(p) && !coreAlgo.includes(p) && !webPlatforms.includes(p));

  const groups = [
    { title: "Deep Learning & Computer Vision", repos: dlVision },
    { title: "Core Algorithms & Geometry", repos: coreAlgo },
    { title: "Web Platforms & UI", repos: webPlatforms },
    { title: "Miscellaneous Experiments", repos: misc }
  ];

  return (
    <div className="github-repos-page section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Open Source Repositories</h2>
          <p className="section-subtitle">Categorized collection of {githubProjects.length} GitHub repositories</p>
        </div>
        
        {groups.map((group, index) => (
          <RepoGroup key={index} title={group.title} repos={group.repos} />
        ))}
      </div>
    </div>
  );
};

const RepoGroup = ({ title, repos }) => {
  const [expanded, setExpanded] = useState(false);
  
  if (!repos || repos.length === 0) return null;
  
  // Sort by stars descending
  const sortedRepos = [...repos].sort((a, b) => b.stars - a.stars);
  const topRepos = sortedRepos.slice(0, 2);
  const remainingRepos = sortedRepos.slice(2);

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

const RepoCard = ({ repo, featured }) => (
  <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer" className={`glass project-card repo-card ${featured ? 'repo-featured' : 'repo-standard'}`}>
    <div className="project-header">
      <FaGithub size={featured ? 28 : 20} className="project-icon" />
      <div className="project-links">
        <ExternalLink size={18} />
      </div>
    </div>
    
    <h3 className="project-title">{repo.name}</h3>
    <p className="project-desc">{repo.description || 'No description provided.'}</p>
    
    <div className="project-footer">
      <span className="project-lang">
        <span className={`lang-dot ${repo.language ? repo.language.toLowerCase().replace(' ', '-') : 'unknown'}`}></span>
        {repo.language || 'Unknown'}
      </span>
      <div className="project-stats">
        <span><Star size={14} /> {repo.stars}</span>
        <span><GitFork size={14} /> {repo.forks}</span>
      </div>
    </div>
  </a>
);

export default GithubRepos;
