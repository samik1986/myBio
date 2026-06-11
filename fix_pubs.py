import re

pubDataPath = 'src/data/publicationsData.js'

with open(pubDataPath, 'r', encoding='utf-8') as f:
    pubData = f.read()

defined_images = set(re.findall(r"import (img_\d+) from '.*?';", pubData))

# Add a generic image import if it doesn't exist
genericImport = "import generic_img from '../assets/project_brain.png';\n"
if 'generic_img' not in pubData:
    pubData = genericImport + pubData

def replace_image(match):
    img_var = match.group(1)
    if img_var in defined_images:
        return f"image: {img_var},"
    else:
        return "image: generic_img,"

fixedData = re.sub(r'image:\s*(img_\d+),', replace_image, pubData)

with open(pubDataPath, 'w', encoding='utf-8') as f:
    f.write(fixedData)

print("Fixed missing image references!")
