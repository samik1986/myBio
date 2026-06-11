import { repoData } from './repo_data.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API Key is not configured on the server.' });
  }

  try {
    const payload = req.body;
    
    if (payload.system_instruction && payload.system_instruction.parts && payload.system_instruction.parts.length > 0) {
      payload.system_instruction.parts[0].text += `\n\nHere is a database of extracted functions from his repositories. If the user asks a technical or research question, explicitly refer to these functions and repositories to help them:\n\n${repoData}`;
    }
    // Forward the request to Google's Gemini API
    const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const data = await geminiRes.json();
    
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error in chat proxy:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
