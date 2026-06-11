import os
import shutil
import re

candidates_dir = r"C:\Users\banerjee\.gemini\antigravity-ide\brain\a045dea0-4991-4202-9457-4df94b1bc54b\scratch\candidates"
assets_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets"

# 1. Copy and Overwrite Images
shutil.copy(os.path.join(candidates_dir, "MakeUpMirror_page7_1.jpeg"), os.path.join(assets_dir, "makeup_mirror_faces.jpeg"))
shutil.copy(os.path.join(candidates_dir, "Neuro_page4_2.jpeg"), os.path.join(assets_dir, "drive_Mutual_variation_of_information_on_TransferCNN_for.jpeg"))
shutil.copy(os.path.join(candidates_dir, "PosIX_page13_1.jpeg"), os.path.join(assets_dir, "posix_gan_faces.jpeg"))

# For the About Page image
shutil.copy(os.path.join(candidates_dir, "Neuro_page16_1.jpeg"), os.path.join(assets_dir, "Neuro_page16_1.jpeg"))


# 2. Update posix extension in JS databases
img_db_path = r"c:\Users\banerjee\Desktop\myBio\src\data\imageDatabase.js"
proj_db_path = r"c:\Users\banerjee\Desktop\myBio\src\data\projectsImageDatabase.js"

with open(img_db_path, "r", encoding="utf-8") as f:
    img_db = f.read()
img_db = img_db.replace("posix_gan_faces.png", "posix_gan_faces.jpeg")
with open(img_db_path, "w", encoding="utf-8") as f:
    f.write(img_db)

with open(proj_db_path, "r", encoding="utf-8") as f:
    proj_db = f.read()
proj_db = proj_db.replace("posix_gan_faces.png", "posix_gan_faces.jpeg")
with open(proj_db_path, "w", encoding="utf-8") as f:
    f.write(proj_db)

# Try removing the old posix png
try:
    os.remove(os.path.join(assets_dir, "posix_gan_faces.png"))
except:
    pass

# 3. Update About.jsx
about_path = r"c:\Users\banerjee\Desktop\myBio\src\components\About\About.jsx"
with open(about_path, "r", encoding="utf-8") as f:
    about_content = f.read()

# Insert the import if it's not there
if "Neuro_page16_1.jpeg" not in about_content:
    about_content = about_content.replace("import './About.css';", "import './About.css';\nimport profileImage from '../../assets/Neuro_page16_1.jpeg';")

# Replace the img src
about_content = re.sub(
    r'<img src="https://github.com/samik1986.png"',
    r'<img src={profileImage}',
    about_content
)

with open(about_path, "w", encoding="utf-8") as f:
    f.write(about_content)

print("Applied image choices and updated About page!")
