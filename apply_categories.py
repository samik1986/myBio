import re
import json

pubs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js"

with open(pubs_file, 'r', encoding='utf-8') as f:
    pub_data = f.read()

categories_map = {
    # Neuroscience
    "3D multimodal histological atlas": ("Neuroscience", "3D Brain Atlases"),
    "A multimodal cell census and atlas": ("Neuroscience", "3D Brain Atlases"),
    "A three-dimensional histological cell atlas": ("Neuroscience", "3D Brain Atlases"),
    "Cellular anatomy of the mouse primary motor": ("Neuroscience", "3D Brain Atlases"),
    "Solving the where problem and quantifying": ("Neuroscience", "3D Brain Atlases"),
    
    "A guide to the BRAIN Initiative": ("Neuroscience", "Single-Cell & Topology"),
    "Detection and skeletonization of single neurons": ("Neuroscience", "Single-Cell & Topology"),
    "High precision automated detection of labeled nuclei": ("Neuroscience", "Single-Cell & Topology"),
    "Semantic segmentation of microscopic neuroanatomical": ("Neuroscience", "Single-Cell & Topology"),
    "Skeletonization of neuronal processes": ("Neuroscience", "Single-Cell & Topology"),
    
    # Computer Vision
    "Deep Domain Adaptation for Face": ("Computer Vision", "Face Recognition & DA"),
    "Domain Adaptation with Soft-margin": ("Computer Vision", "Face Recognition & DA"),
    "Eigen Domain Transformation": ("Computer Vision", "Face Recognition & DA"),
    "Face recognition in surveillance": ("Computer Vision", "Face Recognition & DA"),
    "Kernel selection using multiple kernel": ("Computer Vision", "Face Recognition & DA"),
    "Soft-Margin Learning for Multiple Feature-Kernel": ("Computer Vision", "Face Recognition & DA"),
    "Mutual variation of information": ("Computer Vision", "Face Recognition & DA"),
    "Unsupervised method of domain adaptation": ("Computer Vision", "Face Recognition & DA"),
    "Performance of Deep Learning Algorithms": ("Computer Vision", "Face Recognition & DA"),
    
    "DP-GAN- Dual Pathway": ("Computer Vision", "Generative AI & Restoration"),
    "LRGAN for Degraded Face": ("Computer Vision", "Generative AI & Restoration"),
    "MakeUpMirror- Mirroring make-ups": ("Computer Vision", "Generative AI & Restoration"),
    "PosIX-GAN- Generating multiple": ("Computer Vision", "Generative AI & Restoration"),
    "SpoofNET- Resolving Facial": ("Computer Vision", "Generative AI & Restoration"),
    
    "Survey of loss functions": ("Computer Vision", "General AI & Methodology"),
    
    # Hardware Security
    "Reversible Data Encryption": ("Hardware Security", "Reversible Logic & Hardware"),
    "Reversible masking- a novel": ("Hardware Security", "Reversible Logic & Hardware"),
    "Secure scan design with": ("Hardware Security", "Reversible Logic & Hardware"),
    
    # Remote Sensing / Other
    "Detecting aircrafts from satellite": ("Remote Sensing", "Object Tracking"),
    "gtcx1": ("Conferences & Presentations", "Posters")
}

def get_cat(title):
    for key, val in categories_map.items():
        if key.lower() in title.lower():
            return val
    return ("Other", "General")

# First, extract each object
pubs_list = re.findall(r'(\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",(.*?)\})', pub_data, re.DOTALL)

for full_match, pub_id, title, rest in pubs_list:
    cat, subcat = get_cat(title)
    
    # Special fixes
    if "Detection and skeletonization" in title:
        # Change isPreprint: false to true
        rest = re.sub(r'isPreprint:\s*false', 'isPreprint: true', rest)
        # Change journal to arxiv
        rest = re.sub(r'journal:\s*".*?"', 'journal: "arXiv preprint"', rest)
        
    if "gtcx1" in title:
        rest = re.sub(r'journal:\s*".*?"', 'journal: "NVIDIA GTC India Poster"', rest)
        
    # Inject category and subCategory before abstract
    if 'category:' not in rest:
        rest = rest.replace('abstract:', f'category: "{cat}",\n    subCategory: "{subcat}",\n    abstract:')
        
    new_match = f'{{\n    id: "{pub_id}",\n    title: "{title}",{rest}}}'
    pub_data = pub_data.replace(full_match, new_match)

with open(pubs_file, 'w', encoding='utf-8') as f:
    f.write(pub_data)

print("Applied categories to publicationsData.js!")
