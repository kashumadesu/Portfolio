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
      JSON.stringify({ reply: "API key is missing in environment variables." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ reply: "Invalid request body." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { message } = body;
  if (!message || typeof message !== "string" || !message.trim()) {
    return new Response(
      JSON.stringify({ reply: "Please provide a valid question." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:streamGenerateContent?alt=sse&key=${apiKey.trim()}`;

    const geminiRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [
            {
              text: `${PORTFOLIO_CONTEXT}\n\nStyle Guide: Be direct, helpful, and concise. Keep answers punchy and relevant to Michael's portfolio.`,
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
          temperature: 0.2,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!geminiRes.ok) {
      const errorData = await geminiRes.json();
      return new Response(
        JSON.stringify({
          reply: `API Error: ${errorData.error?.message || "Generation error"}`,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = geminiRes.body.getReader();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop();

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const jsonStr = line.replace(/^data:\s*/, "").trim();
                if (!jsonStr || jsonStr === "[DONE]") continue;

                try {
                  const parsed = JSON.parse(jsonStr);
                  const chunkText =
                    parsed?.candidates?.[0]?.content?.parts?.[0]?.text || "";
                  if (chunkText) {
                    controller.enqueue(encoder.encode(chunkText));
                  }
                } catch {
                  // Skip incomplete JSON line splits
                }
              }
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Stream route error:", error);
    return new Response(
      JSON.stringify({ reply: "Connection failed. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}