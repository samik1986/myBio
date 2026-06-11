from bs4 import BeautifulSoup
import json

file_path = r"C:\Users\banerjee\.gemini\antigravity-ide\brain\a045dea0-4991-4202-9457-4df94b1bc54b\.system_generated\steps\1239\content.md"

with open(file_path, 'r', encoding='utf-8') as f:
    html = f.read()

# The html is in the file after "---" marker or so, let's just parse the whole string
soup = BeautifulSoup(html, 'html.parser')
papers = []
for tr in soup.find_all('tr', class_='gsc_a_tr'):
    title_a = tr.find('a', class_='gsc_a_at')
    if not title_a: continue
    title = title_a.text.strip()
    link = "https://scholar.google.com" + title_a['href']
    
    year_span = tr.find('span', class_='gsc_a_h gsc_a_hc gs_ibl')
    year = year_span.text.strip() if year_span else ""
    
    divs = tr.find_all('div', class_='gs_gray')
    authors = divs[0].text.strip() if len(divs) > 0 else ""
    journal = divs[1].text.strip() if len(divs) > 1 else ""
    
    papers.append({'title': title, 'year': year, 'link': link, 'journal': journal, 'authors': authors})
    
with open('scholar_papers.json', 'w', encoding='utf-8') as f:
    json.dump(papers, f, indent=2)

print("Parsed", len(papers), "papers.")
