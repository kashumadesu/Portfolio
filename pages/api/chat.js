// pages/api/chat.js
import { PORTFOLIO_CONTEXT } from "../../data/portfolioContext";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        reply: "API key is missing. Please check your environment variables.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ reply: "Invalid request payload." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const { message } = body;
  if (!message || typeof message !== "string" || !message.trim()) {
    return new Response(
      JSON.stringify({ reply: "Please provide a valid question." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey.trim()}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [
            {
              text: `${PORTFOLIO_CONTEXT}\n\nStyle Guide: Provide direct, well-structured, and concise responses. Do not cut off mid-thought.`,
            },
          ],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 800,
        },
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("Gemini API Error details:", data.error);
      return new Response(
        JSON.stringify({
          reply: `API Error: ${data.error.message || "Invalid request"}`,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm here to answer questions regarding Michael's projects, technical skills, and experience.";

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Edge handler error:", error);
    return new Response(
      JSON.stringify({
        reply: "Connection error. Please check your network or API key.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}