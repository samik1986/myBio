import fitz
import os
import shutil

pdf_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets\drive_images"
artifacts_dir = r"C:\Users\banerjee\.gemini\antigravity-ide\brain\a045dea0-4991-4202-9457-4df94b1bc54b\scratch\candidates"
os.makedirs(artifacts_dir, exist_ok=True)

# 1. Extract Neurocomputing paper images directly into artifacts_dir
pdf_name = "Mutual variation of information on Transfer-CNN for Face Recognition with degraded probe samples.pdf"
pdf_path = os.path.join(pdf_dir, pdf_name)
doc = fitz.open(pdf_path)
prefix = "Neuro"

for page_index in range(len(doc)):
    page = doc[page_index]
    for image_index, img in enumerate(page.get_images(full=True), start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        if len(image_bytes) < 15000: # Skip very small icons/text graphs
            continue
        filepath = os.path.join(artifacts_dir, f"{prefix}_page{page_index+1}_{image_index}.{image_ext}")
        with open(filepath, "wb") as f:
            f.write(image_bytes)

# 2. Copy MakeUpMirror and PosIX images from scratch_images to artifacts_dir
scratch_dir = r"c:\Users\banerjee\Desktop\myBio\scratch_images"
import glob

makeup_imgs = glob.glob(os.path.join(scratch_dir, "MakeUpMirror*"))
posix_imgs = glob.glob(os.path.join(scratch_dir, "PosIX*"))

for img in makeup_imgs + posix_imgs:
    # only copy ones that are reasonably sized to avoid clutter
    if os.path.getsize(img) > 15000:
        shutil.copy(img, artifacts_dir)

print("Images ready in artifacts directory!")
