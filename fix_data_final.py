import re
import urllib.parse

pubs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js"

with open(pubs_file, 'r', encoding='utf-8') as f:
    pub_data = f.read()

pubs_list = re.findall(r'(\{\s*id:.*?abstract:.*?\}\n?\s*\}?)', pub_data, re.DOTALL)
imports_text = re.search(r'^(import .*?;[\n\s]*)+', pub_data, re.MULTILINE).group(0)

new_pubs_list = []
for pub in pubs_list:
    title_match = re.search(r'title: "(.*?)",', pub)
    if not title_match: 
        new_pubs_list.append(pub)
        continue
    title = title_match.group(1)
    
    if "- Supplementary" in title:
        continue # Remove this paper
        
    # Fix dates
    if "Survey of loss functions" in title:
        pub = re.sub(r'year: \d+,', 'year: 2025,', pub)
    if "Detection and skeletonization" in title:
        pub = re.sub(r'year: \d+,', 'year: 2020,', pub)
        
    # Set preprint status
    journal_match = re.search(r'journal: "(.*?)",', pub)
    if journal_match:
        journal = journal_match.group(1).lower()
        if "biorxiv" in journal or "arxiv" in journal or "ssrn" in journal or "preprint" in journal:
            pub = re.sub(r'isPreprint: (true|false),', 'isPreprint: true,', pub)
        else:
            pub = re.sub(r'isPreprint: (true|false),', 'isPreprint: false,', pub)
            
    # Set link to Google Scholar
    scholar_link = "https://scholar.google.com/scholar?q=" + urllib.parse.quote(title)
    pub = re.sub(r'link: ".*?",', f'link: "{scholar_link}",', pub)
    
    new_pubs_list.append(pub)
    
final_pubs = imports_text + "\nexport const publications = [\n" + ",\n".join(new_pubs_list) + "\n];\n"

with open(pubs_file, 'w', encoding='utf-8') as f:
    f.write(final_pubs)

print("Fixed publicationsData.js (dates, preprint flags, links, removed supplementary)")
