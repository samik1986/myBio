import os

css_code = """
.category-badge {
  background-color: rgba(var(--accent-color-rgb, 100, 150, 255), 0.15);
  color: var(--accent-color);
  border: 1px solid rgba(var(--accent-color-rgb, 100, 150, 255), 0.3);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.subcategory-badge {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}
"""

paths = [
    r"c:\Users\banerjee\Desktop\myBio\src\components\Publications\Publications.css",
    r"c:\Users\banerjee\Desktop\myBio\src\components\Publications\PublicationDetail.css"
]

for p in paths:
    with open(p, "a", encoding="utf-8") as f:
        f.write(css_code)
    print("Appended styles to", p)
