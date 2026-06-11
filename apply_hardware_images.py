import shutil
import os

src_dir = r"c:\Users\banerjee\Desktop\myBio\scratch_images\hardware"
dest_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets"

mappings = {
    "RevData_page4_3.jpeg": "reversible_encryption_fig8.jpeg",
    "SecScan_page4_4.jpeg": "secure_scan_fig8.jpeg",
    "RevMask_page2_4.jpeg": "reversible_masking_combined.jpeg"
}

for src_name, dest_name in mappings.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        shutil.copy(src_path, dest_path)
        print(f"Copied {src_name} to {dest_name}")
    else:
        print(f"Error: {src_path} not found!")
