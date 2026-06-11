import os
import re
import json
import shutil
import glob

# 1. Identify new images
scratch_dir = r"c:\Users\banerjee\Desktop\myBio\scratch_images"
assets_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets"

def get_largest_image(prefix):
    images = glob.glob(os.path.join(scratch_dir, prefix + "*"))
    if not images: return None
    return max(images, key=os.path.getsize)

new_mappings = {
    "MakeUpMirror": get_largest_image("MakeUpMirror"),
    "POSIX GAN": get_largest_image("PosIX_GAN"),
    "PerMIn": get_largest_image("Unsupervised_me"),
    "Reversible Encryption": get_largest_image("Reversible_Data"),
    "Reversible Masking": get_largest_image("Reversible_mask"),
    "Secure Scan": get_largest_image("Secure_scan_des"),
    "SSRN Survey": os.path.join(scratch_dir, "Survey_of_loss__page1_rendered.png")
}

new_asset_filenames = {
    "MakeUpMirror": "makeup_mirror_faces.png",
    "POSIX GAN": "posix_gan_faces.png",
    "PerMIn": "permin_faces.png",
    "Reversible Encryption": "reversible_encryption_circuit.png",
    "Reversible Masking": "reversible_masking_circuit.png",
    "Secure Scan": "secure_scan_circuit.png",
    "SSRN Survey": "ssrn_paper_page1.png"
}

for key, src_path in new_mappings.items():
    if src_path and os.path.exists(src_path):
        dest_filename = new_asset_filenames[key]
        dest_path = os.path.join(assets_dir, dest_filename)
        # Convert any jpeg extension to png since we are forcing .png in the dict? Actually fitz extracted them as original.
        # Let's keep original extension
        ext = src_path.split('.')[-1]
        final_filename = dest_filename.split('.')[0] + '.' + ext
        new_asset_filenames[key] = final_filename
        dest_path = os.path.join(assets_dir, final_filename)
        shutil.copy(src_path, dest_path)
        print(f"Copied new image for {key} to {final_filename}")

# 2. Parse publicationsData.js to build database
pubs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js"
with open(pubs_file, 'r', encoding='utf-8') as f:
    pub_data = f.read()

# Extract imports
imports = dict()
for match in re.finditer(r"import\s+(img_\w+|generic_img)\s+from\s+'../assets/([^']+)';", pub_data):
    imports[match.group(1)] = match.group(2)

# Extract publications
pubs_list = re.findall(r'(\{\s*id:\s*"([^"]+)",.*?title:\s*"([^"]+)",.*?image:\s*(img_\w+|generic_img).*?\})', pub_data, re.DOTALL)

image_db = {}
for full_match, pub_id, title, img_var in pubs_list:
    filename = imports.get(img_var, "drive_Skeletonization_of_neuronal_processes_using_Discre.png")
    
    # Override with new images if it matches
    if "MakeUpMirror" in title:
        filename = new_asset_filenames["MakeUpMirror"]
    elif "Generating multiple poses using GAN" in title:
        filename = new_asset_filenames["POSIX GAN"]
    elif "Unsupervised method of domain adaptation" in title:
        filename = new_asset_filenames["PerMIn"]
    elif "Reversible Data Encryption Algorithm" in title:
        filename = new_asset_filenames["Reversible Encryption"]
    elif "Reversible masking- a novel fault-diagnosed" in title:
        filename = new_asset_filenames["Reversible Masking"]
    elif "Secure scan design with Isomorphic registers" in title:
        filename = new_asset_filenames["Secure Scan"]
    elif "Survey of loss functions" in title:
        filename = new_asset_filenames["SSRN Survey"]
        
    image_db[pub_id] = filename

# Write JSON database
db_path = r"c:\Users\banerjee\Desktop\myBio\src\data\imageMappings.json"
with open(db_path, 'w', encoding='utf-8') as f:
    json.dump(image_db, f, indent=2)

print(f"Created imageMappings.json with {len(image_db)} entries.")
