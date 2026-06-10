import React from 'react';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Advanced Machine Learning Models for Computational Neuroscience",
      authors: "Samik Banerjee, et al.",
      journal: "Journal of Computational Biology",
      year: "2025",
      link: "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en",
      citations: 120
    },
    {
      id: 2,
      title: "Generative AI in Bioinformatics: A comprehensive review",
      authors: "Samik Banerjee, et al.",
      journal: "Bioinformatics",
      year: "2024",
      link: "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en",
      citations: 345
    },
    {
      id: 3,
      title: "Face Recognition techniques utilizing Transfer Deep Learning",
      authors: "Samik Banerjee",
      journal: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
      year: "2023",
      link: "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en",
      citations: 450
    }
  ];

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <h2 className="section-title">Selected Publications</h2>
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

        <div className="publications-list">
          {publications.map(pub => (
            <div key={pub.id} className="glass publication-item">
              <div className="pub-icon-container">
                <BookOpen size={24} className="pub-icon" />
              </div>
              <div className="pub-content">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <div className="pub-meta">
                  <span className="pub-journal">{pub.journal}</span>
                  <span className="pub-year">{pub.year}</span>
                  <span className="pub-citations">{pub.citations} Citations</span>
                </div>
              </div>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link">
                <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
