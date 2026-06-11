import fitz
import os
import glob
from PIL import Image
import io

assets_dir = r"c:/Users/banerjee/Desktop/myBio/src/assets"
pdf_dir = os.path.join(assets_dir, "drive_images")

def find_pdf(pattern):
    matches = glob.glob(os.path.join(pdf_dir, pattern))
    if matches:
        return matches[0]
    return None

def find_fig_bbox(doc, fig_text, crop_height_above=800, crop_width_padding=200):
    for page_num in range(len(doc)):
        page = doc[page_num]
        text_instances = page.search_for(fig_text)
        if text_instances:
            inst = text_instances[0]
            pix = page.get_pixmap(dpi=300)
            img = Image.open(io.BytesIO(pix.tobytes("png")))
            
            scale_x = pix.width / page.rect.width
            scale_y = pix.height / page.rect.height
            
            x0, y0, x1, y1 = inst.x0 * scale_x, inst.y0 * scale_y, inst.x1 * scale_x, inst.y1 * scale_y
            
            crop_y0 = max(0, y0 - crop_height_above)
            crop_y1 = y0 + 50
            crop_x0 = max(0, x0 - crop_width_padding)
            crop_x1 = min(pix.width, x1 + crop_width_padding)
            
            # If the crop goes out of bounds, constrain it
            crop_x0 = max(0, crop_x0)
            crop_x1 = min(pix.width, crop_x1)
            
            cropped = img.crop((crop_x0, crop_y0, crop_x1, crop_y1))
            return cropped
    return None

# 3. Reversible Data Encryption
enc_pdf = find_pdf("*Reversible*Data*")
if enc_pdf:
    doc = fitz.open(enc_pdf)
    fig8 = find_fig_bbox(doc, "Fig. 8", crop_height_above=1200, crop_width_padding=500)
    if fig8:
        fig8.save(os.path.join(assets_dir, "reversible_encryption_fig8.jpeg"))
        print("Reversible Data Encryption Figure 8 saved.")
    else:
        print("Could not find Figure 8 in Reversible Data Encryption.")
