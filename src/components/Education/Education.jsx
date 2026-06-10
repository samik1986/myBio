import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { education } from '../../data/educationData';
import './Education.css';

const Education = ({ limit }) => {
  const displayEdu = limit ? education.slice(0, limit) : education;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education Qualifications</h2>
          {limit && (
            <Link to="/education" className="view-all-link">
              View All <ArrowRight size={16} />
            </Link>
          )}
        </div>
        
        <div className="education-grid">
          {displayEdu.map(edu => (
            <Link to={`/education/${edu.id}`} key={edu.id} className="glass edu-card" style={{ textDecoration: 'none' }}>
              <div className="edu-icon">
                <GraduationCap size={32} />
              </div>
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-inst">{edu.institution}</h4>
                <div className="edu-meta">
                  <span><MapPin size={14} /> {edu.location}</span>
                  <span><Calendar size={14} /> {edu.period}</span>
                </div>
                <p className="edu-grade">Grade: {edu.grade}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
