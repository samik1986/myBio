import os
import glob

artifacts_dir = r"C:\Users\banerjee\.gemini\antigravity-ide\brain\a045dea0-4991-4202-9457-4df94b1bc54b\scratch\candidates"
out_md = r"C:\Users\banerjee\.gemini\antigravity-ide\brain\a045dea0-4991-4202-9457-4df94b1bc54b\image_options.md"

def get_images(prefix):
    files = glob.glob(os.path.join(artifacts_dir, prefix + "*"))
    # Format to absolute file URIs
    # Replace backslashes with forward slashes for URL
    return sorted([f"file:///{f.replace(os.sep, '/')}" for f in files])

makeup = get_images("MakeUpMirror")
neuro = get_images("Neuro")
posix = get_images("PosIX")

content = """# Image Selection Options

Please review the extracted images below for each paper. When you find the best ones, simply reply to me with the filenames (e.g. "Use MakeUpMirror_page7_2.jpeg, Neuro_page4_1.jpeg, and PosIX_page8_2.jpeg").

## MakeUpMirror Paper
"""

for m in makeup:
    basename = os.path.basename(m)
    content += f"### {basename}\n![{basename}]({m})\n\n---\n"

content += "\n## Neurocomputing Paper (Transfer-CNN)\n"
for n in neuro:
    basename = os.path.basename(n)
    content += f"### {basename}\n![{basename}]({n})\n\n---\n"

content += "\n## PosIX GAN Paper\n"
for p in posix:
    basename = os.path.basename(p)
    content += f"### {basename}\n![{basename}]({p})\n\n---\n"

with open(out_md, 'w', encoding='utf-8') as f:
    f.write(content)

print("Generated image_options.md")
