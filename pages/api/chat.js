// pages/api/chat.js
import { PORTFOLIO_CONTEXT } from "../../data/portfolioContext";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      reply: "API key is missing in .env.local. Please check GEMINI_API_KEY.",
    });
  }

  const { message } = req.body;
  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ reply: "Please provide a valid question." });
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: PORTFOLIO_CONTEXT }]
        },
        contents: [
          {
            role: "user",
            parts: [{ text: message }]
          }
        ],
        generationConfig: {
          temperature: 0.3
        }
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("Gemini API Error details:", data.error);
      return res.status(500).json({
        reply: `API Error: ${data.error.message || "Invalid request"}`
      });
    }

    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm here to answer questions regarding Michael's projects, technical skills, and experience.";

    return res.status(200).json({ reply: replyText });
  } catch (error) {
    console.error("Fetch error:", error);
    return res.status(500).json({
      reply: "Connection error. Please check your network or API key."
    });
  }
}