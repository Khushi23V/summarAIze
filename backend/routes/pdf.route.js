const express = require("express");
const multer = require("multer");

const { PdfToText } = require("../utils/PdfToText");
const { buildPrompt } = require("../utils/prompt");
const { generateSummary } = require("../services/ai.service");

const router = express.Router();
const upload = multer();

router.post("/", upload.single("file"), async (req, res) => {
  const { mode, length } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "PDF file required" });
  }

  try {
    const text = await pdfToText(req.file.buffer);

    const prompt = buildPrompt({
      text,
      mode: mode || "Formal",
      length: length || "Medium"
    });

    const summary = await generateSummary({ prompt, length });

    res.json({ summary });

  } catch (err) {
    console.error("PDF SUMMARY ERROR:", err);
    res.status(500).json({ error: "Failed to summarize PDF" });
  }
});

module.exports = router;