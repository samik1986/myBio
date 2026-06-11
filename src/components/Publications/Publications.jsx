import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, Quote, ArrowRight } from 'lucide-react';
import { publications } from '../../data/publicationsData';
import './Publications.css';

const Publications = ({ limit }) => {
  // Sort all publications by year descending
  const sortedPubs = [...publications].sort((a, b) => b.year - a.year);
  
  // Group them
  const peerReviewed = sortedPubs.filter(p => !p.isPreprint);
  const preprints = sortedPubs.filter(p => p.isPreprint);

  const displayPeerReviewed = limit ? peerReviewed.slice(0, limit) : peerReviewed;
  const displayPreprints = limit ? preprints.slice(0, limit) : preprints;

  const renderPublication = (pub) => (
    <Link to={`/publication/${pub.id}`} key={pub.id} className="glass publication-item" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="pub-image-container">
        {pub.image ? <img src={pub.image} alt="Publication result" className="pub-image" loading="lazy" /> : <div className="pub-image-placeholder"><BookOpen size={48} opacity={0.2} /></div>}
      </div>
      <div className="pub-content">
        <h3 className="pub-title">{pub.title}</h3>
        <p className="pub-authors">{pub.authors}</p>
        <div className="pub-meta">
          <span className="pub-journal" style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{pub.journal}</span>
          <span className="pub-year">{pub.year}</span>
          {pub.citations !== undefined && pub.citations !== null && (
            <span className="pub-citations">{pub.citations} Citations</span>
          )}
        </div>
        <p className="pub-overview">{pub.abstract || pub.overview}</p>
      </div>
      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link" onClick={(e) => e.stopPropagation()}>
        <ExternalLink size={20} />
      </a>
    </Link>
  );

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Publications</h2>
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

        <div className="publications-group">
          <h3 className="group-title" style={{ marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--text-color)', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>Peer-Reviewed Publications</h3>
          <div className="publications-list">
            {displayPeerReviewed.map(renderPublication)}
          </div>
        </div>

        {displayPreprints.length > 0 && (
          <div className="publications-group" style={{ marginTop: '3rem' }}>
            <h3 className="group-title" style={{ marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--text-color)', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>Preprints</h3>
            <div className="publications-list">
              {displayPreprints.map(renderPublication)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Publications;
