function buildPrompt({ text, mode }) {
  return `
Summarize the following text in a ${mode} tone.
Keep it structured and clear.

Text:
${text}
`;
}


module.exports = { buildPrompt };
