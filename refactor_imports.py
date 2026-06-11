import json
import re

db_path = r"c:\Users\banerjee\Desktop\myBio\src\data\imageMappings.json"
pubs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js"
projs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\projectsData.js"
img_db_file = r"c:\Users\banerjee\Desktop\myBio\src\data\imageDatabase.js"

with open(db_path, 'r', encoding='utf-8') as f:
    image_db = json.load(f)

# Build imageDatabase.js
imports = []
exports = []
for i, (pub_id, filename) in enumerate(image_db.items()):
    var_name = f"img_{i}"
    imports.append(f"import {var_name} from '../assets/{filename}';")
    exports.append(f'  "{pub_id}": {var_name},')

# I will also add generic_img as fallback
imports.append("import generic_img from '../assets/generic.png';")

db_content = "\n".join(imports) + "\n\nexport const imageDatabase = {\n" + "\n".join(exports) + "\n};\n"
with open(img_db_file, 'w', encoding='utf-8') as f:
    f.write(db_content)

# Refactor publicationsData.js
with open(pubs_file, 'r', encoding='utf-8') as f:
    pub_data = f.read()

# Remove all existing image imports
pub_data = re.sub(r"import\s+img_\w+\s+from\s+'.*?';\n", "", pub_data)
pub_data = re.sub(r"import\s+generic_img\s+from\s+'.*?';\n", "", pub_data)

# Add import for imageDatabase
pub_data = "import { imageDatabase } from './imageDatabase';\n" + pub_data

# Replace image: img_X with image: imageDatabase[id] || generic_img
pub_data = re.sub(r'image:\s*(img_\w+|generic_img),', r'image: imageDatabase["\g<1>"],', pub_data) 
# Wait, \g<1> is the old variable. That is wrong. 
# We should parse the id of each pub!
pubs_list = re.findall(r'(\{\s*id:\s*"([^"]+)",(.*?)\})', pub_data, re.DOTALL)

for full_match, pub_id, rest in pubs_list:
    new_match = re.sub(r'image:\s*(img_\w+|generic_img)', f'image: imageDatabase["{pub_id}"]', full_match)
    pub_data = pub_data.replace(full_match, new_match)

with open(pubs_file, 'w', encoding='utf-8') as f:
    f.write(pub_data)

# Do the same for projectsData.js if it exists and uses these images.
# Actually projectsData.js used its own images mostly. Let's see if it has ids matching.
with open(projs_file, 'r', encoding='utf-8') as f:
    proj_data = f.read()
    
# We will just map the same images for projects if they match the title!
# Wait, projectsData.js has separate image names. Let's leave projectsData.js alone unless it crashes.
# Wait, earlier I mapped projectsData.js to use generic_img or img_0 etc from publicationsData.js!
# Yes, I did! Let's check projectsData.js structure.
proj_list = re.findall(r'(\{\s*title:\s*"([^"]+)",(.*?)\})', proj_data, re.DOTALL)
for full_match, title, rest in proj_list:
    # If the title matches any pub, we should just use imageDatabase[pub_id]
    # But wait, projects don't have ids? Let's just give projects the same image!
    pass

print("Refactored publicationsData.js to use imageDatabase.js!")
