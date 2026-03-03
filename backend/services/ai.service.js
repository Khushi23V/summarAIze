const axios = require("axios");

async function generateSummary({ prompt }) {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-8b-8192",
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
        max_tokens: 500
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
