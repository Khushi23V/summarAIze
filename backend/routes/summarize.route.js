const express = require("express");
const router = express.Router();

const { generateSummary } = require("../services/ai.service");
const { buildPrompt } = require("../utils/prompt");

router.post("/", async (req, res) => {
  const { text, tone } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const prompt = buildPrompt({ text, tone: tone || "neutral" });

    const summary = await generateSummary({ text, prompt });

    res.json({ summary });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;