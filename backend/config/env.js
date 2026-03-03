require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 10000,
  HF_API_KEY: process.env.HF_API_KEY,
};