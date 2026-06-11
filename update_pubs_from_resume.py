import re
import difflib

# True data from resume
resume_pubs = [
    {"title": "Semantic segmentation of microscopic neuroanatomical data by combining topological priors with encoder–decoder deep networks", "journal": "Nature Machine Intelligence", "year": 2020, "isPreprint": "false"},
    {"title": "A guide to the BRAIN Initiative Cell Census Network data ecosystem", "journal": "PLoS Biology", "year": 2023, "isPreprint": "false"},
    {"title": "A multimodal cell census and atlas of the mammalian primary motor cortex", "journal": "Nature", "year": 2021, "isPreprint": "false"},
    {"title": "Cellular anatomy of the mouse primary motor cortex", "journal": "Nature", "year": 2021, "isPreprint": "false"},
    {"title": "Solving the where problem and quantifying geometric variation in neuroanatomy using generative diffeomorphic mapping", "journal": "Nature Communications", "year": 2025, "isPreprint": "false"},
    {"title": "PosIX-GAN: Generating multiple poses using GAN for pose-invariant face recognition", "journal": "ECCV Workshop", "year": 2018, "isPreprint": "false"},
    {"title": "LRGAN for Degraded Face Recognition", "journal": "Pattern Recognition Letters", "year": 2018, "isPreprint": "false"},
    {"title": "Mutual variation of information on Transfer-CNN for Face Recognition with degraded probe samples", "journal": "Neurocomputing", "year": 2018, "isPreprint": "false"},
    {"title": "MakeUpMirror: Mirroring make-ups and verifying faces post make-up", "journal": "IET Biometrics", "year": 2018, "isPreprint": "false"},
    {"title": "Soft-Margin Learning for Multiple Feature-Kernel Combinations With Domain Adaptation", "journal": "CVPR Workshop on Biometrics", "year": 2016, "isPreprint": "false"},
    {"title": "Skeletonization of neuronal processes using Discrete Morse techniques from computational topology", "journal": "arXiv preprint (Under Review in Nature Communications)", "year": 2025, "isPreprint": "true"},
    {"title": "3D multimodal histological atlas and coordinate framework for the mouse brain and head", "journal": "bioRxiv (Under Review in Nature Neuroscience)", "year": 2025, "isPreprint": "true"},
    {"title": "A three-dimensional histological cell atlas of the developing human brain", "journal": "bioRxiv (Under Review in Nature)", "year": 2024, "isPreprint": "true"},
    {"title": "Survey of loss functions for training deep-learning models in computer vision", "journal": "SSRN (Under Review in CVIU)", "year": 2025, "isPreprint": "true"},
    {"title": "SD-GAN: Structural and Denoising GAN reveals facial parts under occlusion", "journal": "arXiv preprint", "year": 2020, "isPreprint": "true"},
]

with open('src/data/publicationsData.js', 'r', encoding='utf-8') as f:
    data = f.read()

# Extract publications block
pub_block_match = re.search(r'export const publications = \[(.*?)\];', data, re.DOTALL)
pub_block = pub_block_match.group(1)

pubs_text = re.split(r'\},?\s*\{', pub_block)

new_pubs = []

for pt in pubs_text:
    pt = pt.replace('{', '').replace('}', '').strip()
    if not pt: continue
    
    title_match = re.search(r'title: "(.*?)",', pt)
    if not title_match: continue
    title = title_match.group(1)
    
    # Defaults
    year_match = re.search(r'year: (.*?),', pt)
    year = year_match.group(1) if year_match else "2020"
    
    journal_match = re.search(r'journal: "(.*?)",', pt)
    journal = journal_match.group(1) if journal_match else "Journal"
    
    isP_match = re.search(r'isPreprint: (.*?),', pt)
    isPreprint = isP_match.group(1) if isP_match else "false"
    
    # Try to match with resume
    best_score = 0
    best_match = None
    clean_title = re.sub(r'[^a-zA-Z0-9]', '', title.lower())
    
    for rp in resume_pubs:
        clean_rp = re.sub(r'[^a-zA-Z0-9]', '', rp['title'].lower())
        score = difflib.SequenceMatcher(None, clean_title, clean_rp).ratio()
        if score > best_score:
            best_score = score
            best_match = rp
            
    if best_score > 0.6:
        journal = best_match['journal']
        year = best_match['year']
        isPreprint = best_match['isPreprint']
        
    # Rebuild pt
    img_match = re.search(r'image: (.*?),', pt)
    img_var = img_match.group(1) if img_match else "''"
    
    # Reconstruct publication object
    pub_obj = f"""  {{
    id: "pub-{len(new_pubs)+1}",
    title: "{title}",
    authors: "Samik Banerjee et al.",
    journal: "{journal}",
    year: {year},
    isPreprint: {isPreprint},
    link: "#",
    image: {img_var},
    abstract: "Read the full paper for more details."
  }}"""
    new_pubs.append(pub_obj)

import_block = re.search(r'(import .*?;)+', data, re.DOTALL).group(0)
output = import_block + "\n\nexport const publications = [\n" + ",\n".join(new_pubs) + "\n];\n"

with open('src/data/publicationsData.js', 'w', encoding='utf-8') as f:
    f.write(output)
    
print("Resume data applied to publications!")
