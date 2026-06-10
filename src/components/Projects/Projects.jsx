import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "ML_Semantic_Segmenation_NMI",
      description: "Semantic segmentation implementation for NMI images. Features deep learning architectures and metrics evaluation.",
      language: "Jupyter Notebook",
      stars: 20,
      forks: 5,
      githubUrl: "https://github.com/samik1986/ML_Semantic_Segmenation_NMI"
    },
    {
      id: 2,
      name: "2D-Skeletonization",
      description: "Skeletonization and Summarization of Tracer Injected Data.",
      language: "C++",
      stars: 1,
      forks: 1,
      githubUrl: "https://github.com/MitraLab-Organization/2D-Skeletonization"
    },
    {
      id: 3,
      name: "Sensitivity-and-Specificity-Calculation",
      description: "Calculation of Sensitivity and Specificity Calculation for Enhancer based images.",
      language: "MATLAB",
      stars: 1,
      forks: 0,
      githubUrl: "https://github.com/MitraLab-Organization/Sensitivity-and-Specificity-Calculation"
    },
    {
      id: 4,
      name: "3D_Developing_brain",
      description: "Code for Comparison of Cell Detection in 3D Histological Developing Brain.",
      language: "Jupyter Notebook",
      stars: 1,
      forks: 0,
      githubUrl: "https://github.com/samik1986/3D_Developing_brain"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="glass project-card">
              <div className="project-header">
                <Github size={28} className="project-icon" />
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
