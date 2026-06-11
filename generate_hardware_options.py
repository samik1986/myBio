import os
import glob
import shutil

src_dir = r"c:\Users\banerjee\Desktop\myBio\scratch_images\hardware"
artifacts_dir = r"C:\Users\banerjee\.gemini\antigravity-ide\brain\a045dea0-4991-4202-9457-4df94b1bc54b"

# Copy all images to artifacts
images = glob.glob(os.path.join(src_dir, "*"))
for img in images:
    shutil.copy(img, os.path.join(artifacts_dir, os.path.basename(img)))

md_content = "# Hardware Security Image Options\n\n"
md_content += "Please review the extracted images below and tell me exactly which filename(s) you would like to use for each paper.\n\n"

def append_section(prefix, title):
    global md_content
    md_content += f"## {title}\n"
    prefix_images = [img for img in images if os.path.basename(img).startswith(prefix)]
    # Sort by page/index if possible
    prefix_images.sort()
    for img in prefix_images:
        basename = os.path.basename(img)
        # Embed using absolute path syntax required for artifacts
        abs_path = os.path.join(artifacts_dir, basename).replace('\\', '/')
        md_content += f"**{basename}**\n\n![{basename}](file:///{abs_path})\n\n"

append_section("RevMask", "Reversible Masking")
append_section("SecScan", "Secure Scan Design")
append_section("RevData", "Reversible Data Encryption")

with open(os.path.join(artifacts_dir, "hardware_image_options.md"), "w", encoding="utf-8") as f:
    f.write(md_content)

print("Generated hardware_image_options.md artifact!")
