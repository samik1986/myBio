import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { publications } from '../../data/publicationsData';
import './PublicationDetail.css';

const PublicationDetail = () => {
  const { id } = useParams();
  const publication = publications.find(p => p.id === parseInt(id));

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
        <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Home</Link>
        
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

        <div className="pub-detail-content glass">
          <h2>Overview</h2>
          <p className="pub-detail-text">{publication.overview}</p>
          
          <h2>Details</h2>
          <p className="pub-detail-text">{publication.details}</p>
        </div>

        <div className="pub-detail-gallery">
          <h2>Result Highlights</h2>
          <div className="gallery-grid">
            {publication.images.map((img, index) => (
              <div key={index} className="gallery-item glass">
                <img src={img} alt={`Result highlight ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetail;
