function buildPrompt({ text, mode }) {
  return `
You are an expert summarizer.

Summarize the following text in a ${mode} tone.

Rules:
- The summary must be SHORTER than the original text.
- Reduce the content to key ideas only.
- Do NOT repeat headings.
- Do NOT expand or add new information.
- Keep it concise and clear.
- Maximum 5-6 sentences.

Text:
${text}
`;
}

module.exports = { buildPrompt };
