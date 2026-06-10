import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'glass' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">Samik Banerjee</a>
        
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={toggleMenu}>About</a>
          <a href="#experience" onClick={toggleMenu}>Experience</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#publications" onClick={toggleMenu}>Publications</a>
        </div>

        <div className="nav-socials desktop-only">
          <a href="https://github.com/samik1986/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/samik-banerjee" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} /></a>
          <a href="https://www.researchgate.net/profile/Samik-Banerjee" target="_blank" rel="noopener noreferrer">
            <FaResearchgate size={20} /></a>
          <a href="https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><BookOpen size={20} /></a>
        </div>

        <button className="menu-btn mobile-only" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
