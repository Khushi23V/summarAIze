const axios = require("axios");

async function generateSummary({ prompt, length }) {

  // 🔥 Dynamic token control
  let maxTokens = 200; // default

  if (length === "Short") maxTokens = 120;
  if (length === "Medium") maxTokens = 220;
  if (length === "Long") maxTokens = 350;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI that summarizes text clearly and accurately."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.5,
        max_tokens: maxTokens 
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error("GROQ ERROR:", error.response?.data || error.message);
    throw new Error("AI provider failed");
  }
}

module.exports = { generateSummary };