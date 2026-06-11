import fitz
import os

pdf_dir = r"c:\Users\banerjee\Desktop\myBio\src\assets\drive_images"
out_dir = r"c:\Users\banerjee\Desktop\myBio\scratch_images"
os.makedirs(out_dir, exist_ok=True)

pdfs_to_extract = [
    "MakeUpMirror- Mirroring make-ups and verifying faces post make-up.pdf",
    "PosIX-GAN- Generating multiple poses using GAN for pose-invariant face recognition.pdf",
    "Unsupervised method of domain adaptation on representation of discriminatory regions of the face image for surveillance face datasets.pdf",
    "Survey of loss functions for training deep-learning models in computer vision, categorized based on tasks, metric-forms and learning paradigms.pdf"
]

for pdf_name in pdfs_to_extract:
    pdf_path = os.path.join(pdf_dir, pdf_name)
    if not os.path.exists(pdf_path):
        print(f"Skipping {pdf_name}, not found.")
        continue
        
    doc = fitz.open(pdf_path)
    prefix = pdf_name.split('-')[0].replace(' ', '_')[:15] # short prefix
    
    img_count = 0
    for page_index in range(len(doc)):
        page = doc[page_index]
        image_list = page.get_images(full=True)
        
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Skip very small images (icons/logos)
            if len(image_bytes) < 10000:
                continue
                
            img_filename = f"{prefix}_page{page_index+1}_{image_index}.{image_ext}"
            img_filepath = os.path.join(out_dir, img_filename)
            
            with open(img_filepath, "wb") as f:
                f.write(image_bytes)
            img_count += 1
            
    print(f"Extracted {img_count} images from {pdf_name}")
