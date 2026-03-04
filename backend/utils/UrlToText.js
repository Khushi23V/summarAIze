const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

async function UrlToText(url) {
  const response = await axios.get(url, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
  }
});

  const dom = new JSDOM(response.data, { url });

  const reader = new Readability(dom.window.document);
  const article = reader.parse();

  return article?.textContent || "";
}


module.exports = { UrlToText };
