import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, Quote, ArrowRight, Search, X } from 'lucide-react';
import { publications } from '../../data/publicationsData';
import MultiSelectDropdown from './MultiSelectDropdown';
import './Publications.css';

const Publications = ({ limit }) => {
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [selectedJournals, setSelectedJournals] = useState([]);

  // Extract unique options for dropdowns dynamically
  const filterOptions = useMemo(() => {
    const years = new Set();
    const categories = new Set();
    const subCategories = new Set();
    const journals = new Set();

    publications.forEach(pub => {
      if (pub.year) years.add(pub.year.toString());
      if (pub.journal) journals.add(pub.journal);
      if (pub.categories) pub.categories.forEach(c => categories.add(c));
      if (pub.subCategories) pub.subCategories.forEach(c => subCategories.add(c));
    });

    return {
      years: Array.from(years).sort((a, b) => b - a),
      categories: Array.from(categories).sort(),
      subCategories: Array.from(subCategories).sort(),
      journals: Array.from(journals).sort()
    };
  }, []);

  // Filter the publications based on active states
  const filteredPubs = useMemo(() => {
    return publications.filter(pub => {
      // Free text search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pub.title?.toLowerCase().includes(query);
        const matchesAbstract = pub.abstract?.toLowerCase().includes(query) || pub.overview?.toLowerCase().includes(query);
        const matchesAuthors = pub.authors?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesAbstract && !matchesAuthors) return false;
      }

      // Multi-select filters (OR within category, AND across categories)
      if (selectedYears.length > 0 && !selectedYears.includes(pub.year?.toString())) return false;
      if (selectedJournals.length > 0 && !selectedJournals.includes(pub.journal)) return false;
      
      if (selectedCategories.length > 0) {
        if (!pub.categories || !pub.categories.some(c => selectedCategories.includes(c))) return false;
      }
      
      if (selectedSubCategories.length > 0) {
        if (!pub.subCategories || !pub.subCategories.some(c => selectedSubCategories.includes(c))) return false;
      }

      return true;
    }).sort((a, b) => b.year - a.year);
  }, [searchQuery, selectedYears, selectedCategories, selectedSubCategories, selectedJournals]);

  // Determine if any filters are active
  const hasActiveFilters = searchQuery !== '' || 
                           selectedYears.length > 0 || 
                           selectedCategories.length > 0 || 
                           selectedSubCategories.length > 0 || 
                           selectedJournals.length > 0;

  // Group into Peer-Reviewed and Preprints
  const peerReviewed = filteredPubs.filter(p => !p.isPreprint);
  const preprints = filteredPubs.filter(p => p.isPreprint);

  // If there's a limit AND no active filters, slice the arrays. Otherwise, show all filtered results.
  const displayPeerReviewed = (limit && !hasActiveFilters) ? peerReviewed.slice(0, limit) : peerReviewed;
  const displayPreprints = (limit && !hasActiveFilters) ? preprints.slice(0, limit) : preprints;

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedYears([]);
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setSelectedJournals([]);
  };

  const renderPublication = (pub) => (
    <Link to={`/publication/${pub.id}`} key={pub.id} className="glass publication-item" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="pub-image-container">
        {pub.image ? <img src={pub.image} alt="Publication result" className="pub-image" loading="lazy" /> : <div className="pub-image-placeholder"><BookOpen size={48} opacity={0.2} /></div>}
      </div>
      <div className="pub-content">
        <h3 className="pub-title">{pub.title}</h3>
        <p className="pub-authors">{pub.authors}</p>
        <div className="pub-meta">
          <span className="pub-journal" style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{pub.journal}</span>
          <span className="pub-year">{pub.year}</span>
          {pub.citations !== undefined && pub.citations !== null && (
            <span className="pub-citations">{pub.citations} Citations</span>
          )}
        </div>
        {(pub.categories?.length > 0 || pub.subCategories?.length > 0) && (
          <div className="pub-categories" style={{ marginTop: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {pub.categories && pub.categories.map((cat, idx) => (
              <span key={`cat-${idx}`} className="category-badge">{cat}</span>
            ))}
            {pub.subCategories && pub.subCategories.map((subcat, idx) => (
              <span key={`subcat-${idx}`} className="subcategory-badge">{subcat}</span>
            ))}
          </div>
        )}
        <p className="pub-overview">{pub.abstract || pub.overview}</p>
      </div>
      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link" onClick={(e) => e.stopPropagation()}>
        <ExternalLink size={20} />
      </a>
    </Link>
  );

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Publications</h2>
          {limit && !hasActiveFilters && (
            <Link to="/publications" className="view-all-link">
              View All <ArrowRight size={16} />
            </Link>
          )}
        </div>
        
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

        {/* --- FILTER BAR --- */}
        <div className="glass filter-bar-container">
          <div className="filter-search-row">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search titles, authors, keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                  <X size={16} />
                </button>
              )}
            </div>
            {hasActiveFilters && (
              <button className="clear-all-btn" onClick={clearFilters}>
                Clear All Filters
              </button>
            )}
          </div>
          
          <div className="filter-dropdowns-row">
            <MultiSelectDropdown 
              placeholder="Year" 
              options={filterOptions.years} 
              selectedValues={selectedYears} 
              onChange={setSelectedYears} 
            />
            <MultiSelectDropdown 
              placeholder="Category" 
              options={filterOptions.categories} 
              selectedValues={selectedCategories} 
              onChange={setSelectedCategories} 
            />
            <MultiSelectDropdown 
              placeholder="Sub-Category" 
              options={filterOptions.subCategories} 
              selectedValues={selectedSubCategories} 
              onChange={setSelectedSubCategories} 
            />
            <MultiSelectDropdown 
              placeholder="Journal/Venue" 
              options={filterOptions.journals} 
              selectedValues={selectedJournals} 
              onChange={setSelectedJournals} 
            />
          </div>
          
          {hasActiveFilters && (
            <div className="filter-results-count">
              Showing {filteredPubs.length} result{filteredPubs.length !== 1 && 's'}
            </div>
          )}
        </div>
        {/* --- END FILTER BAR --- */}

        {displayPeerReviewed.length > 0 && (
          <div className="publications-group">
            <h3 className="group-title" style={{ marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--text-color)', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>Peer-Reviewed Publications</h3>
            <div className="publications-list">
              {displayPeerReviewed.map(renderPublication)}
            </div>
          </div>
        )}

        {displayPreprints.length > 0 && (
          <div className="publications-group" style={{ marginTop: '3rem' }}>
            <h3 className="group-title" style={{ marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--text-color)', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>Preprints</h3>
            <div className="publications-list">
              {displayPreprints.map(renderPublication)}
            </div>
          </div>
        )}

        {filteredPubs.length === 0 && (
          <div className="no-results-message">
            <p>No publications match your selected filters.</p>
            <button className="btn btn-primary" onClick={clearFilters} style={{ marginTop: '1rem' }}>Clear Filters</button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Publications;
