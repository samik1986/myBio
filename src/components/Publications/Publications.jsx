import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, Quote, ArrowRight } from 'lucide-react';
import { publications } from '../../data/publicationsData';
import './Publications.css';

const Publications = ({ limit }) => {
  const displayPubs = limit ? publications.slice(0, limit) : publications;

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected Publications</h2>
          {limit && (
            <Link to="/publications" className="view-all-link">
              View All <ArrowRight size={16} />
            </Link>
          )}
        </div>
        <div className="publications-summary">
          <div className="glass summary-card">
            <Quote size={32} className="summary-icon" />
            <div className="summary-stats">
              <span className="stat-number">1,091+</span>
              <span className="stat-label">Total Citations</span>
            </div>
            <a href="https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Google Scholar
            </a>
          </div>
        </div>

        <div className="publications-list">
          {displayPubs.map(pub => (
            <Link to={`/publication/${pub.id}`} key={pub.id} className="glass publication-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="pub-image-container">
                <img src={pub.image} alt="Publication result" className="pub-image" />
              </div>
              <div className="pub-content">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <div className="pub-meta">
                  <span className="pub-journal">{pub.journal}</span>
                  <span className="pub-year">{pub.year}</span>
                  <span className="pub-citations">{pub.citations} Citations</span>
                </div>
                <p className="pub-overview">{pub.overview}</p>
              </div>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link" onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={20} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
