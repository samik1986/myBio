import React from 'react';
import { Github, Star, GitFork, BookOpen } from 'lucide-react';
import './GitHubStats.css';

const GitHubStats = () => {
  return (
    <div className="section github-stats-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Open Source & GitHub</h2>
        </div>
        
        <p className="github-subtitle text-secondary mb-4 text-center">
          My continuous contributions to open-source neuroanatomy tools and computer vision architectures.
        </p>

        <div className="github-grid">
          {/* GitHub Overview Card */}
          <div className="github-overview glass">
            <div className="github-overview-header">
              <Github size={32} color="var(--accent-color)" />
              <div>
                <h3>@samik1986</h3>
                <a href="https://github.com/samik1986" target="_blank" rel="noopener noreferrer" className="github-link">View Profile</a>
              </div>
            </div>
            
            <div className="github-metrics">
              <div className="metric">
                <span className="metric-value">20+</span>
                <span className="metric-label">Repositories</span>
              </div>
              <div className="metric">
                <span className="metric-value">8+</span>
                <span className="metric-label">Years Active</span>
              </div>
              <div className="metric">
                <span className="metric-value">C++, Python</span>
                <span className="metric-label">Top Languages</span>
              </div>
            </div>

            <div className="github-stats-image">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=samik1986&show_icons=true&theme=radical&hide_border=true&bg_color=00000000" 
                alt="GitHub Stats" 
                className="stats-card"
              />
            </div>
          </div>

          {/* Top Repositories */}
          <div className="github-repos">
            <h3>Featured Repositories</h3>
            <div className="repo-list">
              <a href="https://github.com/samik1986/ML_Semantic_Segmenation_NMI" target="_blank" rel="noopener noreferrer" className="repo-card glass">
                <div className="repo-header">
                  <BookOpen size={20} color="var(--accent-color)" />
                  <h4>ML_Semantic_Segmenation_NMI</h4>
                </div>
                <p>Semantic segmentation implementation for NMI images. Features deep learning architectures and metrics evaluation.</p>
                <div className="repo-footer">
                  <span className="repo-lang"><span className="lang-dot jupyter"></span> Jupyter Notebook</span>
                  <div className="repo-stats">
                    <span><Star size={14} /> 20</span>
                    <span><GitFork size={14} /> 5</span>
                  </div>
                </div>
              </a>

              <a href="https://github.com/MitraLab-Organization/2D-Skeletonization" target="_blank" rel="noopener noreferrer" className="repo-card glass">
                <div className="repo-header">
                  <BookOpen size={20} color="var(--accent-color)" />
                  <h4>2D-Skeletonization</h4>
                </div>
                <p>Skeletonization and Summarization of Tracer Injected Data for Neuroscience applications.</p>
                <div className="repo-footer">
                  <span className="repo-lang"><span className="lang-dot cpp"></span> C++</span>
                  <div className="repo-stats">
                    <span><Star size={14} /> 1</span>
                    <span><GitFork size={14} /> 1</span>
                  </div>
                </div>
              </a>

              <a href="https://github.com/samik1986/3D_Developing_brain" target="_blank" rel="noopener noreferrer" className="repo-card glass">
                <div className="repo-header">
                  <BookOpen size={20} color="var(--accent-color)" />
                  <h4>3D_Developing_brain</h4>
                </div>
                <p>Code for Comparison of Cell Detection in 3D Histological Developing Brain using standard baselines.</p>
                <div className="repo-footer">
                  <span className="repo-lang"><span className="lang-dot python"></span> Python</span>
                  <div className="repo-stats">
                    <span><Star size={14} /> 1</span>
                    <span><GitFork size={14} /> 0</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
