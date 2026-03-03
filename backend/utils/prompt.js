function buildPrompt({ text, tone }) {
  return `
Summarize the following text in a ${tone} tone.
Keep it structured and clear.

Text:
${text}
`;
}

module.exports = { buildPrompt };