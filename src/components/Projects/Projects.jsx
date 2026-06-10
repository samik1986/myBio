import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, GitFork, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { featuredProjects, githubProjects } from '../../data/projectsData';
import './Projects.css';

const Projects = ({ limit }) => {
  const displayFeatured = limit ? featuredProjects.slice(0, limit) : featuredProjects;
  const displayGithub = limit ? githubProjects.slice(0, limit) : githubProjects;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Major Research Projects</h2>
          {limit && (
            <Link to="/projects" className="view-all-link">
              View All <ArrowRight size={16} />
            </Link>
          )}
        </div>
        
        <div className="featured-grid">
          {displayFeatured.map(project => (
            <Link to={`/project/${project.id}`} key={project.id} className="glass project-card featured-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-footer">
                  <span className="project-lang">
                    <span className="lang-dot python"></span>
                    {project.language}
                  </span>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                      <LinkIcon size={18} /> Portal
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '4rem' }}>GitHub Repositories</h2>
        <div className="projects-grid">
          {displayGithub.map(project => (
            <Link to={`/project/${project.id}`} key={project.id} className="glass project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="project-header">
                <FaGithub size={28} className="project-icon" />
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-footer">
                <span className="project-lang">
                  <span className={`lang-dot ${project.language.toLowerCase().replace(' ', '-')}`}></span>
                  {project.language}
                </span>
                <div className="project-stats">
                  <span><Star size={14} /> {project.stars}</span>
                  <span><GitFork size={14} /> {project.forks}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
