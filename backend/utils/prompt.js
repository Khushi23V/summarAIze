function buildPrompt({ text, mode, length }) {

  let sentenceRule = "";

  if (length === "Short") {
    sentenceRule = "Write 3-4 sentences.";
  } else if (length === "Medium") {
    sentenceRule = "Write 5-6 sentences.";
  } else if (length === "Long") {
    sentenceRule = "Write 8-10 sentences.";
  } else {
    sentenceRule = "Write 5-6 sentences.";
  }

  return `
You are an expert summarizer.

Summarize the following text in a ${mode} tone.

Strict Rules:
- The summary MUST be shorter than the original text.
- ${sentenceRule}
- Reduce to only the key ideas.
- Do NOT repeat headings.
- Do NOT add new information.
- Keep it concise and structured.

Text:
${text}
`;
}

module.exports = { buildPrompt };