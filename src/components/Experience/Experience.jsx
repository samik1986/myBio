import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Computational Science Analyst",
    company: "Cold Spring Harbor Laboratory",
    location: "New York, USA",
    period: "Sep 2018 - Present",
    description: "Developing algorithms to automatically detect neuronal connectivity in the brains of different mammalian species. Working on NIH-funded projects with the Data Core team."
  },
  {
    id: 2,
    role: "Project Officer",
    company: "Industrial Consultancy & Sponsored Research, IIT Madras",
    location: "Chennai, India",
    period: "Jul 2012 - Jul 2018",
    description: "Led multiple projects including Scene Understanding for Identification of Covert Geo Locations and Localization and Identification of Targets in Satellite Images using Computer Vision techniques."
  },
  {
    id: 3,
    role: "Assistant Professor",
    company: "Heritage Institute of Technology",
    location: "Kolkata, India",
    period: "Sep 2010 - Jul 2012",
    description: "Taught undergraduate courses in Computer Science and Engineering, mentoring students in various technical projects."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
