import React from 'react';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';
import pub1Img from '../../assets/pub_skeletonization.png';
import pub2Img from '../../assets/pub_segmentation.png';
import pub3Img from '../../assets/pub_diffeomorphic.png';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Skeletonization of neuronal processes using Discrete Morse techniques from computational topology",
      authors: "Samik Banerjee, et al.",
      journal: "Preprint",
      year: "2025",
      link: "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en",
      citations: "New",
      image: pub1Img,
      overview: "A computational topology approach utilizing Discrete Morse theory to extract and analyze single-axon skeletons from neuronal imaging, bridging anatomical structure with tracer injection data."
    },
    {
      id: 2,
      title: "Semantic segmentation of microscopic neuroanatomical data by combining topological priors with encoder-decoder deep networks",
      authors: "Samik Banerjee, et al.",
      journal: "Nature Machine Intelligence",
      year: "2020",
      link: "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en",
      citations: "High",
      image: pub2Img,
      overview: "Introduced a deep learning framework integrating topological priors to significantly improve the semantic segmentation of complex microscopic neuroanatomical images."
    },
    {
      id: 3,
      title: "Solving the where problem and quantifying geometric variation in neuroanatomy using generative diffeomorphic mapping",
      authors: "Samik Banerjee, et al.",
      journal: "Preprint",
      year: "2024",
      link: "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en",
      citations: "New",
      image: pub3Img,
      overview: "Developed a generative statistical model for spatial mapping of molecular and anatomical brain datasets into a common 3D reference atlas."
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
              <div className="pub-image-container">
                <img src={pub.image} alt="Publication result" className="pub-image" />
              </div>
              <div className="pub-content">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <div className="pub-meta">
                  <span className="pub-journal">{pub.journal}</span>
                  <span className="pub-year">{pub.year}</span>
                  <span className="pub-citations">{pub.citations} Citations</span>
                </div>
                <p className="pub-overview">{pub.overview}</p>
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
