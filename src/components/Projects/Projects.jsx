import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, GitFork, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const Projects = ({ limit }) => {
  const displayFeatured = limit ? projectsData.slice(0, limit) : projectsData;

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
                <img src={project.image} alt={project.name} className="project-image" loading="lazy" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title || project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-footer">
                  <span className="project-lang">
                    <span className="lang-dot python"></span>
                    {project.language || (project.technologies && project.technologies[0])}
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
      </div>
    </section>
  );
};

export default Projects;
