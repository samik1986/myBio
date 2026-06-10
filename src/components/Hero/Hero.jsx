import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero animate-fade-in">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Samik Banerjee</h1>
          <h3 className="title">Computational Science Analyst</h3>
          <p className="description">
            Specializing in Machine Learning, Computer Vision, Computational Neuroscience, and Bioinformatics. 
            Passionate about Generative AI, Deep Learning, and building intelligent systems that solve complex problems.
          </p>
          <div className="hero-actions">
            <a href="mailto:samik.banerjee1986@gmail.com" className="btn btn-primary">
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
