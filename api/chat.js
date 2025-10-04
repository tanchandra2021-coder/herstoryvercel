import OpenAI from "openai";

export default async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return res.status(500).json({ error: "OpenAI API key not set" });
  }

  const client = new OpenAI({ apiKey: OPENAI_API_KEY });

  if (req.method === "POST") {
    const { messages, model = "gpt-3.5-turbo" } = req.body;

    try {
      const response = await client.chat.completions.create({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 400
      });
      res.status(200).json({ content: response.choices[0].message.content });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
