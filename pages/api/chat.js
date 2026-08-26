// pages/api/chat.js
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_CONTEXT } from "../../data/portfolioContext";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ reply: "Please provide a valid question." });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
        temperature: 0.3,
      },
    });

    const replyText =
      response?.text ||
      "I'm here to answer any questions regarding Michael's projects, technical skills, and experience.";

    return res.status(200).json({ reply: replyText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({
      reply:
        "I ran into an issue connecting to the AI service. Please verify your GEMINI_API_KEY or email Michael directly at michaelapril81416@gmail.com!",
    });
  }
}