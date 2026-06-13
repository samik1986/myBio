# Function-Level Deep Summaries

## Goal Description
Enhance the AI data pipeline to not only generate file-level and repo-level insights but also explicitly use Gemini to generate an in-depth summary for *each function* within the parsed files. The UI will then be updated to display these function-level deep insights.

## Open Questions
- Generating an in-depth summary for every single function across 50+ repositories will exponentially increase the token usage and API calls. Even if batched per file, large files with 50+ functions might cause the model to output truncated JSON or hit rate limits much faster. Are you okay with the script taking significantly longer (potentially hours) to fully process the entire universe of your codebase on the free tier?

## Proposed Changes

### Data Ingestion Pipeline

#### [MODIFY] [generate_deep_summaries.py](file:///C:/Users/banerjee/.gemini/antigravity-ide/brain/a045dea0-4991-4202-9457-4df94b1bc54b/scratch/generate_deep_summaries.py)
- Update `generate_summary` to take the list of `extracted_functions` for the specific file.
- Change the prompt to instruct Gemini to return a JSON object: `{"function_name": "in-depth summary explaining logic and usage..."}`.
- Parse the returned JSON and inject the `ai_summary` field into the existing `functions_extracted` dictionary in the database.
- Keep the `summary` field for the overall file insight.

### Frontend UI

#### [MODIFY] [RepoFunctions.jsx](file:///C:/Users/banerjee/Desktop/myBio/src/components/GithubRepos/RepoFunctions.jsx)
- Update the `<Collapsible>` section for individual functions to explicitly render the new `fn.ai_summary` property.
- Style it distinctly from the raw `fn.docstring` to highlight that it is an AI-generated insight.

## Verification Plan
1. Run the modified `generate_deep_summaries.py` on a single repository (e.g., `3d-centroid-proofreader`) to test the JSON parsing and DB injection.
2. Verify the `3d-centroid-proofreader.json` database file now contains `ai_summary` fields for its functions.
3. Start the Vite development server and verify the UI correctly displays the new deep insights under each function dropdown.
