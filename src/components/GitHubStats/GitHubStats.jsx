import React from 'react';
import { Star, GitFork, BookOpen } from 'lucide-react';
import './GitHubStats.css';

// SVG fallback for Github icon to avoid lucide export errors
const GithubIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.05 5.05 0 0 0 19 5.32a5.05 5.05 0 0 0-.5-3.32s-1.3-.4-4.2 1.6a11.5 11.5 0 0 0-7.8 0C3.5 1.6 2.2 2 2.2 2a5.05 5.05 0 0 0-.5 3.32 5.05 5.05 0 0 0 1.5 2.48c0 5.76 3.34 6.78 6.49 7.16A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);
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
              <GithubIcon size={32} color="var(--accent-color)" />
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
