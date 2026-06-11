import os

img_db_path = r"c:\Users\banerjee\Desktop\myBio\src\data\imageDatabase.js"

with open(img_db_path, "r", encoding="utf-8") as f:
    img_db = f.read()

# Replace the 3 old filenames with the 3 new filenames
img_db = img_db.replace("reversible_encryption_circuit.jpeg", "reversible_encryption_fig8.jpeg")
img_db = img_db.replace("reversible_masking_circuit.jpeg", "reversible_masking_combined.jpeg")
img_db = img_db.replace("secure_scan_circuit.jpeg", "secure_scan_fig8.jpeg")

with open(img_db_path, "w", encoding="utf-8") as f:
    f.write(img_db)

print("Updated imageDatabase.js!")
