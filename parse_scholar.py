from bs4 import BeautifulSoup

html_file = r"C:\Users\banerjee\.gemini\antigravity-ide\brain\a045dea0-4991-4202-9457-4df94b1bc54b\.system_generated\steps\1114\content.md"
with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, 'html.parser')
rows = soup.find_all("tr", class_="gsc_a_tr")

print(f"Found {len(rows)} publication rows.")
for row in rows:
    title_tag = row.find("a", class_="gsc_a_at")
    title = title_tag.text if title_tag else "Unknown"
    
    cite_tag = row.find("a", class_="gsc_a_ac")
    cites = cite_tag.text if cite_tag and cite_tag.text else "0"
    
    print(f"Citations: {cites.strip():<5} | {title}")
