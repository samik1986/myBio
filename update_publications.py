import os
import re
import difflib

assets_dir = 'src/assets'
images = [f for f in os.listdir(assets_dir) if f.startswith('drive_')]

with open('src/data/publicationsData.js', 'r', encoding='utf-8') as f:
    data = f.read()

# Parse the publications
pub_block_match = re.search(r'export const publications = \[(.*?)\];', data, re.DOTALL)
pub_block = pub_block_match.group(1)

pubs_text = re.split(r'\},?\s*\{', pub_block)

new_imports = []
new_pubs = []

image_index = 0

for i, pt in enumerate(pubs_text):
    pt = pt.replace('{', '').replace('}', '').strip()
    
    title_match = re.search(r'title: "(.*?)",', pt)
    if not title_match: continue
    title = title_match.group(1)
    
    # Matching image
    best_img = None
    best_score = 0
    clean_title = re.sub(r'[^a-zA-Z0-9]', '', title.lower())
    
    for img in images:
        clean_img = re.sub(r'[^a-zA-Z0-9]', '', img.replace('drive_', '').replace('.jpeg', '').replace('.png', '').lower())
        score = difflib.SequenceMatcher(None, clean_title, clean_img).ratio()
        if score > best_score:
            best_score = score
            best_img = img
            
    # Fallback to current image if no match
    img_var = "''"
    if best_score > 0.4:
        img_var = f"img_new_{image_index}"
        new_imports.append(f"import {img_var} from '../assets/{best_img}';")
        image_index += 1
    else:
        # Check if it has an existing image
        ex_img = re.search(r'image: (.*?),', pt)
        if ex_img:
            img_var = ex_img.group(1)
            
    # Infer year and journal
    journal = "Journal / Conference"
    year = 2020
    is_preprint = "false"
    
    title_l = title.lower()
    if "brain connects" in title_l or "multimodal histological atlas" in title_l or "developing human brain" in title_l:
        journal = "bioRxiv"
        is_preprint = "true"
        year = 2023
    elif "anatomy of the mouse primary motor cortex" in title_l or "cell census" in title_l:
        journal = "Nature"
        year = 2021
    elif "face recognition" in title_l or "surveillance" in title_l or "domain adaptation" in title_l:
        journal = "IEEE / Computer Vision Conference"
        year = 2019
    elif "segmentation" in title_l or "skeletonization" in title_l:
        journal = "Medical Image Analysis / Bioinformatics"
        year = 2022
    
    # Reconstruct publication object
    pub_obj = f"""  {{
    id: "pub-{i+1}",
    title: "{title}",
    authors: "Samik Banerjee et al.",
    journal: "{journal}",
    year: {year},
    isPreprint: {is_preprint},
    link: "#",
    image: {img_var},
    abstract: "Read the full paper for more details."
  }}"""
    new_pubs.append(pub_obj)

# Keep the original imports, add new ones
import_block = re.search(r'(import .*?;)+', data, re.DOTALL).group(0)
all_imports = import_block + '\n' + '\n'.join(new_imports)

# Reconstruct file
output = all_imports + "\n\nexport const publications = [\n" + ",\n".join(new_pubs) + "\n];\n"

with open('src/data/publicationsData.js', 'w', encoding='utf-8') as f:
    f.write(output)
    
print("Publications updated!")
