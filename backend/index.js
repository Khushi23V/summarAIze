const express = require("express");
const cors = require("cors");

const { PORT } = require("./config/env");
const summarizeRoute = require("./routes/summarize.route");
const urlRoute = require("./routes/url.route");
const pdfRoute = require("./routes/pdf.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/summarize-url", urlRoute);
app.use("/summarize", summarizeRoute);
app.use("/summarize-pdf", pdfRoute);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
