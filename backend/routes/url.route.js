const express = require("express");
const router = express.Router();

const { UrlToText } = require("../utils/UrlToText");
const { buildPrompt } = require("../utils/prompt");
const { generateSummary } = require("../services/ai.service");

router.post("/", async (req, res) => {
  const { url, mode, length } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL required" });
  }

  try {
    const text = await UrlToText(url);

    const prompt = buildPrompt({ text, mode, length });

    const summary = await generateSummary({ prompt, length });

    res.json({ summary });

  } catch (err) {
    console.error("URL SUMMARY ERROR:", err);
    res.status(500).json({ error: "Failed to summarize URL" });
  }
});

module.exports = router;
