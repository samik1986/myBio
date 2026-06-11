import os
import re
import difflib

assets_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets"
pubs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js"
projs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\projectsData.js"

# 1. Get all drive_ images
image_files = [f for f in os.listdir(assets_dir) if f.startswith('drive_') or f.startswith('pub_')]

# Read publicationsData.js
with open(pubs_file, 'r', encoding='utf-8') as f:
    pub_data = f.read()

# Parse existing pubs
pubs_list = re.findall(r'(\{\s*id:.*?abstract:.*?\}\n?\s*\}?)', pub_data, re.DOTALL)
imports_text = re.search(r'^(import .*?;[\n\s]*)+', pub_data, re.MULTILINE).group(0)

# We will recreate the imports block completely
new_imports = {}
img_counter = 0

def get_import_var(filename):
    global img_counter
    if filename not in new_imports:
        img_counter += 1
        new_imports[filename] = f"img_{img_counter}"
    return new_imports[filename]

def clean_str(s):
    return re.sub(r'[^a-z0-9]', '', s.lower())

new_pubs_list = []
for pub in pubs_list:
    title_match = re.search(r'title: "(.*?)",', pub)
    if not title_match: 
        new_pubs_list.append(pub)
        continue
    title = title_match.group(1)
    
    # find best image
    best_img = None
    best_score = 0
    clean_t = clean_str(title)
    
    for img in image_files:
        clean_img = clean_str(img.replace('drive_', '').replace('.png', '').replace('.jpeg', '').replace('.jpg', '').replace('pub_', ''))
        score = difflib.SequenceMatcher(None, clean_t, clean_img).ratio()
        if score > best_score:
            best_score = score
            best_img = img
            
    if best_score > 0.4 and best_img:
        var_name = get_import_var(best_img)
        pub = re.sub(r"image:.*?,", f"image: {var_name},", pub)
    else:
        pub = re.sub(r"image:.*?,", f"image: generic_img,", pub)
        
    new_pubs_list.append(pub)

# rebuild publicationsData.js
final_imports = "import generic_img from '../assets/project_brain.png';\n"
for filename, varname in new_imports.items():
    final_imports += f"import {varname} from '../assets/{filename}';\n"

final_pubs = final_imports + "\nexport const publications = [\n" + ",\n".join(new_pubs_list) + "\n];\n"

with open(pubs_file, 'w', encoding='utf-8') as f:
    f.write(final_pubs)

print("Updated publicationsData.js")

# Now let's do the same for projectsData.js
with open(projs_file, 'r', encoding='utf-8') as f:
    proj_data = f.read()
    
# Since there are only 10 projects, let's just replace their images based on matching descriptions or titles with the image names
proj_list = re.findall(r'(\{\s*id:.*?github:.*?\}\n?\s*\}?)', proj_data, re.DOTALL)

new_proj_list = []
for proj in proj_list:
    title_match = re.search(r'title: "(.*?)",', proj)
    desc_match = re.search(r'description: "(.*?)",', proj)
    title = title_match.group(1) if title_match else ""
    desc = desc_match.group(1) if desc_match else ""
    
    combined = title + " " + desc
    
    best_img = None
    best_score = 0
    clean_t = clean_str(combined)
    
    for img in image_files:
        clean_img = clean_str(img.replace('drive_', '').replace('.png', '').replace('.jpeg', '').replace('.jpg', '').replace('pub_', ''))
        # check if clean_img is a substring of combined, or high difflib match
        if clean_img in clean_t and len(clean_img) > 10:
            score = 1.0
        else:
            score = difflib.SequenceMatcher(None, clean_t, clean_img).ratio()
            
        if score > best_score:
            best_score = score
            best_img = img
            
    # For projects, let's be more specific
    # We can also hardcode some if the match is poor.
    # brain-connects -> drive_A_guide_to_the_BRAIN_Initiative...
    if "BRAIN CONNECTS" in title:
        best_img = "pub_diffeomorphic.png" # Let's use an actual map
    if "3D Histological Cell Atlas" in title:
        best_img = "drive_3D_multimodal_histological_atlas_and_coordinate_fr.jpeg"
    if "SemSeg" in title:
        best_img = "drive_Semantic_segmentation_of_microscopic_neuroanatomic.png"
    if "Interactive Web Visualization" in title:
        best_img = "pub_skeletonization.png"
    if "Marmoset Enhancers" in title:
        best_img = "drive_A_multimodal_cell_census_and_atlas_of_the_mammalia.jpeg"
    if "LR-GAN & SD-GAN" in title:
        best_img = "drive_LRGAN_for_Degraded_Face_Recognition.png"
    if "PosIX-GAN" in title:
        best_img = "drive_PosIXGAN_Generating_multiple_poses_using_GAN_for_p.png"
    if "Transfer-CNN" in title:
        best_img = "drive_Mutual_variation_of_information_on_TransferCNN_for.jpeg"
    if "MakeUpMirror" in title:
        best_img = "drive_MakeUpMirror_Mirroring_makeups_and_verifying_faces.jpeg"
    if "DRDO Target" in title:
        best_img = "drive_Detecting_aircrafts_from_satellite_images_using_sa.jpeg"

    if best_img:
        var_name = get_import_var(best_img)
        proj = re.sub(r"image:.*?,", f"image: {var_name},", proj)
    
    new_proj_list.append(proj)
    
# rebuild projectsData.js
final_proj_imports = "import generic_img from '../assets/project_brain.png';\n"
for filename, varname in new_imports.items():
    final_proj_imports += f"import {varname} from '../assets/{filename}';\n"
    
# Extract the githubProjects part to keep it unchanged
github_projects_match = re.search(r'(export const githubProjects = .*?;)', proj_data, re.DOTALL)
github_projects = github_projects_match.group(1) if github_projects_match else ""

final_projs = final_proj_imports + "\nexport const projectsData = [\n" + ",\n".join(new_proj_list) + "\n];\n\n" + github_projects

with open(projs_file, 'w', encoding='utf-8') as f:
    f.write(final_projs)

print("Updated projectsData.js")
