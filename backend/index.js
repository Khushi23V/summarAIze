app.post("/summarize", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/facebook/bart-large-cnn",
      {
        inputs: text,
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
        timeout: 20000
      }
    );

    const summary = response.data[0]?.summary_text;

    if (!summary) {
      return res.status(500).json({ error: "No summary returned" });
    }

    res.json({ summary });

  } catch (error) {
    console.error("HF ERROR STATUS:", error.response?.status);
    console.error("HF ERROR DATA:", error.response?.data);
    console.error("HF ERROR MESSAGE:", error.message);

    res.status(500).json({ error: "AI service failed" });
  }
});
