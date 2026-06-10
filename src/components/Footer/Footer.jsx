import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Samik Banerjee. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/samik1986/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/samik-banerjee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.researchgate.net/profile/Samik-Banerjee" target="_blank" rel="noopener noreferrer">ResearchGate</a>
            <a href="https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          </div>
          <div className="footer-visitor-count" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <img src="https://visitor-badge.laobi.icu/badge?page_id=samik1986.mybio" alt="Visitor Count" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
