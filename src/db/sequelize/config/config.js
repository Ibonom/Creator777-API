/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
if (process.env.NODE_ENV === ("development" || "test")) require("ts-node/register");
const config = require(`./config-app.ts`);

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ...config.development,
};

const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ...config.test,
};
const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ...config.production,
};

module.exports = { development, test, production };
