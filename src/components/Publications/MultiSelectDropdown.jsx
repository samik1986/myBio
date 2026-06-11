import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import './MultiSelectDropdown.css';

const MultiSelectDropdown = ({ options, selectedValues, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleOption = (option) => {
    const newSelected = selectedValues.includes(option)
      ? selectedValues.filter(val => val !== option)
      : [...selectedValues, option];
    onChange(newSelected);
  };

  const displayText = selectedValues.length === 0
    ? placeholder
    : selectedValues.length === 1
      ? selectedValues[0]
      : `${selectedValues.length} selected`;

  return (
    <div className="multi-select-container" ref={dropdownRef}>
      <div 
        className={`multi-select-header ${isOpen ? 'open' : ''} ${selectedValues.length > 0 ? 'has-selection' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="multi-select-text">{displayText}</span>
        <ChevronDown size={16} className={`multi-select-icon ${isOpen ? 'rotated' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="multi-select-menu">
          {options.length === 0 ? (
            <div className="multi-select-empty">No options</div>
          ) : (
            options.map((option, idx) => (
              <div 
                key={idx} 
                className={`multi-select-item ${selectedValues.includes(option) ? 'selected' : ''}`}
                onClick={() => toggleOption(option)}
              >
                <div className="multi-select-checkbox">
                  {selectedValues.includes(option) && <Check size={14} />}
                </div>
                <span className="multi-select-item-text">{option}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
