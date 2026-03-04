const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

async function UrlToText(url) {
  const response = await axios.get(url);

  const dom = new JSDOM(response.data, { url });

  const reader = new Readability(dom.window.document);
  const article = reader.parse();

  return article?.textContent || "";
}

module.exports = { UrlToText };