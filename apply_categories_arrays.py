import re
import json

pubs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js"

with open(pubs_file, 'r', encoding='utf-8') as f:
    pub_data = f.read()

categories_map = {
    # Neuroscience
    "3D multimodal histological atlas": (["Neuroscience"], ["3D Brain Atlases"]),
    "A multimodal cell census and atlas": (["Neuroscience"], ["3D Brain Atlases"]),
    "A three-dimensional histological cell atlas": (["Neuroscience"], ["3D Brain Atlases"]),
    "Cellular anatomy of the mouse primary motor": (["Neuroscience"], ["3D Brain Atlases"]),
    "Solving the where problem and quantifying": (["Neuroscience"], ["3D Brain Atlases"]),
    
    "A guide to the BRAIN Initiative": (["Neuroscience"], ["Single-Cell & Topology"]),
    "Detection and skeletonization of single neurons": (["Neuroscience"], ["Single-Cell & Topology"]),
    "High precision automated detection of labeled nuclei": (["Neuroscience"], ["Single-Cell & Topology"]),
    "Semantic segmentation of microscopic neuroanatomical": (["Neuroscience", "Computer Vision"], ["Single-Cell & Topology", "Image Segmentation"]),
    "Skeletonization of neuronal processes": (["Neuroscience"], ["Single-Cell & Topology"]),
    
    # Computer Vision
    "Deep Domain Adaptation for Face": (["Computer Vision"], ["Face Recognition", "Domain Adaptation"]),
    "Domain Adaptation with Soft-margin": (["Computer Vision"], ["Face Recognition", "Domain Adaptation"]),
    "Eigen Domain Transformation": (["Computer Vision"], ["Face Recognition", "Domain Adaptation"]),
    "Face recognition in surveillance": (["Computer Vision"], ["Face Recognition", "Domain Adaptation"]),
    "Kernel selection using multiple kernel": (["Computer Vision"], ["Face Recognition", "Domain Adaptation"]),
    "Soft-Margin Learning for Multiple Feature-Kernel": (["Computer Vision"], ["Face Recognition", "Domain Adaptation"]),
    "Mutual variation of information": (["Computer Vision"], ["Face Recognition"]),
    "Unsupervised method of domain adaptation": (["Computer Vision"], ["Face Recognition", "Domain Adaptation"]),
    "Performance of Deep Learning Algorithms": (["Computer Vision"], ["Face Recognition"]),
    
    "DP-GAN- Dual Pathway": (["Computer Vision"], ["Generative AI & Restoration"]),
    "LRGAN for Degraded Face": (["Computer Vision"], ["Generative AI & Restoration"]),
    "MakeUpMirror- Mirroring make-ups": (["Computer Vision"], ["Generative AI & Restoration"]),
    "PosIX-GAN- Generating multiple": (["Computer Vision"], ["Generative AI & Restoration"]),
    "SpoofNET- Resolving Facial": (["Computer Vision"], ["Generative AI & Restoration"]),
    
    "Survey of loss functions": (["Computer Vision"], ["General AI & Methodology"]),
    
    # Hardware Security & Quantum
    "Reversible Data Encryption": (["Hardware Security", "Cryptography"], ["Reversible Logic", "Quantum Computing"]),
    "Reversible masking- a novel": (["Hardware Security"], ["Reversible Logic", "Quantum Computing"]),
    "Secure scan design with": (["Hardware Security"], ["Secure Scan Design", "Quantum Computing"]),
    
    # Remote Sensing / Other
    "Detecting aircrafts from satellite": (["Remote Sensing", "Computer Vision"], ["Object Tracking", "Image Processing"]),
    "gtcx1": (["Conferences & Presentations"], ["Posters"])
}

def get_cat(title):
    for key, val in categories_map.items():
        if key.lower() in title.lower():
            return val
    return (["Other"], ["General"])

# Remove the old string-based category/subCategory
pub_data = re.sub(r'category:\s*".*?",\s*', '', pub_data)
pub_data = re.sub(r'subCategory:\s*".*?",\s*', '', pub_data)
pub_data = re.sub(r'categories:\s*\[.*?\],\s*', '', pub_data)
pub_data = re.sub(r'subCategories:\s*\[.*?\],\s*', '', pub_data)


# Inject array-based categories
pubs_list = re.findall(r'(\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",(.*?)\})', pub_data, re.DOTALL)

for full_match, pub_id, title, rest in pubs_list:
    cats, subcats = get_cat(title)
    
    cats_str = json.dumps(cats)
    subcats_str = json.dumps(subcats)
    
    if 'categories:' not in rest:
        rest = rest.replace('abstract:', f'categories: {cats_str},\n    subCategories: {subcats_str},\n    abstract:')
        
    new_match = f'{{\n    id: "{pub_id}",\n    title: "{title}",{rest}}}'
    pub_data = pub_data.replace(full_match, new_match)

with open(pubs_file, 'w', encoding='utf-8') as f:
    f.write(pub_data)

print("Applied array categories to publicationsData.js!")
