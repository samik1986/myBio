import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { publications } from '../../data/publicationsData';
import './PublicationDetail.css';

const PublicationDetail = () => {
  const { id } = useParams();
  const publication = publications.find(p => p.id === id);

  if (!publication) {
    return (
      <div className="pub-detail-container">
        <h2>Publication not found</h2>
        <Link to="/" className="back-link"><ArrowLeft /> Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="pub-detail-container section">
      <div className="container">
        <Link to="/publications" className="back-link"><ArrowLeft size={20} /> Back to Publications</Link>
        
        <div className="pub-detail-header glass">
          <h1 className="pub-detail-title">{publication.title}</h1>
          <p className="pub-detail-authors">{publication.authors}</p>
          
          <div className="pub-detail-meta">
            <span className="meta-item"><BookOpen size={16} /> {publication.journal}</span>
            <span className="meta-item"><Calendar size={16} /> {publication.year}</span>
          </div>
          
          <a href={publication.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary detail-btn">
            View on Google Scholar <ExternalLink size={18} />
          </a>
        </div>

        {publication.image && (
          <div className="pub-detail-gallery">
            <h2>Result Highlights & Architecture</h2>
            <div className="gallery-grid">
              <div className="gallery-item glass" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                <img src={publication.image} alt="Publication result or architecture" style={{ width: '100%', borderRadius: '8px' }} loading="lazy" />
              </div>
            </div>
          </div>
        )}

        <div className="pub-detail-content glass">
          <h2>Overview</h2>
          <p className="pub-detail-text">{publication.abstract || publication.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetail;
