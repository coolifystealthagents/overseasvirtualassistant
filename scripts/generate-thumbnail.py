#!/usr/bin/env python3
"""Create a deterministic 1200x630 article thumbnail from approved backgrounds.

The routine assigns backgrounds by a stable slug hash, so reruns do not create
new imagery or make a Gemini request.  Article code should reference the
generated WebP under ``/images/thumbnails/generated/{slug}.webp``.
"""

from __future__ import annotations

import argparse
import hashlib
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


WIDTH, HEIGHT = 1200, 630
CONCEPTS = (
    "fair-comparison.png",
    "secure-operations.png",
    "global-handoff.png",
)


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        if bold
        else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    )
    for candidate in candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def make_thumbnail(slug: str, title: str, root: Path) -> Path:
    source_dir = root / "public/images/thumbnails/concepts"
    index = int(hashlib.sha256(slug.encode("utf-8")).hexdigest(), 16) % len(CONCEPTS)
    source = source_dir / CONCEPTS[index]
    if not source.exists():
        raise FileNotFoundError(f"approved thumbnail concept is missing: {source}")

    image = Image.open(source).convert("RGB").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (8, 22, 38, 0))
    draw = ImageDraw.Draw(overlay)
    draw.rectangle((0, 0, WIDTH, HEIGHT), fill=(7, 22, 38, 92))
    draw.rectangle((60, 60, 1140, 570), outline=(255, 255, 255, 175), width=3)
    draw.text((92, 94), "OVERSEASVIRTUALASSISTANT.COM", font=font(26, True), fill="white")
    lines = textwrap.wrap(title.strip(), width=30)
    y = 220
    for line in lines[:4]:
        draw.text((92, y), line, font=font(58, True), fill="white", stroke_width=1, stroke_fill=(0, 0, 0, 80))
        y += 70
    draw.text((92, 520), "Overseas virtual assistant services", font=font(24), fill=(220, 240, 248, 255))

    output = root / "public/images/thumbnails/generated" / f"{slug}.webp"
    output.parent.mkdir(parents=True, exist_ok=True)
    image = Image.alpha_composite(image.convert("RGBA"), overlay).convert("RGB")
    image.save(output, "WEBP", quality=88, method=6)
    return output


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("slug")
    parser.add_argument("title")
    parser.add_argument("--root", type=Path, default=Path.cwd())
    args = parser.parse_args()
    output = make_thumbnail(args.slug, args.title, args.root)
    with Image.open(output) as check:
        if check.size != (WIDTH, HEIGHT) or check.format != "WEBP":
            raise ValueError("thumbnail validation failed")
    print(output.relative_to(args.root))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
