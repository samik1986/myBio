import React from 'react';
import { User, Mail, MapPin, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGoogle, FaResearchgate } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="section about-page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-content glass">
          <div className="about-header">
            <div className="about-avatar-placeholder">
              <User size={80} color="var(--accent-color)" />
            </div>
            <div className="about-header-text">
              <h1>Samik Banerjee</h1>
              <p className="about-role">Computational Science Analyst & Post-Doctoral Researcher</p>
              
              <div className="about-contact">
                <span><Mail size={16} /> sbanerje@cshl.edu</span>
                <span><MapPin size={16} /> New York, USA</span>
                <span><Briefcase size={16} /> Cold Spring Harbor Laboratory</span>
              </div>
            </div>
          </div>

          <div className="about-body">
            <h3>Professional Summary</h3>
            <p>
              Post-Doctoral Researcher with 6+ years of experience in computational neuroscience, machine learning, and computer vision. Proven track record of developing state-of-the-art algorithms for 3D multimodal brain mapping and cellular segmentation. Adept at processing terabyte-scale histological datasets and bridging single-cell data with neuro-radiology. Seeking to leverage expertise in deep learning and large-scale data analysis to drive innovations in AI/ML applications.
            </p>

            <h3>Research Focus</h3>
            <p>
              My research lies at the intersection of computer vision and neuroscience. I specialize in designing scalable pipelines to detect neuronal connectivity across multiple species, aligning single-cell data with neuropathology. By employing modern Deep Learning frameworks (PyTorch, TensorFlow) alongside traditional image processing algorithms, I aim to unravel the complex connectivity mapping within the brain.
            </p>

            <div className="about-socials">
              <a href="https://github.com/samik1986" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/samik-banerjee-08361622" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaGoogle /> Google Scholar
              </a>
              <a href="https://www.researchgate.net/profile/Samik-Banerjee" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaResearchgate /> ResearchGate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
