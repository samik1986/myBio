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
        <div className="exp-row">
          {displayExp.map((exp) => (
            <Link to={`/experience/${exp.id}`} key={exp.id} className="exp-card glass">
              <div className="exp-card-header">
                <div className="exp-card-icon">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                </div>
              </div>
              <div className="exp-meta">
                <span><Calendar size={13} /> {exp.period}</span>
                <span><MapPin size={13} /> {exp.location}</span>
              </div>
              <p className="exp-description">{exp.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
