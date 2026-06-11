import fitz
import os

pdf_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets\drive_images"
out_dir = r"c:\Users\banerjee\Desktop\myBio\scratch_images"
os.makedirs(out_dir, exist_ok=True)

pdfs_to_extract = [
    "Reversible Data Encryption Algorithm.pdf",
    "Reversible masking- a novel fault-diagnosed.pdf",
    "Secure scan design with Isomorphic registers.pdf",
    "Survey of loss functions for training deep-learning models in computer vision, categorized based on tasks, metric-forms and learning paradigms.pdf"
]

for pdf_name in pdfs_to_extract:
    pdf_path = os.path.join(pdf_dir, pdf_name)
    if not os.path.exists(pdf_path):
        print(f"Skipping {pdf_name}, not found.")
        continue
        
    doc = fitz.open(pdf_path)
    prefix = pdf_name.split('-')[0].replace(' ', '_')[:15]
    
    img_count = 0
    # For SSRN (Survey of loss functions), we render the first page as an image
    if "Survey of loss functions" in pdf_name:
        page = doc.load_page(0)
        pix = page.get_pixmap(dpi=150)
        pix.save(os.path.join(out_dir, f"{prefix}_page1_rendered.png"))
        print(f"Rendered page 1 of {pdf_name}")
        continue
        
    for page_index in range(len(doc)):
        page = doc[page_index]
        image_list = page.get_images(full=True)
        
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            if len(image_bytes) < 5000:
                continue
                
            img_filename = f"{prefix}_page{page_index+1}_{image_index}.{image_ext}"
            img_filepath = os.path.join(out_dir, img_filename)
            
            with open(img_filepath, "wb") as f:
                f.write(image_bytes)
            img_count += 1
            
    # If no images extracted (e.g. they are vector drawings), render the page with the most drawings!
    if img_count == 0:
        print(f"No raster images in {pdf_name}, rendering page 2 (usually has figures)...")
        if len(doc) > 1:
            page = doc.load_page(1)
        else:
            page = doc.load_page(0)
        pix = page.get_pixmap(dpi=150)
        pix.save(os.path.join(out_dir, f"{prefix}_rendered_fig.png"))
        
    print(f"Extracted {img_count} images from {pdf_name}")
