import os
from PIL import Image, ImageDraw, ImageOps

source_path = r"C:\Users\sathi\.gemini\antigravity-ide\brain\410c9f56-7e3a-4e26-901e-5f6d32dcce45\media__1786447406622.jpg"
if not os.path.exists(source_path):
    source_path = r"c:\outside\project\houseofnihara\public\images\logo-icon.jpg"

img = Image.open(source_path).convert("RGBA")
w, h = img.size

# Determine square crop centering on the 3 figures
dim = min(w, h)
left = (w - dim) // 2
top = (h - dim) // 2
right = left + dim
bottom = top + dim

square_img = img.crop((left, top, right, bottom))
size = 512
square_img = square_img.resize((size, size), Image.Resampling.LANCZOS)

# Create circular mask with anti-aliasing
mask = Image.new("L", (size * 2, size * 2), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, size * 2, size * 2), fill=255)
mask = mask.resize((size, size), Image.Resampling.LANCZOS)

# Circular image with transparent corners
circular_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
circular_img.paste(square_img, (0, 0), mask=mask)

# Add an elegant circular gold/rose border
border_draw = ImageDraw.Draw(circular_img)
border_width = 12
border_draw.ellipse(
    (border_width // 2, border_width // 2, size - border_width // 2, size - border_width // 2),
    outline=(212, 175, 55, 240), # Elegant gold ring
    width=border_width
)

# Output paths
dest_paths = [
    r"c:\outside\project\houseofnihara\public\images\logo-circle.png",
    r"c:\outside\project\houseofnihara\public\images\logo.png",
    r"c:\outside\project\houseofnihara\public\icon.png",
    r"c:\outside\project\houseofnihara\app\icon.png",
    r"c:\outside\project\houseofnihara\app\apple-icon.png",
]

for p in dest_paths:
    os.makedirs(os.path.dirname(p), exist_ok=True)
    circular_img.save(p, "PNG")
    print(f"Saved: {p}")

# Save multi-size favicon.ico
ico_path_public = r"c:\outside\project\houseofnihara\public\favicon.ico"
ico_path_app = r"c:\outside\project\houseofnihara\app\favicon.ico"

circular_img.save(
    ico_path_public, 
    format="ICO", 
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
)
circular_img.save(
    ico_path_app, 
    format="ICO", 
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
)
print("Saved ICO favicons successfully!")
