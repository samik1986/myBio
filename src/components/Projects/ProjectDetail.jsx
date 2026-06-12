import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Folder, Briefcase, Server } from 'lucide-react';
import { projectsData, githubProjects } from '../../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Look in both arrays
  let project = projectsData.find(p => p.id === id);
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
          <h1 className="proj-detail-title">{project.title || project.name}</h1>
          <div className="project-detail-meta">
            {project.category && <span className="meta-item"><Folder size={16} /> {project.category}</span>}
            {project.field && <span className="meta-item"><Briefcase size={16} /> {project.field}</span>}
            {project.funding && <span className="meta-item"><Server size={16} /> Funding: {project.funding}</span>}
          </div>

          <div className="project-detail-actions">
            {(project.link || project.githubUrl) && (
              <a href={project.link || project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary detail-btn mt-3">
                View Project <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {isFeatured && project.image && (
          <div className="proj-detail-image-container glass">
            <img src={project.image} alt={project.title || project.name} className="proj-detail-img" loading="lazy" />
          </div>
        )}

        <div className="proj-detail-content glass">
          <h2>Overview</h2>
          <p className="proj-detail-text">{project.description}</p>
          
          {(project.tools || project.technologies) && (
            <div className="project-tech-stack">
              <h3>Technologies & Tools Used</h3>
              <div className="tech-tags">
                {(project.tools || project.technologies).map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

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
