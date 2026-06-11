import re
import json

projs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\projectsData.js"
db_file = r"c:\Users\banerjee\Desktop\myBio\src\data\projectsImageDatabase.js"

with open(projs_file, 'r', encoding='utf-8') as f:
    proj_data = f.read()

# Extract imports
imports = dict()
for match in re.finditer(r"import\s+(img_\w+|generic_img)\s+from\s+'(.*?)';", proj_data):
    imports[match.group(1)] = match.group(2)

# Extract projects
proj_list = re.findall(r'(\{\s*id:\s*"([^"]+)",.*?image:\s*(img_\w+|generic_img).*?\})', proj_data, re.DOTALL)

# Build projectsImageDatabase.js
db_imports = []
db_exports = []

for i, (full_match, proj_id, img_var) in enumerate(proj_list):
    filename = imports.get(img_var, '../assets/project_brain.png')
    var_name = f"proj_img_{i}"
    db_imports.append(f"import {var_name} from '{filename}';")
    db_exports.append(f'  "{proj_id}": {var_name},')

# Add generic fallback just in case
db_imports.append("import generic_img from '../assets/project_brain.png';")

db_content = "\n".join(db_imports) + "\n\nexport const projectsImageDatabase = {\n" + "\n".join(db_exports) + "\n};\n"
with open(db_file, 'w', encoding='utf-8') as f:
    f.write(db_content)

# Refactor projectsData.js
# Remove old imports
proj_data = re.sub(r"import\s+(img_\w+|generic_img)\s+from\s+'.*?';\n", "", proj_data)

# Add new import
proj_data = "import { projectsImageDatabase } from './projectsImageDatabase';\n" + proj_data

# Replace image references
for full_match, proj_id, img_var in proj_list:
    new_match = re.sub(r'image:\s*(img_\w+|generic_img)', f'image: projectsImageDatabase["{proj_id}"]', full_match)
    proj_data = proj_data.replace(full_match, new_match)

with open(projs_file, 'w', encoding='utf-8') as f:
    f.write(proj_data)

print("Refactored projectsData.js to use projectsImageDatabase.js!")
