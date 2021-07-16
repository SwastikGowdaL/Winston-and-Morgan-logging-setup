const buildDevLogger = require("./dev-logger");
const buildProdLogger = require("./prod-logger");
require('dotenv').config();

let logger = null;
if (process.env.NODE_ENV === "production") {
  logger = buildProdLogger();
} else {
  logger = buildDevLogger();
}

module.exports = logger;