import os
import shutil
import glob

# Get all Reversible_Data_page4* images
files = glob.glob(r"c:\Users\banerjee\Desktop\myBio\scratch_images\Reversible_Data_page4*.jpeg")

# Sort by size to get the largest image
files.sort(key=os.path.getsize, reverse=True)

if files:
    largest_file = files[0]
    dest = r"c:\Users\banerjee\Desktop\myBio\src\assets\reversible_encryption_fig8.jpeg"
    shutil.copy(largest_file, dest)
    print(f"Copied {largest_file} to {dest}")
else:
    print("No files found!")
