import json
from scholarly import scholarly

def main():
    try:
        search_query = scholarly.search_author('Samik Banerjee')
        author = next(search_query)
        scholarly.fill(author, sections=['publications'])
        
        pubs_list = []
        for pub in author['publications']:
            try:
                scholarly.fill(pub)
            except Exception as e:
                print("Error filling pub:", e)
                
            title = pub['bib'].get('title', '')
            venue = pub['bib'].get('journal', pub['bib'].get('conference', pub['bib'].get('venue', 'Unknown Venue')))
            year = pub['bib'].get('pub_year', '2024')
            link = pub.get('pub_url', '#')
            citations = pub.get('num_citations', 0)
            
            pubs_list.append({
                "title": title,
                "venue": venue,
                "year": year,
                "link": link,
                "citations": citations
            })
            print(f"Fetched: {title} - {venue} ({year})")
            
        with open('pubs.json', 'w') as f:
            json.dump(pubs_list, f, indent=4)
        print("Done fetching publications.")
    except Exception as e:
        print(f"Failed: {e}")

if __name__ == '__main__':
    main()
