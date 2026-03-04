const pdfParse = require("pdf-parse");

async function PdfToText(buffer) {
  const data = await pdfParse(buffer);

  if (!data.text) {
    throw new Error("No text found in PDF");
  }

  return data.text.slice(0, 6000);
}

module.exports = { PdfToText };