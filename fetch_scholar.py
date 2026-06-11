import urllib.request
from bs4 import BeautifulSoup
import json

url = "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en&cstart=0&pagesize=100"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read()
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
        
    print(json.dumps(papers, indent=2))
except Exception as e:
    print("Error:", e)
