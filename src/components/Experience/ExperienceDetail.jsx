import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../../data/experienceData';
import './ExperienceDetail.css';

const ExperienceDetail = () => {
  const { id } = useParams();
  const exp = experiences.find(e => e.id === parseInt(id));

  if (!exp) {
    return (
      <div className="exp-detail-container section">
        <h2>Experience not found</h2>
        <Link to="/" className="back-link"><ArrowLeft /> Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="exp-detail-container section">
      <div className="container">
        <Link to="/experience" className="back-link"><ArrowLeft size={20} /> Back to Experience</Link>
        
        <div className="exp-detail-header glass">
          <div className="exp-icon-large">
            <Briefcase size={48} />
          </div>
          <div>
            <h1 className="exp-detail-title">{exp.role}</h1>
            <h2 className="exp-detail-company">{exp.company}</h2>
            <div className="exp-meta-large">
              <span><MapPin size={18} /> {exp.location}</span>
              <span><Calendar size={18} /> {exp.period}</span>
            </div>
          </div>
        </div>

        <div className="exp-detail-content glass">
          <h2>Overview</h2>
          <p className="exp-detail-text">{exp.description}</p>
          
          {exp.details && exp.details.length > 0 && (
            <>
              <h2>Key Contributions</h2>
              <ul className="exp-detail-list">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
