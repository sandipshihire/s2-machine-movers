import fitz # PyMuPDF
import os
from PIL import Image
import io
import shutil

pdf_path = r"d:\S2 Machine Movers\S2 Machine Movers Profile.pdf"
logo_dir = r"d:\S2 Machine Movers\logo"
out_dir = r"d:\S2 Machine Movers\website\src\assets\images"

os.makedirs(out_dir, exist_ok=True)

# Copy logos
if os.path.exists(logo_dir):
    for f in os.listdir(logo_dir):
        src_f = os.path.join(logo_dir, f)
        if os.path.isfile(src_f):
            dest_f = os.path.join(out_dir, f)
            shutil.copy2(src_f, dest_f)
            print(f"Copied logo: {f}")

# Extract images from PDF
doc = fitz.open(pdf_path)
print(f"Opened PDF with {len(doc)} pages")

image_count = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images(full=True)
    print(f"Page {page_num + 1} has {len(image_list)} images")
    
    for img_idx, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        # Save image
        img_name = f"project_p{page_num + 1}_img{img_idx + 1}.{image_ext}"
        img_path = os.path.join(out_dir, img_name)
        with open(img_path, "wb") as f:
            f.write(image_bytes)
        print(f"Saved: {img_name} ({len(image_bytes)} bytes)")
        image_count += 1

print(f"Total extracted: {image_count} images into {out_dir}")

