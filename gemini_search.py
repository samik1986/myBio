import json
import re

# I will parse the JS array from publicationsData.js into python
with open(r"c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js", "r", encoding="utf-8") as f:
    data = f.read()

# Naive parse to extract titles, years, categories
titles = re.findall(r'title:\s*"(.*?)"', data)
years = re.findall(r'year:\s*(\d+)', data)
cats = re.findall(r'categories:\s*\[(.*?)\]', data)

results = []
for i in range(len(titles)):
    if i < len(years) and i < len(cats):
        # Clean up categories
        c = [x.strip('" ') for x in cats[i].split(',')]
        results.append({
            "title": titles[i],
            "year": int(years[i]),
            "categories": c
        })

print("Search for 'Neuroscience' in 2021:")
for r in results:
    if r["year"] == 2021 and "Neuroscience" in r["categories"]:
        print(f"- {r['title']}")
