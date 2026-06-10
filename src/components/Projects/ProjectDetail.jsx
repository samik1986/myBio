import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code } from 'lucide-react';
import { featuredProjects, githubProjects } from '../../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Look in both arrays
  let project = featuredProjects.find(p => p.id === id);
  let isFeatured = true;
  if (!project) {
    project = githubProjects.find(p => p.id === parseInt(id));
    isFeatured = false;
  }

  if (!project) {
    return (
      <div className="proj-detail-container section">
        <h2>Project not found</h2>
        <Link to="/" className="back-link"><ArrowLeft /> Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="proj-detail-container section">
      <div className="container">
        <Link to="/projects" className="back-link"><ArrowLeft size={20} /> Back to Projects</Link>
        
        <div className="proj-detail-header glass">
          <h1 className="proj-detail-title">{project.name}</h1>
          <p className="proj-detail-lang"><Code size={18} /> {project.language}</p>
          
          {(project.link || project.githubUrl) && (
            <a href={project.link || project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary detail-btn mt-3">
              View Project <ExternalLink size={18} />
            </a>
          )}
        </div>

        {isFeatured && project.image && (
          <div className="proj-detail-image-container glass">
            <img src={project.image} alt={project.name} className="proj-detail-img" />
          </div>
        )}

        <div className="proj-detail-content glass">
          <h2>Overview</h2>
          <p className="proj-detail-text">{project.description}</p>
          
          {project.details && (
            <>
              <h2>Technical Details</h2>
              <p className="proj-detail-text">{project.details}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
