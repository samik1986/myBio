import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { experiences } from '../../data/experienceData';
import './Experience.css';

const Experience = ({ limit }) => {
  const displayExp = limit ? experiences.slice(0, limit) : experiences;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          {limit && (
            <Link to="/experience" className="view-all-link">
              View All <ArrowRight size={16} />
            </Link>
          )}
        </div>
        <div className="timeline">
          {displayExp.map((exp, index) => (
            <Link to={`/experience/${exp.id}`} key={exp.id} className="timeline-item" style={{ textDecoration: 'none' }}>
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              <div className={`timeline-content glass ${index % 2 === 0 ? 'left' : 'right'}`}>
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                <div className="exp-meta">
                  <span className="exp-period">
                    <Calendar size={16} /> {exp.period}
                  </span>
                  <span className="exp-location">
                    <MapPin size={16} /> {exp.location}
                  </span>
                </div>
                <p className="exp-description">{exp.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
