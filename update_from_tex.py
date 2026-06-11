import re
import difflib

tex_path = r'c:\Users\banerjee\Desktop\CV_resume\resume_Samik.tex'
js_path = r'c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js'

with open(tex_path, 'r', encoding='utf-8') as f:
    tex_data = f.read()

# Extract items
pub_items = re.findall(r'\\item\s*.*?\\emph\{(.*?)\}\.\s*(.*?)(?:,\\s*(\d{4}))?}', tex_data, re.DOTALL)
# It's a bit hard to parse latex safely with regex, let's just do a simpler pass
# Find all \emph{title} followed by venue and year.
# Actually, looking at the tex file:
# \emph{A guide to the BRAIN Initiative...}. PLoS Biology, Volume ..., June, 2023}
# Let's match: \emph{ TITLE } \. VENUE_TEXT , YEAR }

extracted_pubs = []
matches = re.findall(r'\\emph\{(.*?)\}\.(.*?)(?:20\d\d|19\d\d)', tex_data, re.DOTALL)

for m in re.finditer(r'\\emph\{(.*?)\}(.*?)(19\d\d|20\d\d)', tex_data, re.DOTALL):
    title = m.group(1).strip().replace('\n', ' ').replace('\r', '')
    title = re.sub(r'\s+', ' ', title)
    
    venue_raw = m.group(2).strip().replace('\n', ' ').replace('\r', '')
    venue = re.sub(r'\s+', ' ', venue_raw).strip(" .,}")
    
    year = m.group(3)
    
    if len(title) > 10: # Filter out noise
        extracted_pubs.append({
            "title": title,
            "journal": venue,
            "year": year
        })

# Read JS
with open(js_path, 'r', encoding='utf-8') as f:
    data = f.read()

pub_block_match = re.search(r'export const publications = \[(.*?)\];', data, re.DOTALL)
pub_block = pub_block_match.group(1)

pubs_text = re.split(r'\},?\s*\{', pub_block)

import_block = re.search(r'(import .*?;)+', data, re.DOTALL).group(0)

# Add explicit mapping for user-requested images
user_image_map = {
    "makeups": "drive_MakeUpMirror_Mirroring_makeups_and_verifying_faces.jpeg",
    "makeupmirror": "drive_MakeUpMirror_Mirroring_makeups_and_verifying_faces.jpeg",
    "mutual": "drive_Mutual_variation_of_information_on_TransferCNN_for.jpeg",
    "posix": "drive_PosIXGAN_Generating_multiple_poses_using_GAN_for_p.png",
    "eigen": "drive_Eigen_Domain_Transformation_for_Softmargin_Multipl.png",
    "secure scan": "drive_Secure_scan_design_with_Isomorphic_registers.jpeg",
    "reversible": "drive_Reversible_Data_Encryption_Algorithm.jpeg",
    "reversible masking": "drive_Reversible_masking_a_novel_faultdiagnosed.jpeg",
}

# we need to append these imports if they don't exist
existing_imports = import_block.split('\n')
img_map = {} # img_N -> filename
var_to_filename = {}
for imp in existing_imports:
    m = re.search(r'import (img_\d+) from \'../assets/(.*?)\';', imp)
    if m:
        img_map[m.group(2)] = m.group(1)
        var_to_filename[m.group(1)] = m.group(2)

def get_or_create_import(filename):
    if filename in img_map:
        return img_map[filename]
    # create new
    new_var = f"img_{len(img_map)}"
    img_map[filename] = new_var
    var_to_filename[new_var] = filename
    return new_var

new_pubs = []
for i, pt in enumerate(pubs_text):
    pt = pt.replace('{', '').replace('}', '').strip()
    if not pt: continue
    
    title_match = re.search(r'title: "(.*?)",', pt)
    if not title_match: continue
    title = title_match.group(1)
    
    year_match = re.search(r'year: (.*?),', pt)
    year = year_match.group(1) if year_match else "2020"
    
    journal_match = re.search(r'journal: "(.*?)",', pt)
    journal = journal_match.group(1) if journal_match else "Journal"
    
    isP_match = re.search(r'isPreprint: (.*?),', pt)
    isPreprint = isP_match.group(1) if isP_match else "false"
    
    img_match = re.search(r'image: (.*?),', pt)
    img_var = img_match.group(1) if img_match else "''"
    
    # Check user requested manual mappings
    l_title = title.lower()
    forced_img = None
    if "makeup" in l_title: forced_img = "drive_MakeUpMirror_Mirroring_makeups_and_verifying_faces.jpeg"
    elif "mutual" in l_title: forced_img = "drive_Mutual_variation_of_information_on_TransferCNN_for.jpeg"
    elif "posix" in l_title: forced_img = "drive_PosIXGAN_Generating_multiple_poses_using_GAN_for_p.png"
    elif "eigen" in l_title: forced_img = "drive_Eigen_Domain_Transformation_for_Softmargin_Multipl.png"
    elif "secure scan" in l_title: forced_img = "drive_Secure_scan_design_with_Isomorphic_registers.jpeg"
    elif "reversible" in l_title and "encryption" in l_title: forced_img = "drive_Reversible_Data_Encryption_Algorithm.jpeg"
    elif "reversible" in l_title and "masking" in l_title: forced_img = "drive_Reversible_masking_a_novel_faultdiagnosed.jpeg"
    
    if forced_img:
        img_var = get_or_create_import(forced_img)

    # Find best match from resume for dates and journals
    best_score = 0
    best_match = None
    clean_title = re.sub(r'[^a-zA-Z0-9]', '', title.lower())
    
    for rp in extracted_pubs:
        clean_rp = re.sub(r'[^a-zA-Z0-9]', '', rp['title'].lower())
        score = difflib.SequenceMatcher(None, clean_title, clean_rp).ratio()
        if score > best_score:
            best_score = score
            best_match = rp
            
    if best_score > 0.6:
        # Avoid overwriting already perfect journals with regex noise
        if journal == "Journal / Conference" or journal == "Journal" or "IEEE" in journal:
            journal = best_match['journal']
            # cleanup journal name
            journal = re.sub(r'\\.*', '', journal).strip()
            journal = journal.replace('Proceedings of', '').replace('International Conference on', '').strip(' ,.')
        year = best_match['year']

    pub_obj = f"""  {{
    id: "pub-{i+1}",
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

# Rebuild import block
new_import_lines = []
for filename, varname in img_map.items():
    new_import_lines.append(f"import {varname} from '../assets/{filename}';")

output = "\n".join(new_import_lines) + "\n\nexport const publications = [\n" + ",\n".join(new_pubs) + "\n];\n"

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(output)
    
print("Successfully extracted data from resume.tex and applied user image mappings!")
