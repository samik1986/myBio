from scholarly import scholarly

print("Searching for author: Samik Banerjee...")
try:
    search_query = scholarly.search_author('Samik Banerjee')
    author = scholarly.fill(next(search_query))
    
    print(f"Total Citations: {author['citedby']}")
    
    for pub in author['publications']:
        print(f"Citations: {pub['num_citations']:<5} | {pub['bib']['title']}")
except Exception as e:
    print(f"Error fetching data from Google Scholar: {e}")
