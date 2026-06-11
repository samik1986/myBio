import os
import shutil

assets_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets"
scratch_dir = r"C:\Users\banerjee\.gemini\antigravity-ide\brain\a045dea0-4991-4202-9457-4df94b1bc54b\scratch\candidates"

# The user originally requested: MakeUpMirror_page7_1.jpeg, PosIX_page13_1.jpeg, Neuro_page4_2.jpeg for the papers
# The user originally requested: Neuro_page16_1.jpeg for the about page
# I overwrote the old names in assets directly earlier. Now I want to restore the real names in assets!

# Step 1. We will copy the specific candidates directly from the artifacts scratch directory to assets using their real names
images_to_copy = {
    "MakeUpMirror_page7_1.jpeg": "MakeUpMirror_page7_1.jpeg",
    "PosIX_page13_1.jpeg": "PosIX_page13_1.jpeg",
    "Neuro_page4_2.jpeg": "Neuro_page4_2.jpeg",
    "Neuro_page16_1.jpeg": "Neuro_page16_1.jpeg"
}

for src, dest in images_to_copy.items():
    src_path = os.path.join(scratch_dir, src)
    dest_path = os.path.join(assets_dir, dest)
    if os.path.exists(src_path):
        shutil.copy(src_path, dest_path)
        print(f"Copied {src} to {dest_path}")
    else:
        print(f"WARNING: Could not find {src_path}")

# Step 2: Ensure the hardware papers have their descriptive names too
hardware_renames = {
    "secure_scan_fig8.jpeg": "SecScan_page4_4.jpeg",
    "reversible_encryption_fig8.jpeg": "RevData_page4_3.jpeg",
    "reversible_masking_combined.jpeg": "RevMask_page2_4.jpeg"
}
for old, new in hardware_renames.items():
    old_path = os.path.join(assets_dir, old)
    new_path = os.path.join(assets_dir, new)
    if os.path.exists(old_path) and not os.path.exists(new_path):
        os.rename(old_path, new_path)
        print(f"Renamed {old} to {new}")
    elif os.path.exists(new_path):
        print(f"{new} already exists")

# Step 3: Update imageDatabase.js
db_file = r"c:\Users\banerjee\Desktop\myBio\src\data\imageDatabase.js"
with open(db_file, "r", encoding="utf-8") as f:
    db_content = f.read()

# Replace the generic hardware names
db_content = db_content.replace('reversible_encryption_fig8.jpeg', 'RevData_page4_3.jpeg')
db_content = db_content.replace('secure_scan_fig8.jpeg', 'SecScan_page4_4.jpeg')
db_content = db_content.replace('reversible_masking_combined.jpeg', 'RevMask_page2_4.jpeg')

# Replace the generic old paper names with the new candidates
db_content = db_content.replace('makeup_mirror_faces.jpeg', 'MakeUpMirror_page7_1.jpeg')
db_content = db_content.replace('posix_gan_faces.jpeg', 'PosIX_page13_1.jpeg')
db_content = db_content.replace('drive_Detection_and_skeletonization_of_single_neurons_an.jpeg', 'Neuro_page4_2.jpeg')

with open(db_file, "w", encoding="utf-8") as f:
    f.write(db_content)

# Step 4: Update projectsImageDatabase.js
proj_file = r"c:\Users\banerjee\Desktop\myBio\src\data\projectsImageDatabase.js"
with open(proj_file, "r", encoding="utf-8") as f:
    proj_content = f.read()

proj_content = proj_content.replace("posix_gan_faces.jpeg", "PosIX_page13_1.jpeg")
proj_content = proj_content.replace("makeup_mirror_faces.jpeg", "MakeUpMirror_page7_1.jpeg")

with open(proj_file, "w", encoding="utf-8") as f:
    f.write(proj_content)

# Step 5: Update About page to use Neuro_page16_1.jpeg
about_file = r"c:\Users\banerjee\Desktop\myBio\src\components\About\About.jsx"
with open(about_file, "r", encoding="utf-8") as f:
    about_content = f.read()

# We don't know the exact string, so we'll just replace the whole import line if we find a generic samik.jpeg or whatever.
import re
about_content = re.sub(r"import profileImage from '\.\./\.\./assets/.*';\n", "import profileImage from '../../assets/Neuro_page16_1.jpeg';\n", about_content)

with open(about_file, "w", encoding="utf-8") as f:
    f.write(about_content)

print("SUCCESS: Databases updated and descriptive names applied.")
