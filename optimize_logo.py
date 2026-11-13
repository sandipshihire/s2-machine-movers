from PIL import Image
import os

images_dir = r"d:\S2 Machine Movers\website\src\assets\images"
logo_path = os.path.join(images_dir, "S2_Machine_Movers_Transparent.png")

if os.path.exists(logo_path):
    img = Image.open(logo_path)
    # Resize max dimension to 800px preserving transparency and aspect ratio
    img.thumbnail((800, 800), Image.Resampling.LANCZOS)
    optimized_png = os.path.join(images_dir, "logo_optimized.png")
    optimized_webp = os.path.join(images_dir, "logo_optimized.webp")
    img.save(optimized_png, "PNG", optimize=True)
    img.save(optimized_webp, "WEBP", quality=90)
    print(f"Original size: {os.path.getsize(logo_path)} bytes")
    print(f"Optimized PNG: {os.path.getsize(optimized_png)} bytes")
    print(f"Optimized WEBP: {os.path.getsize(optimized_webp)} bytes")

