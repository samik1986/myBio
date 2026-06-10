import React from 'react';
import { ExternalLink, Star, GitFork, Link as LinkIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import imgBrainConnects from '../../assets/project_brain.png';
import imgAtlas from '../../assets/project_atlas.png';
import imgMarmoset from '../../assets/project_marmoset.png';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      id: "p1",
      name: "BRAIN CONNECTS (BICAN)",
      description: "Development of a pipeline to detect neuronal connectivity in human and non-human primates across different scales.",
      language: "Python / C++",
      image: imgBrainConnects,
      link: "https://brainseer.org/"
    },
    {
      id: "p2",
      name: "3D Multimodal Micron-Scale Human Brain",
      description: "A 3D multimodal histological cell atlas bridging single cell data, neuropathology and neuroradiology.",
      language: "MATLAB / Python",
      image: imgAtlas,
      link: "#"
    },
    {
      id: "p3",
      name: "Marmoset Enhancers Mapping",
      description: "Developing cell type-specific enhancers and connectivity mapping pipelines for marmoset brains.",
      language: "Python / TS",
      image: imgMarmoset,
      link: "https://marmosetconnects.org/"
    }
  ];

  const githubProjects = [
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
        <h2 className="section-title">Major Research Projects</h2>
        <div className="featured-grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="glass project-card featured-card">
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
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <LinkIcon size={18} /> Portal
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '4rem' }}>GitHub Repositories</h2>
        <div className="projects-grid">
          {githubProjects.map(project => (
            <div key={project.id} className="glass project-card">
              <div className="project-header">
                <FaGithub size={28} className="project-icon" />
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
