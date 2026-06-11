import re

pubs_file = r"c:\Users\banerjee\Desktop\myBio\src\data\publicationsData.js"

with open(pubs_file, 'r', encoding='utf-8') as f:
    pub_data = f.read()

# We need to replace image: imageDatabase["img_X"] or image: imageDatabase["generic_img"]
# with image: imageDatabase["pub-X"] based on the id of the publication.

# Let's extract all publications
pubs_list = re.findall(r'(\{\s*id:\s*"([^"]+)",(.*?)\})', pub_data, re.DOTALL)

for full_match, pub_id, rest in pubs_list:
    # Find the current image line
    new_match = re.sub(r'image:\s*imageDatabase\["[^"]+"\]', f'image: imageDatabase["{pub_id}"]', full_match)
    pub_data = pub_data.replace(full_match, new_match)

with open(pubs_file, 'w', encoding='utf-8') as f:
    f.write(pub_data)

print("Fixed publicationsData.js to use proper pub-id keys!")
