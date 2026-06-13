import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero animate-fade-in">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="greeting">Hello, I'm</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
            <img src="https://github.com/samik1986.png" alt="Samik Banerjee" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid var(--accent-color)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} loading="lazy" />
            <h1 className="name" style={{ margin: 0 }}>Samik Banerjee</h1>
          </div>
          <h3 className="title">Computational Science Analyst · AI Researcher · Computer Vision & Computational Neuroscience Specialist</h3>
          <p className="description">
            Bridging AI, Computer Vision, and Computational Neuroscience to map the brain at cellular scale.
            Building scalable deep learning pipelines for 3D multimodal neuroimaging, cellular segmentation, and biological data fusion.
          </p>
          <div className="hero-actions">
            <a href="mailto:samik.banerjee.howrah@gmail.com" className="btn btn-primary">
              Contact Me <ChevronRight size={18} />
            </a>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-orb"></div>
          <div className="glass card-mockup">
             <div className="code-snippet">
               <code>
                 <span className="keyword">const</span> <span className="variable">researcher</span> = {'{'} <br/>
                 &nbsp;&nbsp;name: <span className="string">"Samik"</span>,<br/>
                 &nbsp;&nbsp;skills: [<span className="string">"ML"</span>, <span className="string">"CV"</span>, <span className="string">"Bioinformatics"</span>],<br/>
                 &nbsp;&nbsp;passion: <span className="string">"Deep Learning"</span><br/>
                 {'}'};
               </code>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
