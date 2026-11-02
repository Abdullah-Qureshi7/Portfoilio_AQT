from pathlib import Path
from PIL import Image

base = Path(r"d:\persnal_learning\Projects\Abdullah\Portfoilio_AQT\public\assets\Experience")

for name in (
    "intrapreneur.png",
    "skill-hunger.png",
    "harbor-academy.png",
    "innovence-solutions.png",
):
    path = base / name
    img = Image.open(path).convert("RGBA")
    bbox = img.getbbox()
    if not bbox:
        print(f"skip {name}")
        continue
    cropped = img.crop(bbox)
    cropped.save(path)
    print(f"{name}: {img.size} -> {cropped.size}")
