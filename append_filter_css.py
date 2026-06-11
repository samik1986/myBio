import os

css_code = """
/* --- Filter Bar Styles --- */
.filter-bar-container {
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-left: 4px solid var(--accent-color);
}

.filter-search-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.search-input-wrapper {
  position: relative;
  flex-grow: 1;
  max-width: 600px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
}

.search-input {
  width: 100%;
  padding: 0.8rem 2.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-color);
  background: rgba(0, 0, 0, 0.3);
}

.clear-search-btn {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-search-btn:hover {
  color: var(--text-primary);
}

.clear-all-btn {
  background: none;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.clear-all-btn:hover {
  background: rgba(var(--accent-color-rgb, 100, 150, 255), 0.1);
}

.filter-dropdowns-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.filter-results-count {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-style: italic;
  text-align: right;
}

.no-results-message {
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  background: rgba(0,0,0,0.2);
  border-radius: 1rem;
  margin-top: 2rem;
}
"""

with open(r"c:\Users\banerjee\Desktop\myBio\src\components\Publications\Publications.css", "a", encoding="utf-8") as f:
    f.write(css_code)
print("Appended filter styles!")
