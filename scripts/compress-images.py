#!/usr/bin/env python3
"""
Reusable Image Compression Script for Control Genesis
======================================================
Rules:
- Scans target image directory (default: src/assets)
- Only processes images strictly > 500 KB (512,000 bytes)
- Images <= 500 KB are left untouched as is
- Compresses to WebP format with 80% quality
- Checks for size reduction: only keeps new file if it actually saves space
- Updates all code references across src/ (.js, .jsx, .ts, .tsx, .css, .html)
- Supports --dry-run and custom threshold/quality via CLI arguments

Usage:
  python3 scripts/compress-images.py
  python3 scripts/compress-images.py --threshold 500 --quality 80
  python3 scripts/compress-images.py --dry-run
"""

import os
import sys
import argparse
from pathlib import Path
from PIL import Image

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_ASSETS_DIR = PROJECT_ROOT / "src" / "assets"
DEFAULT_SRC_DIR = PROJECT_ROOT / "src"
SUPPORTED_EXTS = {".png", ".jpg", ".jpeg", ".webp"}
SOURCE_CODE_EXTS = {".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".json"}

def parse_args():
    parser = argparse.ArgumentParser(description="Compress images > 500KB into WebP 80% quality")
    parser.add_argument("--threshold", type=float, default=500.0, help="Size threshold in KB (default: 500)")
    parser.add_argument("--quality", type=int, default=80, help="WebP quality 1-100 (default: 80)")
    parser.add_argument("--assets-dir", type=str, default=str(DEFAULT_ASSETS_DIR), help="Directory to scan for images")
    parser.add_argument("--dry-run", action="store_true", help="Simulate without modifying files")
    return parser.parse_args()

def update_code_references(src_dir, old_rel_path, new_rel_path):
    """
    Finds and updates imports or path references across all source files.
    Matches paths like 'screenshots/latejcreations/img1.png' -> 'screenshots/latejcreations/img1.webp'
    as well as exact file basenames where appropriate.
    """
    updated_files = 0
    # Normalize slashes for consistency across platforms
    old_target = old_rel_path.replace("\\", "/")
    new_target = new_rel_path.replace("\\", "/")
    
    old_basename = Path(old_rel_path).name
    new_basename = Path(new_rel_path).name

    for root, _, files in os.walk(src_dir):
        for file in files:
            file_path = Path(root) / file
            if file_path.suffix.lower() in SOURCE_CODE_EXTS:
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()

                    new_content = content
                    # Primary match: relative asset subpath (e.g., 'screenshots/latej/img1.png')
                    if old_target in new_content:
                        new_content = new_content.replace(old_target, new_target)
                    # Secondary match: exact filename in quotes/slashes
                    elif f"/{old_basename}" in new_content:
                        new_content = new_content.replace(f"/{old_basename}", f"/{new_basename}")

                    if new_content != content:
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        updated_files += 1
                except Exception as e:
                    print(f"  [WARN] Failed to read/update {file_path}: {e}")
    return updated_files

def compress_image(image_path, quality=80):
    """
    Opens an image, handles transparency, and saves to a temporary WebP buffer/file.
    Returns (temp_path, new_size_bytes).
    """
    temp_output = image_path.with_suffix(".tmp.webp")
    with Image.open(image_path) as img:
        # Preserve transparency for RGBA, LA, or Palette images
        if img.mode in ("RGBA", "LA"):
            pass
        elif img.mode == "P":
            img = img.convert("RGBA")
        elif img.mode != "RGB":
            img = img.convert("RGB")
        
        # Save as WebP with 80% quality and maximum compression effort (method=6)
        img.save(temp_output, "WEBP", quality=quality, method=6)
    
    new_size = temp_output.stat().st_size
    return temp_output, new_size

def main():
    args = parse_args()
    assets_dir = Path(args.assets_dir)
    threshold_bytes = args.threshold * 1024
    
    print("\n========================================================")
    print("   Control Genesis — Reusable Image Compression Script   ")
    print("========================================================")
    print(f"Target Assets Dir : {assets_dir.relative_to(PROJECT_ROOT)}")
    print(f"Size Threshold    : > {args.threshold} KB")
    print(f"WebP Quality      : {args.quality}%")
    print(f"Dry Run Mode      : {args.dry_run}")
    print("--------------------------------------------------------\n")

    if not assets_dir.exists():
        print(f"Error: Assets directory {assets_dir} does not exist.")
        sys.exit(1)

    images_scanned = 0
    images_skipped = 0
    images_compressed = 0
    total_orig_bytes = 0
    total_new_bytes = 0
    code_refs_updated_total = 0

    results = []

    for root, _, files in os.walk(assets_dir):
        for file in sorted(files):
            file_path = Path(root) / file
            if file_path.suffix.lower() not in SUPPORTED_EXTS:
                continue
            
            # Skip temporary files
            if ".tmp." in file:
                continue

            images_scanned += 1
            orig_size = file_path.stat().st_size

            # Check threshold: only compress if > 500 KB
            if orig_size <= threshold_bytes:
                images_skipped += 1
                continue

            # File is > 500KB - compress it!
            rel_to_assets = file_path.relative_to(assets_dir)
            orig_size_kb = orig_size / 1024
            
            if args.dry_run:
                print(f"[DRY-RUN WOULD COMPRESS] {rel_to_assets} ({orig_size_kb:.1f} KB)")
                images_compressed += 1
                continue

            try:
                temp_webp, new_size = compress_image(file_path, quality=args.quality)
                new_size_kb = new_size / 1024

                # Only replace if new file is actually smaller
                if new_size < orig_size:
                    final_webp = file_path.with_suffix(".webp")
                    
                    # If replacing an existing webp or different format
                    if temp_webp != final_webp:
                        if final_webp.exists() and final_webp != file_path:
                            final_webp.unlink()
                        temp_webp.rename(final_webp)

                    # Remove old file if format changed (e.g., .png -> .webp)
                    if file_path != final_webp and file_path.exists():
                        file_path.unlink()

                    # Update code references
                    new_rel_to_assets = final_webp.relative_to(assets_dir)
                    refs_updated = update_code_references(
                        DEFAULT_SRC_DIR, 
                        str(rel_to_assets), 
                        str(new_rel_to_assets)
                    )
                    code_refs_updated_total += refs_updated

                    saved_kb = orig_size_kb - new_size_kb
                    saved_pct = (saved_kb / orig_size_kb) * 100
                    images_compressed += 1
                    total_orig_bytes += orig_size
                    total_new_bytes += new_size

                    results.append({
                        "file": str(rel_to_assets),
                        "orig_kb": orig_size_kb,
                        "new_kb": new_size_kb,
                        "saved_pct": saved_pct,
                        "refs": refs_updated
                    })
                    print(f"✓ [COMPRESSED] {rel_to_assets}: {orig_size_kb:7.1f} KB -> {new_size_kb:6.1f} KB (-{saved_pct:4.1f}%) [Refs updated: {refs_updated}]")
                else:
                    # Clean up temp file
                    if temp_webp.exists():
                        temp_webp.unlink()
                    images_skipped += 1
                    print(f"- [KEPT ORIGINAL] {rel_to_assets}: already optimal ({orig_size_kb:7.1f} KB)")
            except Exception as e:
                print(f"✗ [ERROR] Failed to compress {rel_to_assets}: {e}")

    # Summary
    print("\n--------------------------------------------------------")
    print("                    COMPRESSION SUMMARY                  ")
    print("--------------------------------------------------------")
    print(f"Total Images Scanned     : {images_scanned}")
    print(f"Skipped (<= 500 KB)      : {images_skipped}")
    print(f"Successfully Compressed  : {images_compressed}")
    
    if total_orig_bytes > 0:
        total_saved_bytes = total_orig_bytes - total_new_bytes
        total_saved_mb = total_saved_bytes / (1024 * 1024)
        orig_mb = total_orig_bytes / (1024 * 1024)
        new_mb = total_new_bytes / (1024 * 1024)
        overall_saved_pct = (total_saved_bytes / total_orig_bytes) * 100
        print(f"Original Size (affected) : {orig_mb:.2f} MB")
        print(f"New Size (affected)      : {new_mb:.2f} MB")
        print(f"Total Space Saved        : {total_saved_mb:.2f} MB (-{overall_saved_pct:.1f}%)")
        print(f"Code Imports Updated     : {code_refs_updated_total} occurrences")
    print("========================================================\n")

if __name__ == "__main__":
    main()
