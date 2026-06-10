import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGoogle, FaResearchgate } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="nav-container container">
        <Link to="/" className="nav-logo">
          Samik<span>Banerjee</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/timeline" className="nav-link">Timeline</Link>
          <Link to="/experience" className="nav-link">Experience</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/publications" className="nav-link">Publications</Link>
          <Link to="/education" className="nav-link">Education</Link>
        </div>

        <div className="nav-socials">
          <a href="https://github.com/samik1986" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/samik-banerjee-08361622" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
          <a href="https://www.researchgate.net/profile/Samik-Banerjee" target="_blank" rel="noopener noreferrer"><FaResearchgate /></a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-mobile-menu glass">
          <Link to="/" className="nav-mobile-link">Home</Link>
          <Link to="/timeline" className="nav-mobile-link">Timeline</Link>
          <Link to="/experience" className="nav-mobile-link">Experience</Link>
          <Link to="/projects" className="nav-mobile-link">Projects</Link>
          <Link to="/publications" className="nav-mobile-link">Publications</Link>
          <Link to="/education" className="nav-mobile-link">Education</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
