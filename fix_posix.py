import os
import shutil
import glob
import json

scratch_dir = r"c:\Users\banerjee\Desktop\myBio\scratch_images"
assets_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets"

def get_largest_image(prefix):
    images = glob.glob(os.path.join(scratch_dir, prefix + "*"))
    if not images: return None
    return max(images, key=os.path.getsize)

posix_src = get_largest_image("PosIX")
print("Posix source:", posix_src)
if posix_src:
    ext = posix_src.split('.')[-1]
    dest_filename = "posix_gan_faces." + ext
    shutil.copy(posix_src, os.path.join(assets_dir, dest_filename))
    
    # Update imageMappings.json
    db_path = r"c:\Users\banerjee\Desktop\myBio\src\data\imageMappings.json"
    with open(db_path, 'r', encoding='utf-8') as f:
        image_db = json.load(f)
        
    for pub_id in image_db:
        # We need to find PosIX GAN pub_id
        # In build_image_db.py we did: elif "Generating multiple poses using GAN" in title: filename = new_asset_filenames["POSIX GAN"]
        pass
        
    # We can just read publicationsData.js to find the pub_id
    import re
    pubs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js"
    with open(pubs_file, 'r', encoding='utf-8') as f:
        pub_data = f.read()
    
    pubs_list = re.findall(r'(\{\s*id:\s*"([^"]+)",.*?title:\s*"([^"]+)")', pub_data, re.DOTALL)
    for _, pub_id, title in pubs_list:
        if "Generating multiple poses using GAN" in title:
            image_db[pub_id] = dest_filename
            
    with open(db_path, 'w', encoding='utf-8') as f:
        json.dump(image_db, f, indent=2)
        
    print(f"Fixed POSIX GAN image mapping to {dest_filename}")
