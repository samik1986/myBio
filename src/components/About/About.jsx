import React from 'react';
import { User, Mail, MapPin, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGoogle, FaResearchgate } from 'react-icons/fa';
import './About.css';
import profileImage from '../../assets/Neuro_page16_1.jpeg';

const About = () => {
  return (
    <div id="about" className="section about-page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-content glass">
          <div className="about-header">
            <div className="about-avatar-placeholder" style={{ overflow: 'hidden', padding: 0, background: 'transparent' }}>
              <img src={profileImage} alt="Samik Banerjee" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
            <div className="about-header-text">
              <h1>Samik Banerjee</h1>
              <p className="about-role">Computational Science Analyst · AI Researcher · Computer Vision & Computational Neuroscience Specialist</p>
              
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
              Ph.D. and Computational Science Analyst with 12+ years of expertise at the intersection of Artificial Intelligence, Computer Vision, and Computational Neuroscience. Proven track record of building state-of-the-art deep learning pipelines for 3D multimodal brain mapping, cellular segmentation, and neuronal connectivity analysis across mammalian species. Expert in processing terabyte-scale histological and neuroimaging datasets, bridging single-cell genomics with neuro-radiology, and deploying scalable AI systems for biomedical discovery.
            </p>

            <h3>Research Focus</h3>
            <p>
              My research lies at the intersection of deep learning, computer vision, and neuroscience. I specialize in designing scalable pipelines to detect neuronal connectivity across multiple species, aligning single-cell data with neuropathology. By employing modern Deep Learning frameworks (PyTorch, TensorFlow) alongside traditional image processing algorithms, I unravel the complex connectivity mapping within the brain.
            </p>

            <h3>Awards & Achievements</h3>
            <ul className="about-awards" style={{ listStyle: 'none', padding: 0, margin: '1rem 0 2rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                <span style={{ color: 'var(--accent-color)', marginRight: '10px', marginTop: '2px' }}>★</span>
                <div>
                  <strong>FlyTxt Fellowship Award</strong> - <span style={{ opacity: 0.8 }}>PReMI Conference (2017)</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                <span style={{ color: 'var(--accent-color)', marginRight: '10px', marginTop: '2px' }}>★</span>
                <div>
                  <strong>Pan-India Winner</strong> - <span style={{ opacity: 0.8 }}>Samsung Challenge on SMS Classification (2017)</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                <span style={{ color: 'var(--accent-color)', marginRight: '10px', marginTop: '2px' }}>★</span>
                <div>
                  <strong>Regional Winner</strong> - <span style={{ opacity: 0.8 }}>Microsoft Code.Fun.Do Hackathon (2014 & 2016)</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                <span style={{ color: 'var(--accent-color)', marginRight: '10px', marginTop: '2px' }}>★</span>
                <div>
                  <strong>Star-TA Award</strong> - <span style={{ opacity: 0.8 }}>IIT Madras (2017)</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                <span style={{ color: 'var(--accent-color)', marginRight: '10px', marginTop: '2px' }}>★</span>
                <div>
                  <strong>Top 10% Oral Presentation</strong> - <span style={{ opacity: 0.8 }}>ICVGIP (2014)</span>
                </div>
              </li>
            </ul>

            <div className="about-socials">
              <a href="https://github.com/samik1986" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/samik-banerjee" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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
