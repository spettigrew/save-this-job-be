const okta = require("@okta/okta-sdk-nodejs");

const client = new okta.Client({
  orgUrl: `https://${process.env.OKTA_ORG}`,
  token: process.env.OKTA_AUTH_TOKEN
});

module.exports = client;
