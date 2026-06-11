import fitz
import os
import glob
from PIL import Image
import io

out_dir = r"c:\Users\banerjee\Desktop\myBio\scratch_images\hardware"
os.makedirs(out_dir, exist_ok=True)

pdf_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets\drive_images"
pdfs = [
    "*Reversible*masking*",
    "*Secure*scan*",
    "*Reversible*Data*"
]

def extract_from_pdf(pattern, prefix):
    matches = glob.glob(os.path.join(pdf_dir, pattern))
    if not matches:
        print(f"No match for {pattern}")
        return
        
    pdf_path = matches[0]
    doc = fitz.open(pdf_path)
    count = 0
    
    # Extract embedded images
    for page_index in range(len(doc)):
        page = doc[page_index]
        image_list = page.get_images()
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            # Ignore very small images (like logos or tiny line segments)
            if len(image_bytes) < 5000:
                continue
            try:
                image = Image.open(io.BytesIO(image_bytes))
                if image.width < 100 or image.height < 100:
                    continue
                out_path = os.path.join(out_dir, f"{prefix}_page{page_index+1}_{image_index}.{image_ext}")
                with open(out_path, "wb") as f:
                    f.write(image_bytes)
                count += 1
            except Exception as e:
                pass
                
    # Also render the full pages where figures might be, just in case they are vector graphics
    for fig_text in ["Fig. 2", "Fig. 3", "Fig. 4", "Fig. 8", "Figure 8"]:
        for page_index in range(len(doc)):
            page = doc[page_index]
            if page.search_for(fig_text):
                pix = page.get_pixmap(dpi=150)
                out_path = os.path.join(out_dir, f"{prefix}_FULLPAGE_{page_index+1}_for_{fig_text.replace(' ', '')}.png")
                pix.save(out_path)
                
    print(f"Extracted {count} embedded images and relevant full pages for {prefix}")

extract_from_pdf("*Reversible*masking*", "RevMask")
extract_from_pdf("*Secure*scan*", "SecScan")
extract_from_pdf("*Reversible*Data*", "RevData")
