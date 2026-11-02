from pathlib import Path
from PIL import Image

base = Path(r"d:\persnal_learning\Projects\Abdullah\Portfoilio_AQT\public\assets\Experience")


def flood_remove(path: Path, is_bg, out_name=None):
    img = Image.open(path).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    visited = [[False] * h for _ in range(w)]
    stack = []
    for x in range(w):
        stack.append((x, 0))
        stack.append((x, h - 1))
    for y in range(h):
        stack.append((0, y))
        stack.append((w - 1, y))

    while stack:
        x, y = stack.pop()
        if x < 0 or y < 0 or x >= w or y >= h or visited[x][y]:
            continue
        visited[x][y] = True
        r, g, b, a = pixels[x, y]
        if not is_bg(r, g, b, a):
            continue
        pixels[x, y] = (0, 0, 0, 0)
        stack.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    out = base / (out_name or path.name)
    img.save(out)
    print(f"saved {out.name} {img.size}")


def near_black(r, g, b, a, t=35):
    return a > 0 and r <= t and g <= t and b <= t


def near_white(r, g, b, a, t=245):
    return a > 0 and r >= t and g >= t and b >= t


# Restore originals from Cursor assets if present, then process
sources = {
    "harbor-academy.png": Path(
        r"C:\Users\hp\.cursor\projects\d-persnal-learning-Projects-Abdullah-Portfoilio-AQT\assets\Spare-0d1d71b7-4f69-44c3-9142-f15b1f550151.png"
    ),
    "innovence-solutions.png": Path(
        r"C:\Users\hp\.cursor\projects\d-persnal-learning-Projects-Abdullah-Portfoilio-AQT\assets\logo-3325db82-a70a-4137-8591-5f1b7229a612.png"
    ),
}

for name, src in sources.items():
    dest = base / name
    if src.exists():
        Image.open(src).convert("RGBA").save(dest)
        print(f"copied {name}")

flood_remove(base / "harbor-academy.png", near_black)
flood_remove(base / "innovence-solutions.png", near_black)

# Soften white card backgrounds on LinkedIn logos if present
for name in ("intrapreneur.png", "skill-hunger.png"):
    p = base / name
    if p.exists():
        flood_remove(p, near_white)
