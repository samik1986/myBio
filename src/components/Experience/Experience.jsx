import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Computational Science Analyst",
      company: "Cold Spring Harbor Laboratory, NY",
      date: "Present",
      description: "Working on cutting-edge research involving Machine Learning, Computer Vision, and Bioinformatics. Developing robust algorithms and pipelines for complex biological data.",
      skills: ["Machine Learning", "Computer Vision", "Python", "Bioinformatics"]
    },
    {
      id: 2,
      title: "Researcher",
      company: "MitraLab Organization",
      date: "Previous",
      description: "Contributed to 2D Skeletonization, cell detection algorithms, and calculation of Sensitivity/Specificity for enhancer-based images.",
      skills: ["C++", "MATLAB", "Image Processing", "Algorithms"]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-date">
                    <Calendar size={16} />
                    <span>{exp.date}</span>
                  </div>
                </div>
                
                <div className="timeline-company">
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>
                
                <p className="timeline-desc">{exp.description}</p>
                
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
