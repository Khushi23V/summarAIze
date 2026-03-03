const axios = require("axios");
const { HF_API_KEY } = require("../config/env");

async function generateSummary({ text, prompt }) {
  try {
    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/facebook/bart-large-cnn",
      {
        inputs: prompt || text,
        parameters: {
          max_length: 150,
          min_length: 40,
          do_sample: false
        },
        options: {
          wait_for_model: true
        }
      },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 100000
      }
    );

    return response.data[0]?.summary_text;

  } catch (error) {
    console.error("AI SERVICE ERROR:", error.message);
    throw new Error("AI provider failed");
  }
}

module.exports = { generateSummary };