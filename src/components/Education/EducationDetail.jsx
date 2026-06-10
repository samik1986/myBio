import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../../data/educationData';
import './EducationDetail.css';

const EducationDetail = () => {
  const { id } = useParams();
  const edu = education.find(e => e.id === parseInt(id));

  if (!edu) {
    return (
      <div className="edu-detail-container section">
        <h2>Education not found</h2>
        <Link to="/" className="back-link"><ArrowLeft /> Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="edu-detail-container section">
      <div className="container">
        <Link to="/education" className="back-link"><ArrowLeft size={20} /> Back to Education</Link>
        
        <div className="edu-detail-header glass">
          <div className="edu-icon-large">
            <GraduationCap size={48} />
          </div>
          <div>
            <h1 className="edu-detail-title">{edu.degree}</h1>
            <h2 className="edu-detail-inst">{edu.institution}</h2>
            <div className="edu-meta-large">
              <span><MapPin size={18} /> {edu.location}</span>
              <span><Calendar size={18} /> {edu.period}</span>
            </div>
          </div>
        </div>

        <div className="edu-detail-content glass">
          <h2>Overview & Thesis</h2>
          <p className="edu-detail-text">{edu.details}</p>
          <div className="grade-badge">
            Grade: {edu.grade}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;
